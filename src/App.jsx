import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState('posts');
  const [post, setPost] = useState([]);

  // APIs
  // https://jsonplaceholder.typicode.com/posts/
  
  
  useEffect(() => {
    console.log(`This is the title ${title}`)
    fetch(`https://jsonplaceholder.typicode.com/${title}`)
    .then((response) => response.json())
    .then((json) => setPost(json));

    
  },[title])

  // 
  // class based

  // didmount
  // didupdate
  // didunmount

  // weather app
  // const displayPost = () => {
    
  //};
  // pure functions => functions w/o side effects
  // side effects => 
  // const bigNum = 33; // side effects
  // function sum(a, b) {
  //   return a + b + bigNum;
  // }

  // console.log(sum(2 + 4));

  return (
    <>
      
      <button onClick={() => setTitle("posts")}>Posts</button>
      <button onClick={() => setTitle("albums")}>Album</button>
      <h1>{title}</h1>
      <ul>
        {post.map((p) => {
          return (
            <li key={p.id}>
              <h2>{p.title}</h2>
              <p>{p.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
