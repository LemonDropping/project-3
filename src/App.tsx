// Importing dependencies.
import { Route, Routes, Outlet } from 'react-router-dom';
import { useState } from 'react';
// Importing some cool icons.
import { ComputerDesktopIcon, MoonIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
// Importing the applications components and styling.
import NavigationBar from './components/UI/Navigation/NavigationBar/NavigationBar';
// import HomePage from './components/UI/Pages/Home/HomePage'
import GamesPage from './Pages/Games/GamesPage';
// import LeaderboardPage from './components/UI/Pages/Leaderboard/LeaderboardPage';
import './index.css'
import SignUpPage from './Pages/SignUp/SignUpPage';
import LoginPage from './Pages/LogIn/LoginPage';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  const links = [
    { text: "Games", to: "/games"},
    { text: "Leaderboard", to: "/leaderboard"}
  ]

  if (!isLoggedIn) {
    links.unshift({ text: "Signup", to: '/signup' });
    links.push({ text: "Login", to: "login" });
  } else {
    links.push({ text: "Logout", to: "/", onClick: handleLogout});
  };

  if (location.pathname !== "/") {
    links.unshift({ text: "Home", to: "/" });
  }

  
  return (
    <div>
      <NavigationBar 
        title="Classic Games"
        icon={{ text: "Icon Text", to: "/", icon: <ComputerDesktopIcon />, className: "icon-class" }}
        links={links}
        button={{ text: isLoggedIn ? "Logout" : "Login",
                  to: isLoggedIn ? "/" : "/login",
                  onClick: isLoggedIn ? handleLogout : handleLogin  }}
        
        // image="#"
        />
        <Routes>
          <Route  path="/signup" element={ 
            <SignUpPage 
              firstName="John"
              lastName="Doe"
              userName="JohnDoe"
              email="johndoe@example.com"
              password="password"
              confirmPassword="password"
              onSubmit={() => console.log("Form Submitted")}
              btn={{ type: "submit", text: "Submit", to: "/", filled: true }}
          />
          }/>
          <Route path="/login" element={
          <LoginPage 
            isLoggedIn={isLoggedIn} 
            onLogin={handleLogin}
          />} 
          />
          <Route path="/games" element={ <GamesPage />}/>
            
          {/* <Route path="/login">
            {<LeaderboardPage />}
          </Route> */}
        </Routes>
        
    </div>
  )
}
export default App
