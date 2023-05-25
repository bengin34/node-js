import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store  from './app/store'
import { PersistGate } from "redux-persist/integration/react";
import {persistor} from "./app/store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <AppRouter />
      </PersistGate>
      </Provider>
      
    </div>
  );
}

export default App;
