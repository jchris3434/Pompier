import axios from "axios";
import React from "react";

// baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const baseURL = "https://swapi.dev/api/films/";

console.log(baseURL);

export default function ApiComp() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>Titre du Film: {post.results[1].title}</h1>
      <p>Producteur: {post.results[1].director}</p>
    </div>
  );
}