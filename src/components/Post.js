import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((e) => e.message);
  }, []);

  return (
    <>
      <Posts>
        {posts.map((post) => {
          return (
            <P>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <span>{post.id}</span>
            </P>
          );
        })}
      </Posts>
      ;
    </>
  );
};

export default Post;

const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const P = styled.div`
  h3 {
    font-size: 1rem;
  }
  font-size: 0.6rem;
`;
