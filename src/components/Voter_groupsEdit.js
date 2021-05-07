import React from 'react';
import {
    Edit,
    SimpleForm,
    SimpleFormIterator,
    TextInput,
    NumberInput,
    ArrayInput,
} from 'react-admin';
const Voter_groupsEdit = (props) => {
    return (
        <Edit title='Edit or View voter group' {...props}>
            <SimpleForm>
                <TextInput source='id' />
                <NumberInput source='group_id' />
                <ArrayInput source='list'>
                    <SimpleFormIterator>
                        <TextInput />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Edit>
    );
};
export default Voter_groupsEdit;
