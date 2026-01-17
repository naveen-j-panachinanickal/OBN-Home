import { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
    className?: string;
}

const ScrollReveal = ({
    children,
    delay = 0,
    duration = 0.6,
    direction = 'up',
    className = ''
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.2,
        margin: "0px 0px -100px 0px"
    });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            scale: direction === 'fade' ? 0.95 : 1,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number], // Custom easing for smooth animation
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
