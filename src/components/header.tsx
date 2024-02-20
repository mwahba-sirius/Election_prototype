import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.jpeg"
const MenuItem = ({ name,onClick }: { name: string,onClick? : () => void }) => {
    return (
        <div style={{ borderInlineEnd: "1px solid #B0B3C7", padding: "1rem 3rem 1rem 3rem", fontSize: "1.5rem",cursor : "pointer" }} onClick={onClick}>
            {name}
        </div>
    )
}
export const Header = () => {
    const navigate = useNavigate();
    return (
        <div style={{ position: "sticky", top: "0", left: "0", right: "0", height: "5rem", boxShadow: "-3px 7px 60px -14px rgba(0,0,0,0.75)", display: "flex", alignItems: "center", backgroundColor: "#FFFDF5" }}>
            <div style={{ flexBasis: "30%", color: "black", fontSize: "1.5rem", fontWeight: "bolder", marginInlineStart: "2rem", fontFamily: "El Messiri",display : "flex",justifyContent : "center",alignItems : "center" }}>
                <img src={logo} width={"60rem"} style={{marginInline : "1rem"}} />
                المنصة الرقمية للانتخابات
                <img src={logo} width={"60rem"} style={{marginInline : "1rem"}} />
            </div>
            <div id="menu" style={{ flexBasis: "60%", marginInlineStart: "2rem", display: "flex", justifyContent: "center" }}>
                <MenuItem name="الرئيسيه" onClick={() => {navigate("/")}} />
                <MenuItem name="عن الهيئه" />
                <MenuItem name="الخدمات" onClick={() => {navigate("/service")}} />
                <MenuItem name="نتائج الانتخابات" />
                <MenuItem name="اتصل بنا" />
            </div>
        </div>
    )
}