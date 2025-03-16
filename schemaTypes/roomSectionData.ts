export default {
    name: 'roomSectionData',
    type: 'document',
    title: 'Rooms Section Data',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Section Title',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Section Description',
        },
        {
            name: 'buttonText',
            type: 'string',
            title: 'Button Text',
        },
        {
            name: 'buttonLink',
            type: 'string',
            title: 'Button Link',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                        },
                    ],
                },
            ],
        },
    ],
};