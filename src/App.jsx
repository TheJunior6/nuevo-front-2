import './App.css';
import Form from './components/Form';
import UserHome from './components/UserHome';
import Ganadores from './components/Ganadores';
import AdminHome from './components/AdminHome';
import ChangePassword from './components/ChangePassword';
import Crearusuarios from './components/CrearUsuarios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';

// Componente para rutas protegidas
function ProtectedRoute({ element, user }) {
  if (!user) {
    return <Navigate to="/" replace />; // Redirige al login si no está autenticado
  }
  return element;
}

function App() {
  const [user, setUser] = useState(null);

  // Simulación de carga de usuario (puedes hacer una llamada API aquí)
  useEffect(() => {
    // Aquí podrías obtener los datos del usuario de un API o localStorage
    // Si el usuario está logueado, puedes setearlo en el estado
    // Ejemplo:
    // const loggedUser = localStorage.getItem('user');
    // if (loggedUser) setUser(loggedUser);
  }, []);

  return (  
    <BrowserRouter>
      <Routes>
        <Route index element={<Form callback={setUser} />} />
        <Route path="/cambiarP" element={<ChangePassword />} />
        <Route path="/crearusers" element={<Crearusuarios />} />
        <Route path="/ganadores" element={<Ganadores />} />
        
        {/* Rutas protegidas */}
        <Route 
          path="/UserHome" 
          element={<ProtectedRoute user={user} element={<UserHome user={user} />} />} 
        />
        <Route 
          path="/adminHome" 
          element={<ProtectedRoute user={user} element={<AdminHome user={user} />} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
