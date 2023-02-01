import StyledButton, { GreatButton } from './components/Button/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <button>Button</button> */}
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant='outline'>Button Props</StyledButton>
      <div>
        <br />
      </div>
      <GreatButton>Great Button</GreatButton>
    </div>
  );
}

export default App;
