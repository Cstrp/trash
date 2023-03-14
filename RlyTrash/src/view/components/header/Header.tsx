import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Organizer } from '../../pages/Organizer/Organizer';
import { Posts } from '../../pages/Posts/Posts';

export const Header = () => {
  return (
    <Router>
      <div className="flex flex-row gap-5">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/organizer">Organizer</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/organizer" element={<Organizer />} />
        </Routes>
      </div>
    </Router>
  );
};
