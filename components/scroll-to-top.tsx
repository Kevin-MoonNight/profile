import { useEffect, useState } from "react";
import UpArrow from "./icons/up-arrow";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className={"fixed bottom-5 right-5 md:bottom-10 md:right-10 transition-all"
            + (isVisible ? " block" : " hidden")
        }>
            <button onClick={scrollToTop} type="button" className="flex items-center justify-center w-12 h-12 transition-all bg-gray-900 rounded-full shadow-lg hover:bg-black lg:w-16 lg:h-16">
                <UpArrow />
            </button>
        </div>
    );
};

export default ScrollToTop;