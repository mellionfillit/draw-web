import CoverPage from './pages/CoverPage'
import {Routes, Route} from "react-router-dom"
import RegPage from 'pages/RegPage';
import LogPage from 'pages/LogPage';

function App() {
return(
  <Routes>
    <Route path="/" element={<CoverPage/>}/>
    <Route path="/login" element={<LogPage/>}/>
    <Route path="/register" element={<RegPage/>}/>
  </Routes>
)
 
}

export default App;
