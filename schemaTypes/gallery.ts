export default {
    name: 'galleryImage',
    title: 'Gallery Images',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // Enable hotspot for better cropping
            },
        },
        {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Description for the image',
        },
    ],
};