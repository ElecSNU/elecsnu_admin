import React, { useState } from 'react';
import Results from './Result';
import {
    Edit,
    SimpleForm,
    TextInput,
    DateTimeInput,
    BooleanInput,
    ArrayInput,
    SimpleFormIterator,
    Button,
} from 'react-admin';

const NewElectionsEdit = (props) => {
    const [showResults, setShowResults] = useState(false);

    return (
        <>
            {showResults ? (
                <Results
                    electionid={props.id}
                    setShowResults={setShowResults}
                />
            ) : (
                <></>
            )}
            <Edit title='Edit an election' {...props}>
                <SimpleForm>
                    <TextInput source='id' />
                    <TextInput source='election_name' />
                    <Button
                        label='Show Current Results'
                        variant='contained'
                        color='primary'
                        onClick={() =>
                            setShowResults(
                                (showResults) =>
                                    !showResults
                            )
                        }
                    />
                    <ArrayInput source='election_candidates'>
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
                    <ArrayInput source='election_eligible_voters'>
                        <SimpleFormIterator>
                            <TextInput />
                        </SimpleFormIterator>
                    </ArrayInput>
                    <DateTimeInput source='election_end_time' />
                    <ArrayInput source='election_results'>
                        <SimpleFormIterator>
                            <BooleanInput source='public' />
                        </SimpleFormIterator>
                    </ArrayInput>
                    <DateTimeInput source='election_start_time' />
                    <ArrayInput source='election_votes'>
                        <SimpleFormIterator>
                            <TextInput source='groups' />
                            <TextInput source='voter_gender' />
                        </SimpleFormIterator>
                    </ArrayInput>
                    <BooleanInput source='ended' />
                    <BooleanInput source='started' />
                    <ArrayInput source='voters'>
                        <SimpleFormIterator>
                            <TextInput />
                        </SimpleFormIterator>
                    </ArrayInput>
                </SimpleForm>
            </Edit>
        </>
    );
};
export default NewElectionsEdit;
