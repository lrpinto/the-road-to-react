import './App.css';

function getTitle(title) {
  return title;
}

function App() {
  // do something in between

  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
