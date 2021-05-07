import React from 'react';
import { Create, SimpleForm, SimpleFormIterator, TextInput, NumberInput, ArrayInput } from 'react-admin'
const Voter_groupsCreate =  (props) => {
    return (
        <Create title='Create voter group' {...props}>
            <SimpleForm>
                <TextInput source='id' />
                <NumberInput source = 'group_id' />
                <ArrayInput source = 'list' >
                    <SimpleFormIterator>
                        <TextInput />   
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm> 
        </Create>
    )
}
export default Voter_groupsCreate; 