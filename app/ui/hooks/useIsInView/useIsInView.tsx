import { useEffect, useState } from "react";

export default function useIsInView(element: React.RefObject<any>): boolean {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    },[]);

    const handleScroll = () => {
        if(isInViewport()) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    };

    const isInViewport = () => {
        if (element.current) {
            var bounding = element.current.getBoundingClientRect();
            if (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                return true;
            } else {
                return false;
            }
        }
    }

    return isVisible;
}
