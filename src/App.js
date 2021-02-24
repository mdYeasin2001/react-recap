import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const friend = {
    name: 'Ali',
    job: 'study'
  }
  const PersonData = [
    {name: 'Ali', job: 'Study'},
    {name: 'Yeasin', job: 'Coding'},
    {name: 'Bali', job: 'Programmer'},
    {name: 'kali', job: 'Designer'},
    {name: 'tali', job: 'Software Tester'}
  ]
  const heros = ['Sakib', 'Salman', 'Amir', 'Shahruk', 'Aksay', 'Pravas', 'Allu']
  return (
    <div className="App">
      <header className="App-header">
        <h1>Revision React that learned Yesterday!</h1>

        <Post/>

        <h2>This is my friend {friend.name} and his job is {friend.job} He have only {70 + 50} taka in his pocket</h2>

        {
          PersonData.map(one => <Person data={one}/>)
        }
        <Count/>

        <ul>
          {
            heros.map((hero, i) => <li key={i}>{hero}</li>)
          }
        </ul>

      </header>
    </div>
  );
}

/*
class Count2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    return(
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({count: this.state.count + 1})}>click</button>
      </div>
    );
  }
}
*/


function Count() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  );
}

function Post() {
  const [currentState, setState] = useState('posts');
  const [showData, setData] = useState([])
  console.log('render');
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${currentState}`)
      .then(response => response.json())
      .then(json => setData(json))
  },[currentState])
  return(
    <div>
      <div>
      <button onClick={() => setState('posts')}>Posts</button>
      <button onClick={() => setState('comments')}>Comments</button>
      <button onClick={() => setState('users')}>Users</button>
      
    </div>
    <h1>{currentState}</h1>
    <ul>
      {
        showData.map(UD => <li>{JSON.stringify(UD)}</li>)
      }
    </ul>
    </div>
  )
}


function Person(props) {
  const style = {
    border: '2px solid teal',
    padding: '20px', 
    margin: '10px', 
    width: '250px',
    height: '150px'
  }
  const {name, job} = props.data;
  return (
    <div style={style}>
      <h3>This is {name}</h3>
      <h4>His job is {job}</h4>
    </div>
  );
}



function Hello() {
  return(
    <div>
      <h1>Say Hello to React!</h1>
      <h2>React js is the hottest technology in web sector</h2>
    </div>
  );
}

export default App;
