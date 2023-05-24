import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from './app/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
      
    </div>
  );
}

export default App;
