import { createStore } from "redux";
import cardsReducer from "./Reducer/cardsReducer"
const  store = createStore(cardsReducer);
export default store