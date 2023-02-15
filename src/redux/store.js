import { createStore } from 'redux';
import Reducer from './reducer';


const globalStore = createStore(Reducer);

export default globalStore;
