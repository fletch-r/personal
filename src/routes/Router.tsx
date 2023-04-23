import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home';
import Layout from '../layout/Layout';
import About from '../pages/About';
import SimpleCommit from "../pages/SimpleCommit";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="simple-commit" element={<SimpleCommit />} />
          <Route path="*" element={<h1 className='ml-40'>Coming Soon</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router