import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    // EditButton,
    // DeleteButton,
    Filter,
    TextInput,
    // SelectInput,
} from 'react-admin';
const VoterskrFilter = (props) => (
    <Filter {...props}>
        <TextInput
            label='Search by Roll Number'
            source='id'
            alwaysOn
        />
        <TextInput
            label='Search by Name'
            source='Voter_Name'
            alwaysOn
        />
        {/* <SelectInput optionText='Voter_Dept' /> */}
    </Filter>
);
const Voters_krList = (props) => {
    return (
        <List filters={<VoterskrFilter />} {...props}>
            <Datagrid>
                <TextField
                    source='id'
                    label='Roll Number'
                />
                <TextField
                    source='Voter_Name'
                    label='Name'
                />
                <TextField source='Batch' />
                <TextField source='Net_id' />
                <DateField
                    source='Voter_DOB'
                    label='Date of Birth'
                />
                <TextField
                    source='Voter_Dept'
                    label='Department'
                />
                <TextField
                    source='Voter_Gender'
                    label='Gender'
                />
                {/* <EditButton basePath='/voters_kr' />
                <DeleteButton basePath='/voters_kr' />  */}
            </Datagrid>
        </List>
    );
};
export default Voters_krList;
