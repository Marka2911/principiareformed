import { BrowserRouter, Routes, Route } from "react-router-dom";

import Trajectoria from "./pages/trajectoria/Trajectoria.js";
import QuiSom from "./pages/quisom/QuiSom.js";
import EquipImpulsor from "./pages/equipimpulsor/EquipImpulsor.js";
import Contacte from "./pages/contacte/Contacte.js";
import Entitats from "./pages/entitats/Entitats.js";
import Valors from "./pages/valors/Valors.js";
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
                    <Route path="/valors" element={<Valors />} />
                    <Route path="/trajectoria" element={<Trajectoria />} />
                    <Route path="/equip" element={<EquipImpulsor />} />
                    <Route path="/entitats" element={<Entitats />} />
                    <Route path="/contacte" element={<Contacte />} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;