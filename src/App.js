import ButtonOrange, { ButtonSkeleton, ButtonWhite } from "./components/buttons";
import Counter from "./components/counter";
import Landing from './pages/landing';
import {Routes, Route} from "react-router-dom"
import CategoryPage from "./pages/category.Page";
import ProductDetails from "./pages/productDetailsPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/details" element={<ProductDetails />} />
    </Routes>
    
  );
}

export default App;
