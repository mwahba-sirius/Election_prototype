import { useNavigate } from "react-router-dom"

export const SaveAlert = ({ text }: { text: string }) => {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ position: "fixed", width: "100vw", height: "100vh", backdropFilter: "brightness(0.5) blur(5px)", zIndex: 1 }}>

            </div>
            <div style={{
                position: "fixed",
                textAlign: "center",
                width: "400px",
                height: "200px",
                borderRadius: "0.5rem",
                boxShadow: " 0px 2px 20px -7px rgba(0,0,0,0.75)",
                top: "50%",
                left: "50%",
                zIndex: 2,
                backgroundColor: "white",

                transform: "translate(-50%, -50%)",
            }}>
                <div style={{ color: "#CE5555", fontSize: "2rem" }}>تنبية</div>
                <div style={{ fontSize: "1rem" }}>{text}</div>
                <hr style={{ marginInline: "1rem", marginTop: "2rem" }} />
                <div style={{ color: "#53A78B", fontSize: "1.5rem", cursor: "pointer" }} onClick={() => { navigate("/service") }}>حسنا</div>
            </div>
        </>
    )
}