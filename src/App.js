import './global.css';
import ReactDOM from "react-dom/client";
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Reservation from "./pages/Reservation"
import Layout from './pages/layout/Layout';
// import Article from './pages/layout/Article';/ 

function App() {
  return (
    <div className="App">
      <Layout>    

      <Routes >
        {/* <Route path='/article' element={<Article/>} /> */}
       <Route path="/home" element={<Home />} />
       <Route path="/menu" element={<Menu />} />
       <Route path="/reservation" element={<Reservation />} />
      </Routes>
      </Layout>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;