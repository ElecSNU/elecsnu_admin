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
} from 'react-admin';
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="Voter_" alwaysOn /> 
            <SelectInput optionText="title" /> 
    </Filter>
);
const PostList = (props) =>  {
    return(
        <List filters={<PostFilter />} {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='title' />
                <DateField source='publishedAt' />
                <EditButton basePath='/posts' />
                <DeleteButton basePath='/posts' /> 
            </Datagrid>
        </List>
    )
}
export default PostList; 