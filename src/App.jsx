import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Materials from './pages/Materials';
import Lesson from './pages/Lesson';
import TestPage from './pages/TestPage';
import SlidesPage from "./pages/SlidesPage";


import Resources from './pages/Resources';
import Glossary from './pages/Glossary';
import VideoPage from './pages/VideoPage';
import ToolsPage from './pages/ToolsPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Лекции */}
        <Route path="/materials" element={<Materials />} />
        <Route path="/lecture/:lectureId" element={<Lesson />} />
        <Route path="/lecture/:lectureId/test" element={<TestPage />} />
        <Route path="/lecture/:lectureId/presentation" element={<SlidesPage />} />

        {/* Ресурсы */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/glossary" element={<Glossary />} />
        <Route path="/resources/videos" element={<VideoPage />} />
        <Route path="/resources/tools" element={<ToolsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
