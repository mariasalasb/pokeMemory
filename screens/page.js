import React, {useContext} from 'react';
import randomPickt from './randomPick';
import cover from './cover';
import Menu from './menu';
import {ScreenContext} from '../context/ScreenContext';


const Page = () => {
    const {screen}=useContext(ScreenContext);
  
    return screen === "menu" ? 
    (<Menu />) :
    screen === "cover" ?
    (<cover/>) :
    screen === "randomPick" ?
    (<randomPick/>) :<></>;
   };

   export default Page;