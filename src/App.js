import StyledButton, { GreatButton, SubmitButton } from './components/Button/Button'
import './App.css';
import './styles.css';
import  rotationDemo from './images/rotationDemo.jpg';
import { AnimatedLogo } from './components/Button/Button.styles';

function App() {
  return (
    <div className="App">
      {/* <img src={rotationDemo} className="App-logo" alt="rotation-demo" /> */}
      {/* <button>Button</button> */}
      <div>
        <br />
      </div>
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
      <div>
        <br />
        <AnimatedLogo src={rotationDemo}/>
      </div>
    </div>
  );
}

export default App;

// Polymorphic prop a tag