import { Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout/AppLayout';


function App() {

  return (
    <>
    <Suspense>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Route>

      </Routes>
    </Suspense>

      <GlobalStyle />
    </>
  )
}

export default App
