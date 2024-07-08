export default async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
