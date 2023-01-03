import ButtonOrange, { ButtonSkeleton, ButtonWhite } from "./components/buttons";
import Counter from "./components/counter";
import Landing from './pages/landing';
import {Routes, Route} from "react-router-dom"
import CategoryPage from "./pages/category.Page";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/category" element={<CategoryPage />} />
    </Routes>
    
  );
}

export default App;
