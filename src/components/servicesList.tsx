import { SideMenuItem } from "../App"

export const ServicesList = () => {
    return (< div style={{display : "flex"}}>
    <SideMenuItem text="تقديم طلب ترشح"   style={{width : "20rem",marginInline : "2rem"}} color="green" link="/service/new" />
    <SideMenuItem text="متابعة طلب ترشح"  style={{width : "20rem"}} color="green" link="/service/monitor" />
    </div>)
}
