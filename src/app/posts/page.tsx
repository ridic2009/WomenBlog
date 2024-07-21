import { PostList } from "@/components";
import { title } from "process";

export default async function PostsPage() {
  const posts = [
    {
      path: "/posts/article-1",
      alt: "blog post",
      imgSrc: "https://placehold.co/600x400",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa minima error sequi soluta quibusdam doloribus quo ipsam, quis, quae deleniti iusto ullam ut praesentium voluptate quia quasi molestias officiis ex modi.",
      type: "New of the day",
      title: "sdfgberg"
    },
    {
      path: "/posts/article-1",
      alt: "blog post",
      imgSrc: "https://placehold.co/600x400",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa minima error sequi soluta quibusdam doloribus quo ipsam, quis, quae deleniti iusto ullam ut praesentium voluptate quia quasi molestias officiis ex modi.",
      type: "blog",
      title: "Lorem ipsum dolor sit amet.",
    },
    {
      path: "/posts/article-1",
      alt: "blog post",
      imgSrc: "https://placehold.co/600x400",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa minima error sequi soluta quibusdam doloribus quo ipsam, quis, quae deleniti iusto ullam ut praesentium voluptate quia quasi molestias officiis ex modi.",
      type: "blog",
      title: "Lorem ipsum dolor sit amet.",
    },
    {
      path: "/posts/article-1",
      alt: "blog post",
      imgSrc: "https://placehold.co/600x400",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa minima error sequi soluta quibusdam doloribus quo ipsam, quis, quae deleniti iusto ullam ut praesentium voluptate quia quasi molestias officiis ex modi.",
      type: "blog",
      title: "Lorem ipsum dolor sit amet.",
    },
    {
      path: "/posts/article-1",
      alt: "blog post",
      imgSrc: "https://placehold.co/600x400",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa minima error sequi soluta quibusdam doloribus quo ipsam, quis, quae deleniti iusto ullam ut praesentium voluptate quia quasi molestias officiis ex modi.",
      type: "blog",
      title: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <section className="wrapper mt-8">
      <PostList posts={posts} />
    </section>
  );
}
