import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://react.js.org',
    author: 'Jordan Walke',
    nume_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    nume_comments: 2,
    points: 5,
    objectID: 1
  },
]

function App() {
  // do something in between

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />

      <hr />

      {list.map(function(item){
        return (<div key={item.objectID}>{item.title}</div>)
      })}
    </div>
  );
}

export default App;
