import { Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/AppLayout/AppLayout';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import("pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("pages/CatalogPage/CatalogPage.jsx"));
const FavoritesPage = lazy(() => import("pages/FavoritesPage/FavoritesPage.jsx"));


export default function App() {

  return (
    <>
    <Suspense fallback={<p>LOADING...</p>}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="catalog" element={<CatalogPage />}></Route>
          <Route path="favorites" element={<FavoritesPage />}></Route>
          <Route path="*" element={<HomePage />}></Route>
        </Route>

      </Routes>
    </Suspense>

      <Toaster position='top-right' />
      <GlobalStyle />
    </>
  )
}