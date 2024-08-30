import { getPosts } from '$lib/sanity';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params, url }) {
    console.log('ran into api')
    const offset = parseInt(url.searchParams.get('offset') || 10) || 0;
    //this is how many posts are loaded each time from the offset lol.
    const limit = 3;
    const thugshake = `[${offset}...${offset + limit}]`;

    const posts = await getPosts({params: `*[_type == "post"] | order(_createdAt asc) ${thugshake}`});

    console.log(`*[_type == "post"] | order(_createdAt desc) ${thugshake}`);

    return json(posts);
}