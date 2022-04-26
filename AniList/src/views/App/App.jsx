import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import styles from './index.module.scss';
import Home from '../../data/pages/Home';
import Results from '../../data/pages/Results';
import SingleView from '../../data/pages/SingleView';
import { SearchContext } from '../../data/context/search';
import axios from 'axios';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const App = () => {
  const [animeData, setAnimeData] = useState();
  const [singleData, setSingleData] = useState();

  const setData = (data) => {
    setAnimeData(data);
  };

  const setSingle = (data) => {
    setSingleData(data);
  };

  const search = (searchTerm) => {
    return axios
      .get(`https://api.jikan.moe/v4/anime?q=${searchTerm}=&limit=30`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SearchContext.Provider value={{ search, animeData, setData, singleData, setSingle }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegistrationForm />} />
          <Route path='/home' element={<Home />} />
          <Route path='/results' element={<Results />} />
          <Route path='/single-view' element={<SingleView />} />
        </Routes>
      </BrowserRouter>
    </SearchContext.Provider>
  );
};

export default App;
