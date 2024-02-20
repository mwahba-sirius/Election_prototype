import { useState } from "react";
import slide1 from "./../assets/slider_1.jpg"
import slide2 from "./../assets/slider_2.jpg"
export const ImageSlider = () => {
    const images = [{
        image: slide1, text: `وزارتا الشباب والتخطيط وهيئة النيابة الادارية يوقعون بروتوكول تعاون لتطبيق نظام التصويت
                        الالكتروني فى انتخابات الهيئات الشبابية`},
    { image: slide2, text: "النيابة الإدارية تطلق لأول مرة تطبيقا لتلقى شكاوى المواطنين ضد الموظفين" }];
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <div style={{ marginTop: "1rem", display: "flex", width: "100%", justifyContent: "space-evenly", alignItems: "center" }}>
            <div onClick={() => {
                if (currentSlide == 0) {
                    setCurrentSlide(images.length - 1);
                } else {
                    setCurrentSlide(cs => cs - 1)
                }
            }} style={{ backgroundColor: "#E2E2E2", padding: "0.5rem 0.7rem 0.5rem 0.7rem", borderRadius: "0.4rem" }}><div style={{

                width: 0,
                height: 0,
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",

                borderLeft: "10px solid #CE5555"
            }} /></div>
            <div style={{
                backgroundImage: ` 
        linear-gradient(
          rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.2)
        ),
        url(${images[currentSlide].image})`, borderRadius: "2rem", flexBasis: "90%", height: "30rem",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: "relative"
            }}>
                <div style={{ position: "absolute", bottom: "0", color: "white", left: "50%", transform: "translateX(-50%)", marginBottom: "2rem" }}>
                    <h2>{images[currentSlide].text}</h2>
                </div>
            </div>
            <div style={{ backgroundColor: "#E2E2E2", padding: "0.5rem 0.7rem 0.5rem 0.7rem", borderRadius: "0.4rem" }} onClick={() => {
                if (currentSlide + 1 === images.length) {
                    setCurrentSlide(0);
                } else {
                    setCurrentSlide((cs) => cs + 1)
                }

            }}><div style={{
                width: 0,
                height: 0,
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderRight: "10px solid #CE5555"
            }} /></div>

        </div>
    );
}