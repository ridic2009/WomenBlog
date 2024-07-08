export default async function getPostById(id: number) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
