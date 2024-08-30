import { createClient } from "@sanity/client";


export const client = createClient({
    projectId : "z1h74lcc",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false,
});

export async function getPosts({ params }) {
  const data = await client.fetch(params);
  if (data) {
    return { post : data };
  }
  
};

