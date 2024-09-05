// @ts-nocheck
//initial loading of posts
import { getPosts } from '$lib/sanity'

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ params }) {

  const initialPosts = await getPosts({ params:'*[_type == "post"] | order(_createdAt desc) [0...2]'});
  return initialPosts;
  
}