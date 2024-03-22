import { Outlet } from "react-router-dom"
import { Menu } from "../Menu/Menu"

export const AppLayout = () => {
    return(
        <>
        <Menu/>
        <Outlet></Outlet>
        </>
    )
}