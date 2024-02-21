import { useState } from "react"
import { BreadCrumbs, Select } from "../App"
import { SaveAlert } from "./saveAlert"
import { useForm } from "react-hook-form";
import { ICandidateForm } from "../models";

export const MonitorRequest = () => {
    const [showAlert, setShowAlert] = useState(false);
    const form = useForm<ICandidateForm>({ defaultValues: JSON.parse(localStorage.getItem("requestData")!) });
    return (
        <>
            <BreadCrumbs paths={["الرئيسيه", "خدمات", "متابعة طلب ترشح"]} />
            {
                showAlert && (
                    <SaveAlert text={`تم تاكيد الطلب و تم تحديد موعد الانتخاب يوم 27/2/2024 
علماً بان لجنتك الانتخابية رقم (1) مسلسل (421)`} />
                )
            }
            <div style={{ marginRight: "5rem", marginTop: "7rem", display: "flex", }}>
                <div style={{ flexBasis: "50%" }}>
                    <div>
                        <Select disabled register={form.register} name="entity" label='الجهة' options={[{ label: "نادي الزمالك", value: "نادي الزمالك" }]} />
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                        <Select disabled register={form.register} name="election" label='الانتخاب' options={[{ label: "انتخابات مجلس الادارة", value: "انتخابات مجلس الادارة" }]} />
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                        <Select disabled register={form.register} name="position" label='المنصب المراد الترشح له' options={[{ label: "عضو مجلس الاداره", value: "عضو مجلس الاداره" }, { label: "رئيس مجلس الاداره", value: "رئيس مجلس الاداره" }]} />
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
            <div style={{ marginTop: "10rem", marginRight: "5rem", color: "#53A78B", fontSize: "1.5rem" }}>
                حالة الطلب : تم قبول طلبك و تم ادراج اسمك بكشوف المرشحين المرشح رقم (1)
                <div>
                    هل ترغب في التنازل
                    <span style={{ width: "6rem", height: "2rem", border: "1px solid #CE5555", color: "#CE5555", borderRadius: "0.5rem", display: "inline-flex", justifyContent: "center", alignItems: "center", marginRight: "1rem",cursor : "pointer" }} onClick={() => {setShowAlert(true)}}>
                        لا
                    </span>
                    <span style={{ width: "6rem", height: "2rem", border: "1px solid #53A78B", borderRadius: "0.5rem", display: "inline-flex", justifyContent: "center", alignItems: "center", marginRight: "1rem"}}>
                        نعم
                    </span>
                </div>
            </div>
        </>
    )
}