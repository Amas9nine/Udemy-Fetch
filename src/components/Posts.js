import Post from "./Post";
import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [fail, setFail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("before fetching")
    fetch("https://api.opensea.io/api/v1/assets?format=json")
      .then((res) => (res.json()))
      .then((data) => (setPosts(data)))
      .catch((handleError) => (setFail(handleError.message)))
      .finally(() => (setIsLoading(false)))
  }, [])

  if (fail) {
    return (
      <h1>{fail}</h1>
    )
  }

  return (
    <>
      <h1>START</h1>
      <hr />
      {isLoading ? (
        <h1>...isLoading...</h1>
      ) : (
        posts.assets.map((item) => (<Post key={item.id} imgUrl={item.image_url} />))
      )}
    </ >
  )
}

export default Posts;
