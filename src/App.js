import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CreateContainer, Header, MainContainer } from './components';

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
        <div className='w-screen h-auto flex flex-col bg-white'>
            <Header />
            <main className='mt-14 md:mt-20 pl-0 pr-0 px-4 md:px-0 py-4 w-full'>
                <Routes>
                    <Route path='/*' element={<MainContainer />} />
                    <Route path='/createItem' element={<CreateContainer />} />
                </Routes>
            </main>
        </div>
    </AnimatePresence>
  )
}

export default App
