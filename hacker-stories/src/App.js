import './App.css';

const welcome = {
  greeting: 'Hello',
  title: 'React'
}

function App() {
  // do something in between

  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
