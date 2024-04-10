import './App.css';
import Form from './components/Form';
import {Provider} from 'react-redux'
import store from './redux/store.js';
import Table from './components/Table.js'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
   <Form/>
   <Table/>
    </div>
    </Provider>
  );
}

export default App;
