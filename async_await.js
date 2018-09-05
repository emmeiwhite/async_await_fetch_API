async function fetchUsers(){
   let res =  await fetch('https://jsonplaceholder.typicode.com/posts');
   
   let data = await res.json();

   console.log(data);
}

fetchUsers();