import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import type { Post } from "types";

type LoaderData = {
  posts: Post[];
  pageTitle: string;
};

type ApiData = {
  data: string;
};

export const loader: LoaderFunction = async ({ request }) => {
  const result = await fetch("http://localhost:8788/api/posts");
  const res: ApiData = await result.json();
  console.log("Res is -> ", res);
  return json<LoaderData>({
    posts: [
      {
        slug: "my-first-post",
        title: "My First Post",
      },
      {
        slug: "my-second-post",
        title: "My Second Post",
      },
    ],
    pageTitle: res.data,
  });
};

export default function Posts() {
  const { posts, pageTitle } = useLoaderData<LoaderData>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>{pageTitle}</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
