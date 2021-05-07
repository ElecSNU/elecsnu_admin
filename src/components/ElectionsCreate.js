import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, BooleanInput, SimpleFormIterator, ArrayInput } from 'react-admin'
const ElectionsCreate =  (props) => {  
    return (
        <Create title='Create a election' {...props}>
            <SimpleForm>
            <TextInput source='id' />
                <ArrayInput source = 'election_candidates' > 
                    <SimpleFormIterator>
                        <TextInput source = 'candidate_gender' />
                        <TextInput source = 'candidate_group' />
                        <TextInput source = 'candidate_manifesto' />
                        <TextInput source = 'candidate_name' />
                        <TextInput source = 'candidate_roll_no' />
                    </SimpleFormIterator>
                </ArrayInput>
                <ArrayInput source = 'election_eligible_voters' >
                    <SimpleFormIterator>
                        <TextInput/>
                    </SimpleFormIterator>
                </ArrayInput>
                <DateInput source = 'election_end_time' />
                <TextInput source = 'election_name' />
                <ArrayInput source = 'election_results'>
                    <SimpleFormIterator>
                        <BooleanInput source = 'public' />
                    </SimpleFormIterator>
                </ArrayInput>
                <DateInput source = 'election_start_time' />
                <ArrayInput source = 'election_votes'>
                    <SimpleFormIterator>
                        <TextInput source = 'groups' /> 
                        <TextInput source = 'voter_gender' /> 
                    </SimpleFormIterator>
                </ArrayInput>
                <BooleanInput source = 'ended' /> 
                <BooleanInput source = 'startd' /> 
                <ArrayInput source = 'voters'> 
                    <SimpleFormIterator>
                        <TextInput/> 
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm> 
        </Create>
    )
} 
export default ElectionsCreate; 