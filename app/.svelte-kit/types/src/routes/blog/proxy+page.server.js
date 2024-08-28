// @ts-nocheck
import {createClient} from "@sanity/client";

const client = createClient({
    projectId : "z1h74lcc",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false,
});

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ params }) {
  const data = await client.fetch('*[_type == "post"] | order(_createdAt desc)');

  if (data) {
    return {
      post: data,
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}