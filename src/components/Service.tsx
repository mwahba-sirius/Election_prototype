import { Outlet } from "react-router-dom"
import { SideMenuItem } from "../App"

export const Service = () => {

    return (<div style={{ display: "flex", width: "100%", height: "calc(100vh - 5rem)" }}>
        <div style={{ flexBasis: "20%", borderLeft: "2px solid #e6e6e6", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <SideMenuItem text="تقديم طلب ترشح"  color="red" link="/service/new" />
            <SideMenuItem text="متابعة طلب ترشح" color="red" link="/service/monitor" />

        </div>
        <div style={{ flexBasis: "80%" }}>
            <Outlet />
        </div>

    </div>)
}