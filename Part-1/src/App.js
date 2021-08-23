import logo from './logo.svg';
import Nav from './Nav';
import Routes from './Routes';
import './App.css';



function App({dogs}) {
  return (<>
      <Nav dogNames={dogs.map(d => d.name.toLowerCase())} /> 
      <Routes dogs={dogs} />
  </>);
}

export default App;
