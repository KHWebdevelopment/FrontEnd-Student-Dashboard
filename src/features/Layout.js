import { Outlet, useParams } from "react-router-dom"
import NavBar from "./navigation/Navigation"
import Footer from "./footer/Footer"

function Layout() {

    let params = useParams()

    return (
        <>
            <NavBar student={params.studentName}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout