import React from 'react';
import { BooleanInput, Create, SimpleForm, TextInput } from 'react-admin'
const ResultsCreate =  (props) => {
    return (
        <Edit title='Create a Result' {...props}>
            <SimpleForm>
                <TextInput source='candidate_rollno' />
                <TextInput source='candidate_name' />
                <DateInput source='candidate_gender' />
                <BooleanInput source = 'candidate_result' /> 
            </SimpleForm> 
        </Edit> 
    )
} 
export default ResultsCreate;