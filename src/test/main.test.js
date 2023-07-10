import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Serach from '../components/Search/SearchInput';



import {BrowserRouter as Router} from 'react-router-dom';

test('renders react component', () => {
  render(
    <Router>
      <Sidebar />
    </Router>,
   
  );

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Search")).toBeInTheDocument();
  expect(screen.getByText("Playlist")).toBeInTheDocument();
  expect(screen.getByText("Favorit")).toBeInTheDocument();
  expect(screen.getByText("History")).toBeInTheDocument();


});




test('renders react component', () => {
  render(
    <Router>
      <Header/>
    </Router>,
   
  );
  expect(screen.getByAltText("logo")).toBeInTheDocument();


});

