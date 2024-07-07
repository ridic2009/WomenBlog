import getPosts from "@/api/getPosts";

export default async function PostsPage() {
  const posts = await getPosts();
  return <>{posts.map((post: any) => <p>{post.title + " " + post.userId}</p>)}</>;
}
