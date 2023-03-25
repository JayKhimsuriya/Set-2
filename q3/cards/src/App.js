import logo from './logo.svg';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import './App.css';
import store from './Store';
import Card from "./component/Card"
 



function App() {
  const cards = useSelector((state) => state.cards);
  return (
    
      <Provider store={store}>
     <Card card={cards}/>
      </Provider>
    
  );
}

export default App;
