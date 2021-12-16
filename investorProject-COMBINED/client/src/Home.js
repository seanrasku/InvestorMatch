import {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import {allUsers} from './actions/user';
import axios from 'axios';

const Home = () => {
  return (
    <h1>Now an actual homepage</h1>
  );
};

export default Home;