import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./components/ProductDetailPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/service/:id' element={<ProductDetailPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;