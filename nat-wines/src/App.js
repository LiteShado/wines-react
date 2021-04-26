import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage'
import CreateWine from './components/pages/CreateWine'
import AllWines from './components/pages/AllWines'
import EditWine from './components/pages/EditWine'
import Wine from './components/pages/Wine'
import NavBar from './components/NavBar'

function App() {

  const apiUrl = 'http://myapi-profstream.herokuapp.com/api/85152e/wines'

  const[AllWines, setAllWines] = useState([])
  const[Name, setName] = useState('')
  const[Year, setYear] = useState('')
  const[Country, setCountry] = useState('')
  const[Picture, setPicture] = useState('')


  const getWines = async () => {
    const res = await axios.get(apiUrl)
    setAllWines(res.data)

  }

  useEffect(() => {getWines()},[])


  return (
    <div className="App">

      <NavBar />

      <Route exact path = '/' render={()=>

      <HomePage />}
      />

      <Route path = '/wines' render={() =>

      <AllWines AllWines = {AllWines} getWines={getWines} />}
      />

      <Route path = '/wines/:id' render={(props) => {
        />

      }}/>

      <Route path = '/create' render={() => <CreateWine url = {apiUrl}
      getWines={getWines}
      />



    </div>
}

export default App;
