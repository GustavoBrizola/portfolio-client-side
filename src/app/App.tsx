import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Suspense } from 'react';
import appRoutes from './config/Route';
import '@/app/App.css';

function AppRoutes() {
  return useRoutes(appRoutes);
}

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <AppRoutes/>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;