// Importing component props
import { HEADER_BADGE, HEADER_BUTTON, HEADER_ICON, HEADER_IMAGE } from './components/UI/Header/HeaderProps';
import { NAVBAR_LINKS } from './components/UI/NavigationBar/NavigationLinkProps';
import HeaderComponent from './components/UI/Header/HeaderComponent';
import GamesPage from './components/Pages/Games/GamesPage';
import Tetris from './components/Pages/Games/Tetris/Tetris';
import Pong from './components/Pages/Games/Pong/Pong';
import Memory from './components/Pages/Games/Memory/Memory';
import SignUpPage from './components/Pages/SignUp/SignUpPage';
import { Routes, Route, } from 'react-router-dom';

import './index.css';
import { ComputerDesktopIcon } from '@heroicons/react/24/solid';
import LeaderboardPage from './components/Pages/Leaderboard/LeaderboardPage';
import { IconComponentInterface } from './types';
import RockPaperScissors from './components/Pages/Games/rockpapeltijeras/RockPaperScissors';

const App = () => {

  const navbarText = "Classic Games"

  const navbarIcon: IconComponentInterface = {
    icon: <ComputerDesktopIcon />,
    iconPath: "/games"
  };

  // const navbarButton: ButtonComponentInterface = {
  //   buttonText: isLoggedIn ? "Logout" : "Login",
  //   buttonPath: "/",
  //   onClick: loggedInCheck
  // };

  const navbar = {
    // All of these are optional, except for `navbarLinks` to allow for enhanced customization.
    // navbarIcon: navbarIcon,
    navbarLinks: NAVBAR_LINKS,
    // navbarButton: navbarButton,
    navbarText: navbarText
  };

  

  return (
    <div className="App">

      {/* You can add addtional elements to the header by passing some props that have been set to `optional`. For example: headerImage={headerImage} will add a banner image element to the `HeaderComponent`. Additional props are defined in the interface. See `types.ts`. */}
      <HeaderComponent
        // headerBadge={HEADER_BADGE}
        // headerImage={HEADER_IMAGE}
        // headerButton={HEADER_BUTTON}
        // headerIcon={HEADER_ICON}
        navbar={navbar}
      />
      <Routes>
        {/* <Route path= "/signup" element={<Form formInputState={formInputState} onSubmit={handleFormSubmit} />} /> */}
        <Route path= "/leaderboard" element={<LeaderboardPage />} />
        <Route path= "/games" element={<GamesPage /> } />
        <Route path= "/signup" element={<SignUpPage />} />
        <Route path= "/games/tetris" element={<Tetris /> } />
        <Route path= "/games/pong" element={<Pong /> } />
        <Route path= "/games/rock-paper-scissors" element={<RockPaperScissors /> } />
        <Route path = "/games/memory" element={<Memory /> } />
      </Routes>
    </div>
  );
};

export default App;