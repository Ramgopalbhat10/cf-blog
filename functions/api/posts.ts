import { json } from "@remix-run/cloudflare";
// import { getAllPosts } from "~/server/post.server";

export async function onRequestGet({ params }: { params: Params }) {
  try {
    // const allPosts = await getAllPosts();
    const allPosts = [
      {
        slug: "my-first-post",
        title: "My First Post",
      },
    ];
    return json({ posts: allPosts });
  } catch (error) {
    throw new Error("Something happened while fetching the posts...");
  }
}
