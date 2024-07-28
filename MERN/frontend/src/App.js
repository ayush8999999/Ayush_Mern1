import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ShowPage from './pages/ShowPage';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookForm from './components/BookForm';
import Maintenance from './pages/Maintenance';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="blogs/:id" element={<ShowPage />} />
          <Route path="blogs/:id/edit" element={<EditPage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="BookForm" element={<BookForm />} />
          <Route path="Maintain" element={<Maintenance />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
