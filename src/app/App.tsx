import { BrowserRouter, useRoutes } from 'react-router-dom';
import appRoutes from './config/Routes';
import '@/app/App.css';

function AppRoutes() {
  return useRoutes(appRoutes);
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;