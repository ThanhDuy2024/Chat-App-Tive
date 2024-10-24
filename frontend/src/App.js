import { Route } from 'react-router-dom';
import './App.css';
import Homepages from './Pages/Homepages';
import Chatpage from './Pages/Chatpage';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Homepages} exact/>
      <Route path='/chats' component={Chatpage}/>
    </div>
  );
}

export default App;
