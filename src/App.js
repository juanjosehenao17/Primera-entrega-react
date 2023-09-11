import './App.css';
import ItemListContainer from './components/itemlistcontainer';
import NavBar1 from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar1/>
      <ItemListContainer greeting= "Productos en Stock"/>
      
    </div>
  );
}

export default App;

