import { Routes, Route, Link } from 'react-router-dom';

import {Mainpage, Mainpage} from './pages/Homepage';
import { Oll} from './pages/Aboutpage';
import {Page, Page} from './pages/Blogpage';
import { Notfoundpage } from './pages/Notfoundpage';

function App() {
  return (
      <>
        <header>
          <Link to="/">Home</Link>
          <Link to="/posts">Blog</Link>
          <Link to="/about">About</Link>
        </header>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/about" element={<Page>} />
          <Route path="/posts" element={< Oll/>} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </>
  );
}

export default App;

