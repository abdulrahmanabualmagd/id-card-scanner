import { useEffect, useRef } from "react";

export default function AnimatedFade({ className, children, animation }) {
    const elementRef = useRef();

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animation);
                    entry.target.classList.remove("hidden");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (elementRef.current) observer.observe(elementRef.current);

        return () => {
            if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, [animation]);

    return (
        <div ref={elementRef} className={`hidden ${className}`}>
            {children}
        </div>
    );
}
