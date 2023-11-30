import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './Pages/SearchBar'; // Import your SearchBar component
import SignUp from './Pages/SignUp';     // Import your SignUp component
import Login from './Pages/Login';       // Import your Login component
import Home from './Pages/Home';         // Import your Home component
import SearchList from './Pages/SearchList'; // Import the SearchList component
import MoviePage from './Pages/Movie.tsx';
import ForgotPassword from './Pages/ForgotPassword';
import UserProfile from './Pages/UserProfile';

import ResetPassword from './Pages/ResetPassword';


// Import other components as needed

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/SearchBar" element={<SearchBar />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/MoviePage" element={<MoviePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        

        <Route path="/SearchList" element={<SearchList />} /> {/* Add this line */}
      </Routes>

    </Router>
  );
}


export default App;