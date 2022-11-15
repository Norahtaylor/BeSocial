export default {
    name: 'user',
    title: 'User',
    type: 'document',
    //fields are the fields that this document will have 
    fields: [
        {
            name: 'userName',
            title: 'UserName',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string'
        },
    ]
}