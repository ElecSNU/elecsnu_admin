import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    DeleteButton,
    Filter,
    TextInput,
    SelectInput,
} from 'react-admin';
const VotergroupsFilter = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='id' alwaysOn />
        <SelectInput optionText='title' />
    </Filter>
);
const Voter_groupsList = (props) => {
    return (
        <List filters={<VotergroupsFilter />} {...props}>
            <Datagrid>
                <TextField source='id' label='Group Name' />
                <NumberField source='group_id' />
                {/* <ArrayField source = 'List'>
                    <Datagrid>
                        <TextField />     
                    </Datagrid>
                </ArrayField>  */}
                <EditButton basePath='/voter_groups' />
                <DeleteButton basePath='/voter_groups' />
            </Datagrid>
        </List>
    );
};
export default Voter_groupsList;
