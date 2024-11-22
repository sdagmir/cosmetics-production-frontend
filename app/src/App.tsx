import { AppRoutes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { store } from './core/store/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;