import axios from 'axios';
import Constants from 'app/constants';

const baseSpacexUrl = `${Constants.BASE_SPACEX_URL}/launches`;

const api = axios.create();
 
export default {
  get: () => api.get(`${baseSpacexUrl}`),
  getByFlightNumber: (flightNumber) => api.get(`${baseSpacexUrl}/${flightNumber}`),
};
