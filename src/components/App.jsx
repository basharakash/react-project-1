import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContex";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quize from "./pages/Quize";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import "./styles/App.css";

function App() {
    return (
        <>
            <AuthProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route exact path="/signup" element={<PublicRoute />}>
                            <Route path="/signup" element={<Signup />} />
                        </Route>
                        <Route exact path="/login" element={<PublicRoute />}>
                            <Route path="/login" element={<Login />} />
                        </Route>
                        <Route exact path="/quize" element={<PrivateRoute />}>
                            <Route path="/quize/:id" element={<Quize />} />
                        </Route>
                        <Route exact path="/result" element={<PrivateRoute />}>
                            <Route path="/result/:id" element={<Result />} />
                        </Route>
                    </Routes>
                </Layout>
            </AuthProvider>
        </>
    );
}

export default App;
