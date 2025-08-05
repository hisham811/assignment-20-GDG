import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Layout.css"
import { Outlet } from "react-router-dom";


const Layout = () => {

    return(
        <>
        <Header/>
        <main className="main">
        <Outlet/>
        </main>
        <Footer/>
        </>
    )
}
export default Layout