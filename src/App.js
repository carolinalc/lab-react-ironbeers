
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ListBeers from './pages/ListBeers';
import Error from './pages/Error';
import Header from './components/Header';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';


function App() {
  return (
    <div className="App">
       
       <Header/>

    <Routes>

    <Route path='/'  element={<Home />}/>
    <Route path="/allbeers" element={<ListBeers/>}/>
    <Route path='/beers/:id' element={<SingleBeer/>}/>
    <Route path='/random-beer' element={<RandomBeer/>}/>
    <Route path='/new-beer'element={<NewBeer/>}/>
    <Route path='*' element={<Error/>}/>

    </Routes>

   
    </div>
  );
}

export default App;
