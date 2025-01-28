// import './App.css'
import { Link, useNavigate, Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const navigate = useNavigate()
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center">Hello there</h1>

      <ul className="nav mb-3">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/buttons" className="nav-link">Buttons</Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={() => navigate("/agenda")}>Agenda</a>
        </li>
        <li className="nav-item">
          <Link to="/counter" className="nav-link">Counter</Link>
        </li>
        <li className="nav-item">
          <Link to="/todo" className="nav-link">ToDo</Link>
        </li>
      </ul>
      <section>
        <Outlet />
      </section>

      <Footer />
    </div>
  )
}

export default App
