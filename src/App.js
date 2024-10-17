import logo from './logo.svg';
import './App.css';
import LoginPage from './login';
import Signup from './signup';
import { LoginPageComponent } from './login.ts';
function App() {
  return (
    <div className="App">
      {/* <LoginPageComponent/> */}
      < LoginPage/>
    //  {/* <Signup/>     */}
     </div>
  );
}

export default App;
