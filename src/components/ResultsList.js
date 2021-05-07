import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
    Filter,
    SelectInput, 
    TextInput,
    BooleanField, 
} from 'react-admin';
const ResultsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="title" alwaysOn /> 
            <SelectInput optionText="title" /> 
    </Filter>
);
const ResultsList = (props) =>  {
    return(
        <List filters={<ResultsFilter />} {...props}>
            <Datagrid>
                <TextField source='candidate_rollno' />
                <TextField source='candidate_name' />
                <DateField source='candidate_gender' />
                <BooleanField source = 'candidate_result' /> 
                <EditButton basePath='/results' />
                <DeleteButton basePath='/results' /> 
            </Datagrid>
        </List>
    )
}
export default ResultsList; 