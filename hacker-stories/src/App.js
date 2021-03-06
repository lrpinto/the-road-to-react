import './App.css';
import React from 'react'

const App = () => {
  const stories = [
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
      num_comments: 2,
      points: 5,
      objectID: 1
    },
  ]

  const [searchTerm, setSearchTerm ] = React.useState('React');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter( story => story.title.toLowerCase().includes(searchTerm.toLowerCase()))
  
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch}/>

      <hr />

      <List list={searchedStories} />

    </div>
  );
}

// definition of the Search component
const Search = props => {

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input 
        id="search" 
        type="text" 
        value={props.search}
        onChange={props.onSearch}/>
    </div>
  )
}

// definition of List component
const List = (props) => 
  props.list.map((item) => (
    <div key={item.objectID}>{item.title}
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ));

export default App;
