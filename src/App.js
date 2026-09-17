import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuiSom from "./pages/quisom/QuiSom.js";
import Main from "./Main.js";
import Header from "./Header";
import Footer from "./Footer";
import Projectes from "./pages/projectes/Projectes.js";
function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/qui-som" element={<QuiSom />} />
                    <Route path="/projectes" element={<Projectes />} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;