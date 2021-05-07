import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin' 
const Voters_krEdit =  (props) => { 
    return (
        <Edit title='Edit voter group' {...props}> 
            <SimpleForm>
                <TextInput source='id' />
                <TextInput source ='Batch' />
                <TextInput source='Net_id' />
                <DateInput source = 'Voter_DOB' />
                <TextInput source = 'Voter_Dept' />
                <TextInput source = 'Voter_Gender' />
                <TextInput source = 'Voter_Name' />
                <TextInput source = 'Voter_Roll_No' /> 
            </SimpleForm>
        </Edit> 
    ) 
}
export default Voters_krEdit; 