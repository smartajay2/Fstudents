// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contextprovider from "./Components/Contextprovider"; // Import Contextlist from its file
import Listofstudents from "./Components/Listofstudents"; // Correct the import path
import Favouritestudents from "./Components/Favoritestudent"; // Correct the import path


function App() {
  return (
    <BrowserRouter>
 <div className="flex justify-center bg-red-500 p-11">
  <nav className=" text-2xl font-bold flex justify-between items-center gap-4">
    <h1><Link to={"/"} className="text-black underline">List Of students</Link></h1>
    <h1><Link to={"/FAV"} className="text-black underline">Favourite Students</Link></h1>
  </nav>
</div>




      <Contextprovider> {/* Wrap your routes with the Contextlist provider */}
        <Routes>
          <Route path="/" element={<Listofstudents />} />
          <Route path="/FAV" element={<Favouritestudents />} />
        </Routes>
      </Contextprovider>
    </BrowserRouter>
  );
}

export default App;

