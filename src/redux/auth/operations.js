import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit/dist/createAsyncThunk';

axios.defaults.baseURL ='https://connections-api.herokuapp.com/';

const setAuthHeader = token =>{
    
}