import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, useNotify, useRedirect } from 'react-admin'
const PostEdit =  (props) => {
    const notify = useNotify(); 
    const redirect = useRedirect(); 
    const onSuccess = () => {
        notify('Post saved successfully'); // default message is 'ra.notification.updated'
        redirect('list', props.basePath);
    }
    return (
        <Edit title='Edit Post' {...props} onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput disabled source='id' />  
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateInput label='Published' source='publishedAt' /> 
            </SimpleForm>
        </Edit> 
    )
}
export default PostEdit; 