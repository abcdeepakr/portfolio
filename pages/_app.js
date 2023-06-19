import React, { createContext, useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import {reducer, initialState} from '../components/context/AppReducer'

import { useRouter } from 'next/dist/client/router';
import NavbarComponent from '../components/navbar/navbar'
import Head from "next/dist/shared/lib/head";

export const AppContext = createContext();
function MyApp({ Component, pageProps }) {
  const [stateContext, dispatch] = useReducer(reducer, initialState);

  const router = useRouter();
  const showHeader = router.pathname === '/resume' ? false : true;
  
  return (
    <AppContext.Provider value = {{state : stateContext, dispatchState : dispatch}}>
        {showHeader ? <NavbarComponent/> : null}
        <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
