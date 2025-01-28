import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  BrowserRouter,
  Route,
  Routes 
} from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Agenda from './screens/Agenda.tsx';
import Counter from './screens/Counter.tsx';
import ButtonsTest from './screens/ButtonsTest.tsx';
import ToDo from './screens/ToDo.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/agenda" element={<Agenda />}/>
          <Route path="/counter" element={<Counter />}/>
          <Route path="/buttons" element={<ButtonsTest />}/>
          <Route path="/todo" element={<ToDo />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
