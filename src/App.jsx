import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/layout/Nav.jsx';
import Footer from './components/layout/Footer.jsx';
import Cursor from './components/ui/Cursor.jsx';
import CookieBanner, { CookieFab } from './components/ui/CookieBanner.jsx';
import Home from './pages/Home.jsx';

// Code-split secondary routes so the landing page stays small.
const About = lazy(() => import('./pages/About.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const CaseStudy = lazy(() => import('./pages/CaseStudy.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Privacy = lazy(() => import('./pages/legal/Privacy.jsx'));
const Cookie = lazy(() => import('./pages/legal/Cookie.jsx'));
const Terms = lazy(() => import('./pages/legal/Terms.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Salta al contenuto</a>
      <Nav />
      <ScrollToTop />
      <main id="main">
        <Suspense fallback={<div className="page" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Portfolio />} />
            <Route path="/work/:id" element={<CaseStudy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie" element={<Cookie />} />
            <Route path="/termini" element={<Terms />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Cursor motion="rich" />
      <CookieBanner />
      <CookieFab />
    </>
  );
}
