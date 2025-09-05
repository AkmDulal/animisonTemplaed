import './App.css'
import './assets/style.css'
import './assets/responsive.css'
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Layout from './Componend/Layout/Layout';
function App() {
  return (
    <>
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
         </Routes>
    </Layout>
        
    </>
  )
}

export default App
