import styled from 'styled-components'
import './App.css';

const StyledButton = styled.button`
  cursor: pointer;
  border: 2px solid #4caf50;
  background-color: #4caf50;
  color: white;
  border-radius: 2.5px;
  padding: 15px 32px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  color: white;
  transition: 0.5s all ease-out;
`

function App() {
  return (
    <div className="App">
      {/* <button>Button</button> */}
      <StyledButton>Styled Button</StyledButton>
    </div>
  );
}

export default App;
