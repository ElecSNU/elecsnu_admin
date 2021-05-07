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
const ElectionsList = (props) => {
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
                <ArrayField source='election_eligible_voters'>
                    <Datagrid>
                        <TextField />
                    </Datagrid>
                </ArrayField>
                <DateField source='election_end_time' />
                <TextField source='election_name' />
                <ArrayField source='election_results'>
                    <Datagrid>
                        <BooleanField source='public' />
                    </Datagrid>
                </ArrayField>
                <DateField source='election_start_time' />
                <ArrayField source='election_votes'>
                    <Datagrid>
                        <TextField source='groups' />
                        <TextField source='voter_gender' />
                    </Datagrid>
                </ArrayField>
                <BooleanField source='ended' />
                <BooleanField source='startd' />
                <ArrayField source='voters'>
                    <Datagrid>
                        <TextField />
                    </Datagrid>
                </ArrayField>
                <EditButton basePath='/elections' />
                <DeleteButton basePath='/elections' />
            </Datagrid>
        </List>
    );
};
export default ElectionsList;
