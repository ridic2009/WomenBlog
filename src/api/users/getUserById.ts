export default async function getUserById(id: number) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
