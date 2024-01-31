import { Route, Routes } from "react-router-dom";
import Layout from "./utils/Layout";
import Login from "./components/Login";
import Browse from "./components/Browse";

function App() {

  return (
    <Layout>
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </Layout>
  );
}

export default App;
