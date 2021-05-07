import React from 'react';
import { Create, SimpleForm, TextInput, DateInput  } from 'react-admin'
const Voters_krCreate =  (props) => {
    return (
        <Create title='Create a voter group' {...props}>
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
        </Create>
    )
} 
export default Voters_krCreate; 