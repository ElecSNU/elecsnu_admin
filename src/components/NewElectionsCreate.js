import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
    Create,
    SimpleForm,
    TextInput,
    DateTimeInput,
    BooleanInput,
    ArrayInput,
    SimpleFormIterator,
    SelectArrayInput,
    NumberInput,
    SaveButton,
    Toolbar,
} from 'react-admin';
import useFirestore from '../hooks/useFirestore';
import nodemailer from 'nodemailer';

const sendMail = async (email, subject, body) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.REACT_APP_MAIL_USER,
            pass: process.env.REACT_APP_MAIL_PASS,
        },
    });

    var mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: subject,
        text: body,
    };

    transporter.sendMail(
        mailOptions,
        function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        }
    );
};

const PostCreateToolbar = (props) => (
    <Toolbar {...props}>
        {/* <SaveButton submitOnEnter={true} /> */}
        <SaveButton
            label='SAVE'
            transform={(data) => {
                console.log(props.selectedvoters);

                let voters = [];
                props.votergroups.forEach((vg) => {
                    if (
                        props.selectedvoters.includes(
                            vg.group_id
                        )
                    ) {
                        voters = [...voters, ...vg.list];
                    }
                });
                let uniqueVoters = [...new Set(voters)];

                sendMail(
                    'ib370@snu.edu.in',
                    `Election for ${data.election_name} started!`,
                    `You are an eligible voter for ${
                        data.election_name
                    } and vote before ${String(
                        data.election_end_time
                    )}`
                );

                data.election_eligible_voters = uniqueVoters;
                return {
                    ...data,
                };
            }}
            submitOnEnter={false}
        />
    </Toolbar>
);

const NewElectionsEdit = (props) => {
    const voter_groups = useFirestore('voter_groups').docs;

    const [voterGroups, setVoterGroups] = useState([]);
    const [selectedVoters, setSelectedVoters] = useState(
        []
    );

    const getVoters = () => {
        if (voter_groups.length > 0) {
            let voters = [];
            voter_groups.forEach((vg) => {
                voters = [
                    ...voters,
                    {
                        id: vg.group_id,
                        name: vg.id,
                    },
                ];
            });
            setVoterGroups(voters);
        }
    };

    useEffect(() => {
        getVoters();
        // intercept();
        // eslint-disable-next-line
    }, [voter_groups]);

    // const intercept = () => {
    //     let button = document.querySelector(
    //         '.MuiButtonBase-root.MuiButton-root.MuiButton-contained.RaSaveButton-button-59.MuiButton-containedPrimary.Mui-disabled.Mui-disabled'
    //     );
    //     console.log(button);
    //     button.style.opacity = '0';
    // };

    return (
        <Create title='Create an election' {...props}>
            <SimpleForm
                toolbar={
                    <PostCreateToolbar
                        selectedvoters={selectedVoters}
                        votergroups={voter_groups}
                    />
                }
            >
                <TextInput
                    source='id'
                    defaultValue={uuid()}
                />
                <TextInput source='election_name' />
                <ArrayInput
                    source='election_candidates'
                    defaultValue={[]}
                >
                    <SimpleFormIterator>
                        {/* <TextInput source='candidate_group' /> */}
                        <TextInput
                            source='candidate_name'
                            label='Name'
                        />
                        <TextInput
                            source='candidate_roll_no'
                            label='Roll Number'
                        />
                        <TextInput
                            source='candidate_gender'
                            label='Gender'
                        />
                        <TextInput
                            source='candidate_manifesto'
                            label='Manifesto Link'
                        />
                    </SimpleFormIterator>
                </ArrayInput>
                <SelectArrayInput
                    source='election_eligible_voters_temp'
                    label='Select Voter Groups'
                    choices={voterGroups}
                    onClick={(e) => {
                        // voter_groups.forEach((vg) => {
                        //     if (
                        //         e.target.value.includes(
                        //             Number(vg.group_id)
                        //         )
                        //     ) {
                        //         selected = [
                        //             ...selected,
                        //             vg.list,
                        //         ];
                        //         return;
                        //     }
                        // });
                        // setSelectedVoters(selected);
                        console.log(e.target.value);
                        setSelectedVoters((sv) =>
                            e.target.value !== undefined
                                ? e.target.value
                                : sv
                        );
                    }}
                />
                <ArrayInput
                    source='election_eligible_voters'
                    defaultValue={selectedVoters}
                    value={selectedVoters}
                    style={{
                        opacity: '0',
                        height: '0',
                    }}
                >
                    <SimpleFormIterator>
                        <NumberInput />
                    </SimpleFormIterator>
                </ArrayInput>
                <DateTimeInput source='election_start_time' />
                <DateTimeInput source='election_end_time' />
                <ArrayInput
                    source='election_results'
                    defaultValue={[{ public: true }]}
                >
                    <SimpleFormIterator>
                        <BooleanInput
                            source='public'
                            label='Make results Public'
                            defaultValue={true}
                        />
                    </SimpleFormIterator>
                </ArrayInput>
                <ArrayInput
                    source='election_votes'
                    style={{ display: 'none' }}
                    defaultValue={[]}
                >
                    <SimpleFormIterator>
                        <TextInput source='groups' />
                        <TextInput source='voter_gender' />
                    </SimpleFormIterator>
                </ArrayInput>
                <BooleanInput
                    source='ended'
                    defaultValue={false}
                />
                <BooleanInput
                    source='started'
                    defaultValue={false}
                />
                <ArrayInput
                    source='voters'
                    style={{ display: 'none' }}
                    defaultValue={[]}
                >
                    <SimpleFormIterator>
                        <TextInput />
                    </SimpleFormIterator>
                </ArrayInput>
                {/* <SaveButton
                    label='SAVE'
                    handleSubmitWithRedirect={() => {
                        let button = document.querySelector(
                            '.MuiButtonBase-root.MuiButton-root.MuiButton-contained.RaSaveButton-button-59.MuiButton-containedPrimary.Mui-disabled.Mui-disabled'
                        );
                        // button.click();
                        console.log(button);
                    }}
                /> */}
            </SimpleForm>
        </Create>
    );
};
export default NewElectionsEdit;
