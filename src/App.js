// import Add from "./components/addition";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";

function App() {
   return (
      <Router>
         <Layout>
            <Routes>
               <Route path="/" element={<AllMeetups />} />
               <Route path="/favourites" element={<Favourites />} />
               <Route path="/new-meet" element={<NewMeetup />} />
            </Routes>
         </Layout>
      </Router>
   );
}

export default App;
