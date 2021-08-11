import './App.css';

const title = "React"

function App() {
  // do something in between

  return (
    <div>
      <h1>Hello {title}</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
