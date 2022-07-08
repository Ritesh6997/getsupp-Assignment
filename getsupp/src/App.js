import './App.css';
import Home from './components/Home';
import SearchBar from './components/SearchBar';
import UserDeatil from './components/UserDetails';

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <Home></Home>
      <UserDeatil></UserDeatil>
    </div>
  );
}

export default App;
