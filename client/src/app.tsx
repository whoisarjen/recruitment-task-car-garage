import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./layout/navbar";
import Home from "./pages/Home";

const App = () => {
    const navigate = useNavigate();

    const navigateTo = (where: string) => {
        navigate(where)
    }

    return (
        <Navbar navigateTo={navigateTo}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Navbar>
    )
}

export default App;