import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App md:flex md:h-[100vh]">
      <Navbar />
      <Main/>
    </div>
  );
}

export default App;
