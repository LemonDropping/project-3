// Importing dependencies.
import { Route, Routes, Outlet } from 'react-router-dom';
// Importing some cool icons.
import { ComputerDesktopIcon, MoonIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
// Importing the applications components and styling.
import NavigationBar from './components/UI/Navigation/NavigationBar/NavigationBar';
// import HomePage from './components/UI/Pages/Home/HomePage'
import GamesPage from './Pages/Games/GamesPage';
// import LeaderboardPage from './components/UI/Pages/Leaderboard/LeaderboardPage';
import './index.css'
import SignUpPage from './Pages/SignUp/SignUpPage';

function App() {
  return (
    <div>
      <NavigationBar 
        title="Classic Games"
        icon={{ text: "Icon Text", to: "/", icon: <ComputerDesktopIcon />, className: "icon-class" }}
        links={[
          { text: "Home", to: "/"},
          { text: "Signup", to: "/signup"},
          { text: "Games", to: "/games"},
          { text: "Leaderboard", to: "/leaderboard"}
        ]}
        button={{ text: "Login", to: "/login" }}
        // image="#"
        />
        <Routes>
          {/* <Route path="/">
            {<HomePage />}
          </Route> */}
          {/* <Route path="/about">
            {<AboutPage />}
          </Route> */}
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
          />}>
          </Route>
          {/* <Route path="/login">
            {<LoginPage />}
          </Route> */}
          <Route path="/games" element={ <GamesPage />}/>
            
          {/* <Route path="/login">
            {<LeaderboardPage />}
          </Route> */}
        </Routes>
        
    </div>
  )
}
export default App
