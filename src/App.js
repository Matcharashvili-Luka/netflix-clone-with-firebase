import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from "./Context/AuthContext";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Account from "./Pages/Account";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div className="max-w-[1620px] mx-auto">
      <AuthContextProvider> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<LogIn />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/account' element={<ProtectedRoute> <Account /> </ProtectedRoute>}/>
        </Routes>

        <p className="text-white bg-red-600 py-1 text-sm text-center mt-20">Created By Luka Matcharashvili</p>
      </AuthContextProvider>
    </div>
  );
}

export default App;
