import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export function Toastify(){
    return(
        <ToastContainer 
            position="bottom-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}