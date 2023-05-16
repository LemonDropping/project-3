import { NavigationLinksComponentInterface } from "../../../types"
import { useState, useEffect} from 'react';


export const NAVBAR_LINKS: NavigationLinksComponentInterface[] = [
  {
    linkPath: '/home',
    linkText: "Home",
    
  },
  {
    linkPath: "/games",
    linkText: "Games",
  },
  {
    linkPath: "/leaderboard",
    linkText: "Leaderboard",
  },
  {
    linkPath: "/signup",
    linkText: "Sign Up",
  }
  // ,
  //  isLoggedIn ? null : {
  //   linkPath: "/signup",
  //   linkText: "Sign Up"
  // }

]













// {
//   key: 'password',
//   className: '',
//   inputType: 'text',
//   inputLabel: "Password",
//   inputValue: newUser.password,
//   inputPlaceholder: newUser.password !== '' ? '' : "Enter your desired password...",
//   isRequired: true,
//   inputChange: handleInputChange,
// },

// {
//   key: 'password',
//   className: '',
//   inputType: 'text',
//   inputLabel: "Password",
//   inputValue: newUser.password,
//   inputPlaceholder: newUser.password !== '' ? '' : "Enter your desired password...",
//   isRequired: true,
//   inputChange: handleInputChange,
// },
// {
//   key: 'confirmPassword',
//   className: '',
//   inputType: 'text',
//   inputLabel: "Confirm Password",
//   inputValue: newUser.confirmPassword,
//   inputPlaceholder: newUser.confirmPassword !== '' ? '' : "Confirm your password name...",
//   isRequired: true,
//   inputChange: handleInputChange,
// }
// ]