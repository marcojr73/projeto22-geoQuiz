import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { SignIn } from "./signInUp/SignIn";
import { SignUp } from "./signInUp/signUp";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>} > </Route>
                <Route path="/sign-up"element={<SignUp/>} > </Route>
            </Routes>
        </BrowserRouter>
    )
}