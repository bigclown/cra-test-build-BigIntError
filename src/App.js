import logo from './logo.svg';
import './App.css';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';

const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });

function authenticate() {
    showConnect({
        appDetails: {
            name: 'App',
            icon: window.location.origin + logo ,
        },
        redirectTo: '/',
        onFinish: () => {
            let userData = userSession.loadUserData();
            console.log('im logged', userData);
        },
        userSession: userSession,
    });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

             <button onClick={()=>authenticate()}>
                 button
             </button>
      </header>
    </div>
  );
}

export default App;
