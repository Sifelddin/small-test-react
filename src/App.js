import Post from './components/Post';
import styled from 'styled-components';

function App() {
  return (
    <Container className='App'>
      <h1>the list of all posts</h1>
      <Post />
    </Container>
  );
}

export default App;

const Container = styled.div`
  h1 {
    text-align: center;
  }
  max-width: 90%;
  margin: 0 auto;
`;
