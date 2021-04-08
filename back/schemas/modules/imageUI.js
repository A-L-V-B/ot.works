export default {
    name: 'imageUI',
    title: 'Image UI',
    type: 'object',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Image caption',
        }
    ],
    preview: {
        select: {
            imageUrl: 'image.asset.url',
            title: 'heading'
        }
    }
}