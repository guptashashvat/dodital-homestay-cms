export default {
    name: 'contact',
    title: 'Contact Information',
    type: 'document',
    fields: [
        {
            name: 'phone1',
            title: 'Phone 1',
            type: 'string',
        },
        {
            name: 'phone2',
            title: 'Phone 2',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'text',
        },
        {
            name: 'mapEmbedUrl',
            title: 'Google Maps Embed URL',
            type: 'url',
            description: 'Paste the Google Maps embed URL here.',
        },
        {
            name: 'mapInstructions',
            title: 'Map Instructions',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Add instructions related to finding the location.',
        },
    ],
};