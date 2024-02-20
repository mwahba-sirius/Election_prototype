import { useState } from "react";
import { RequestProviding } from "./requestProviding"
import { BreadCrumbs, TextField } from "../App";
import { useForm } from "react-hook-form";
import { IUSer } from "../models";
import { SaveAlert } from "./saveAlert";

export const RequestStep = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const form = useForm<IUSer>();
    const [showAlert, setShowAlert] = useState(false);
    return (
        <>
            {currentStep == 0 && (
                <RequestProviding onClick={() => { setCurrentStep(1) }} />
            )}
            {currentStep == 1 && (
                <>
                    {showAlert && (
                        <SaveAlert text={"تم تقديم الطلب بنجاح و جاري الفحص"} />
                    )}
                    <BreadCrumbs paths={["الرئيسيه", "خدمات", "تقديم طلب ترشح"]} />
                    <div style={{ marginRight: "5rem", marginTop: "7rem", display: "flex", }}>
                        <div style={{ flexBasis: "50%" }}>
                            <div>
                                <TextField required register={form.register} name="name" label='الاسم' />
                            </div>
                            <div style={{ marginTop: "1rem" }}>
                                <TextField register={form.register} name="nickName" label='اسم الشهره' />
                            </div>
                            <div style={{ marginTop: "1rem" }}>
                                <TextField required register={form.register} name="idNumber" label='الرقم القومي' />
                            </div>
                            <div style={{ marginTop: "1rem" }}>
                                <TextField required register={form.register} name="picture" label='صورة المرشح' upload />
                            </div>
                        </div>
                        <div style={{ border: "2px solid #CE5555", borderRadius: "0.5rem", width: "30rem", height: "10rem", fontSize: "1.5rem", paddingBlock: "1rem", paddingInline: "1rem" }}>
                            <span style={{ padding: "0.3rem 1rem 0.3rem 1rem", backgroundColor: "#CE5555", borderRadius: "10rem", color: "white" }}>I</span>              الاشتراطات اللازمه
                            <ol style={{ listStyle: "inside", color: "#CE5555" }}>
                                <li><span style={{ color: "black" }}>ان يكون المرشح مصري الجنسيه</span></li>
                                <li><span style={{ color: "black" }}>ادخال جميع الحقول</span></li>
                            </ol>
                        </div>
                    </div>
                    <div style={{ marginTop: "10rem", marginRight: "5rem" }}>
                        <div
                            onClick={() => { localStorage.setItem("userDate", JSON.stringify(form.getValues())); setShowAlert(true) }}
                            style={{
                                background: `linear-gradient(-169deg,#3a8c71 0.00%,#fffdf5 100.00%)`,
                                width: "15rem",
                                height: "4rem",
                                color: "white",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "1.3rem",
                                fontWeight: "bold",
                                borderRadius: "0.3rem",
                                cursor: "pointer"
                            }}
                        > حفظ </div>
                    </div>
                </>
            )}
        </>
    )
}