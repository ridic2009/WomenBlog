import Link from "next/link";
import PostItem from "../PostItem";

export default function PostList({ posts }: { posts: any[] }) {
  return (
    <ul className="flex flex-wrap gap-8">
      {posts.map((post) => (
        <li>
          <Link href={post.path}>
            <PostItem
              imgSrc={post.imgSrc}
              title={post.title}
              type={post.type}
              text={post.text}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
