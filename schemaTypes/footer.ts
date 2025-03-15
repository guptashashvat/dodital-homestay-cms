export default {
    name: 'footer',
    title: 'Footer Settings',
    type: 'document',
    fields: [
        {
            name: 'copyright',
            title: 'Copyright Text',
            type: 'string',
            description: 'e.g., © 2023 Dodital Homestay. All rights reserved.',
        },
        {
            name: 'instagramLink',
            title: 'Instagram Link',
            type: 'url',
        },
        {
            name: 'facebookLink',
            title: 'Facebook Link',
            type: 'url',
        },
        {
            name: 'whatsappLink',
            title: 'WhatsApp Link',
            type: 'url',
        },
    ],
};