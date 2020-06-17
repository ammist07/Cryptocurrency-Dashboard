import React from 'react';
import AppLayout from "./AppLayout";
import Header from "./ui/Header";

import {Provider as CryptoContextProvider} from "../context/CryptoContext";

const App = () => {
  return (
    <AppLayout className="App">
        <CryptoContextProvider>
            <Header/>
            App
        </CryptoContextProvider>
    </AppLayout>
  );
}

export default App;
