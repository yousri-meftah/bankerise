import { useMotionValue } from "framer-motion";
import { useMotionTemplate, motion } from "framer-motion";
export const EvervaultCard = ({
}: {
    text?: string;
    className?: string;
}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }: any) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

    }
    return (
        
            <div
                onMouseMove={onMouseMove}
                className="group/card  w-full  overflow-hidden bg-transparent h-full absolute top-0 left-0 "
            >
                <CardPattern
                    mouseX={mouseX}
                    mouseY={mouseY}
                />
            </div> 
    );
};
export function CardPattern({ mouseX, mouseY }: any) {
    let maskImage = useMotionTemplate`radial-gradient(125px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div className="pointer-events-none">
            <div className="absolute inset-0 rounded-lg  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
            <motion.div
                className="absolute inset-0 rounded-lg bg-cyan-300/30 opacity-0  group-hover/card:opacity-100 backdrop-blur-2xl transition duration-500"
                style={style}
            />
        </div>
    );
}


