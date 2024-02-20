import { useForm } from "react-hook-form";
import { BreadCrumbs, Select } from "../App"
import { ICandidateForm } from "../models";

export const RequestProviding = ({ onClick }: { onClick: () => void }) => {
    const form = useForm<ICandidateForm>();
    return (
        <>
            <BreadCrumbs paths={["الرئيسيه", "خدمات", "تقديم طلب ترشح"]} />
            <div style={{ marginRight: "5rem", marginTop: "7rem", display: "flex", }}>
                <div style={{ flexBasis: "50%" }}>
                    <div>
                        <Select register={form.register} required name="entity" label='الجهه' options={[{ label: "نادي الزمالك", value: "نادي الزمالك" }]} />
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                        <Select register={form.register} required name="election" label='الانتخاب' options={[{ label: "انتخابات مجلس الادارة", value: "انتخابات مجلس الادارة" }]} />
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                        <Select register={form.register} required name="position" label='المنصب المراد الترشح له' options={[{ label: "عضو مجلس الاداره", value: "عضو مجلس الاداره" }, { label: "رئيس مجلس الاداره", value: "رئيس مجلس الاداره" }]} />
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
                    onClick={() => { localStorage.setItem("requestData", JSON.stringify(form.getValues())); onClick(); }}
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
    )
}