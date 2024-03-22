import { Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout/AppLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import("pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("pages/CatalogPage/CatalogPage.jsx"));
const FavoritesPage = lazy(() => import("pages/FavoritesPage/FavoritesPage.jsx"));


function App() {

  return (
    <>
    <Suspense>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="catalog" element={<CatalogPage />}></Route>
          <Route path="favorites" element={<FavoritesPage />}></Route>
          <Route path="*" element={<HomePage />}></Route>
        </Route>

      </Routes>
    </Suspense>

      <GlobalStyle />
    </>
  )
}

export default App
