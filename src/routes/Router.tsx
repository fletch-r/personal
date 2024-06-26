import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import Layout from '../layout/Layout';
import About from '../pages/About';
import SimpleCommit from "../pages/SimpleCommit";
import RadixTable from "../pages/RadixTable";
import CRI from "../pages/CRI";
import ContentEditor from "../pages/content_editor/ContentEditor";
import PRISM from "../pages/prism/Prism";
import Collection from "../pages/collection/Collection";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="collection" element={<Collection />} />
          <Route path="simple-commit" element={<SimpleCommit />} />
          <Route path="radix-table" element={<RadixTable />} />
          <Route path="create-react-interface" element={<CRI />} />
          <Route path="content-editor" element={<ContentEditor />} />
          <Route path="prism" element={<PRISM />} />
          <Route path="*" element={<h1 className='ml-40'>Coming Soon</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router