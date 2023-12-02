import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './Pages/SearchBar';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Home from './Pages/Home';
import SearchList from './Pages/SearchList';
import MoviePage from './Pages/Movie.tsx';
import ForgotPassword from './Pages/ForgotPassword';
import UserProfile from './Pages/UserProfile';
import ResetPassword from './Pages/ResetPassword';
import MovieProfile from './Pages/MovieProfile'; // Import your MovieProfile component
import Subscription from './Pages/SubscriptionPage';
import PaymentPage from './Pages/PaymentPage'; // Import your PaymentPage component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchBar" element={<SearchBar />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/MoviePage" element={<MoviePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/SearchList" element={<SearchList />} />
        <Route path="/Subscription" element={<Subscription />} />
        <Route path="/payment" element={<PaymentPage />} /> {/* Add this line for PaymentPage */}
        
        
        {/* New Route for MovieProfile */}
        <Route path="/movie/:movieId" element={<MovieProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
