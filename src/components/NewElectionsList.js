import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    ArrayField,
    BooleanField,
    EditButton,
    DeleteButton,
} from 'react-admin';

const NewElectionsList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                {/* <ArrayField source = 'election_candidates' > 
                    <Datagrid>
                        <TextField source = 'candidate_gender' />
                        <TextField source = 'candidate_group' />
                        <TextField source = 'candidate_manifesto' />
                        <TextField source = 'candidate_name' />
                        <TextField source = 'candidate_roll_no' />
                    </Datagrid>
                </ArrayField> */}
                {/* <ArrayField source='election_eligible_voters'>
                    <Datagrid>
                        <TextField />
                    </Datagrid>
                </ArrayField> */}
                <TextField source='election_name' />
                <ArrayField
                    source='election_results'
                    label='Public'
                >
                    <Datagrid>
                        <BooleanField
                            source='public'
                            label=''
                        />
                    </Datagrid>
                </ArrayField>
                <DateField source='election_start_time' />
                <DateField source='election_end_time' />
                {/* <ArrayField source='election_votes'>
                    <Datagrid>
                        <TextField source='groups' />
                        <TextField source='voter_gender' />
                    </Datagrid>
                </ArrayField> */}
                <BooleanField source='ended' />
                <BooleanField source='started' />
                {/* <ArrayField source='voters'>
                    <Datagrid>
                        <TextField />
                    </Datagrid>
                </ArrayField> */}
                <EditButton basePath='/newelections' />
                <DeleteButton basePath='/newelections' />
            </Datagrid>
        </List>
    );
};
export default NewElectionsList;
