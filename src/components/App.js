import Login from './Login';
import { AuthContextProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import EmployeeProfile from './EmployeeProfile';
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLogin from './AdminLogin';
import AdminHome from './AdminHome';





function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<EmployeeProfile />} />
            <Route path='/adminlogin' element={<AdminLogin />} />
            <Route path='/adminhomepage' element={<AdminHome />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router >
      </div>
    </AuthContextProvider >
  );
}

export default App;
