import logo from './logo.svg';
import './App.css';
import Text from './Text.js';
import Header from './Header.js';
import LoginButton from './LoginButton.js';
import SignUpButton from './SignUpButton.js';

function App() {
  return (
    <div className="App">
    	<Header />
      	<Text name="Username"></Text>
      	<SignUpButton />
    </div>
  );
}

export default App;
