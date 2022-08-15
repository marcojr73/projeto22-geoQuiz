import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./signInUp/SignIn";
import { SignUp } from "./signInUp/signUp";
import { Home } from "./home/Home";

import "../assets/styles/reset.css"
import "../assets/styles/style.css"
import { Quiz } from "./quiz/Quiz";
import { AuthProvider } from "../provider/authProvider";
import { Toastify } from "../toasts/Toastify";


export default function App(){
    return(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>} > </Route>
                    <Route path="/sign-up"element={<SignUp/>} > </Route>
                    <Route path="/home"element={<Home/>} > </Route>
                    <Route path="/quiz"element={<Quiz/>} > </Route>
                </Routes>
            </BrowserRouter>
            <Toastify/>
        </AuthProvider>
    )
}