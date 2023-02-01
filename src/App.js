import StyledButton, { GreatButton, SubmitButton } from './components/Button/Button'
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
      <GreatButton as='a'>Great Button</GreatButton>
      <div>
        <br />
      </div>
      <SubmitButton>Submit</SubmitButton>
    </div>
  );
}

export default App;

// Polymorphic prop a tag