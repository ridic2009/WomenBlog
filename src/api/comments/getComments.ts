export default async function getComments() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
