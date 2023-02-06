import { ThemeProvider,  createGlobalStyle } from 'styled-components';
import StyledButton, { GreatButton, SubmitButton, DarkButton } from './components/Button/Button'
import './App.css';
import './styles.css';
import  rotationDemo from './images/rotationDemo.jpg';
import { AnimatedLogo } from './components/Button/Button.styles';

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  },
  fontFamily: 'Roboto'
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${props => props.theme.fontFamily};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
          <br />
          <br />
        <DarkButton>Dark Vader</DarkButton>
        <br />
        <div>
          <br />
          <AnimatedLogo src={rotationDemo}/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

// Polymorphic prop a tag