import BookPage from './bookPage';
import FirstPage from './firstPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
          <Route path="/bookSearch/:itemSearch" element={<BookPage />} />
          <Route path="/bookSearch" element={<BookPage />} />
          <Route path="/" element={<FirstPage />} />
        </Routes>
    </>
  );
}

export default App;
