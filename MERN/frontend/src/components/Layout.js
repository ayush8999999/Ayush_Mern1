import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Gallery from './Gallery';
const Layout = () => {
  return (
    <>
      <Navbar />
      
      <main className="container mt-4">
        <Outlet />
        <Gallery/>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
