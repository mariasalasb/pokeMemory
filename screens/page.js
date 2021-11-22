import React, {useContext} from 'react';
import Start from './start';
import Main from './main';
import Menu from './menu';
import {ScreenContext} from '../context/ScreenContext';


const Page = () => {
    const {screen}=useContext(ScreenContext);
  
    return screen === "menu" ? 
    (<Menu />) :
    screen === "main" ?
    (<Main/>) :
    screen === "start" ?
    (<Start/>) :<></>;
   };

   export default Page;