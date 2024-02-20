import { CSSProperties } from 'react';
import './App.css';
import { Header } from './components/header';
import { useNavigate } from 'react-router-dom';

const getColorByStyle = (style: string) => {
  if (style === "red") {
    return "#CE5555";
  }
  if (style === "green") {
    return "#53A78B";
  }
  return "white";
}
export const SideMenuItem = ({ text, style, color, link }: { text: string; style?: CSSProperties; color: "red" | "green" | "none"; link: string }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => { navigate(link) }}
      style={{ width: "70%", paddingInline: "2rem", paddingBlock: "20px", marginBlock: "2rem", backgroundColor: "#F7F7F7", borderRight: `10px solid ${getColorByStyle(color)}`, borderRadius: "0.4rem", boxShadow: "3px 3px 17px -7px rgba(0,0,0,0.75)", fontSize: "1.3rem", fontWeight: "bold", cursor: "pointer", ...style }}>
      {text}
    </div>
  )
}
export const Select = ({ options, label, required, style, register, name,disabled }: { options: { label: string, value: string }[], label: string, required?: boolean, style?: CSSProperties, register: any, name: string;disabled? : boolean }) => (
  <div style={style}>
    <div style={{ fontSize: "1.5rem" }}> {label} </div>
    <div><select name={name} style={{ color: "#53A78B", fontSize: "20px", fontFamily: "El Messiri", backgroundColor: "#F7F7F7", borderWidth: "0px", height: "3rem", width: "24rem", marginTop: "1rem" }} {...register(name)} disabled={disabled}>
      {options.map((x) => (
        <option value={x.value}>{x.label}</option>
      ))}
    </select>
    </div>
  </div>
);
export const TextField = ({ label, required, style, register, name, upload }: { label: string, required?: boolean, style?: CSSProperties, register: any, name: string, upload?: boolean }) => (
  <div style={style}>
    <div style={{ fontSize: "1.5rem" }}> {label} </div>
    <div><input type={upload ? "file" : "text"} name={name} style={{ color: "#53A78B", fontSize: "20px", fontFamily: "El Messiri", backgroundColor: "#F7F7F7", borderWidth: "0px", height: "3rem", width: "24rem", marginTop: "1rem" }} {...register(name)} />
    </div>
  </div>
);
export const BreadCrumbs = ({ paths }: { paths: string[] }) => {
  return (<div style={{ display: "flex", marginRight: "3rem", marginTop: "3rem" }}>
    {paths.map((x, i) => (
      <>

        {i !== paths.length - 1 ? (
          <div style={{ marginInline: "1.2rem", fontSize: "1.5rem", color: "#53A78B" }}>{x}</div>
        ) : (

          <div style={{ marginInline: "1.2rem", fontSize: "1.5rem", fontWeight: "bold" }}>{x}</div>
        )}
        {i !== paths.length - 1 && (
          <div style={{ fontSize: "1.3rem", fontWeight: "bolder" }}>{">"}</div>
        )
        }
      </>
    ))}
  </div>)
}
function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
