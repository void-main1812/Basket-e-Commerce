import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'oyrhymsc',
    dataset: 'production',
    apiVersion: '2023-03-07',
    useCdn: true,   
    token: process.env.NEXT_SANITY_PUBLIC_TOKEN
});

const Builder = imageUrlBuilder(client);

export const urlFor = (source) => Builder.image(source)