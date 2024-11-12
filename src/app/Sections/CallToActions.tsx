'use client';
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion';
import React, { RefObject, useEffect, useRef } from 'react';
import { Button }  from '../Components/Button';

{/* Custom Hook for Relative Mouse Position */}
const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const updateMousePosition = (event: MouseEvent) => {
        if (!to.current) return;
        const { top, left } = to.current.getBoundingClientRect();
        mouseX.set(event.x - left);
        mouseY.set(event.y - top);
    };

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    });
    return [mouseX, mouseY];
};

export default function CallToAction() {
    const sectionRef = useRef<HTMLElement>(null);
    const borderedDivRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
    const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);
    const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

    return (
        <>
            <section className={"py-20 md:py-24"} ref={sectionRef}>
                <div className={""}>
                    <motion.div
                        animate={{ backgroundPositionX: [0, 1000] }}
                        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
                        className={"border border-white/15 py-24 px-6 rounded-xl overflow-hidden relative group"}
                        style={{ backgroundImage: `url('/assets/stars.png')`, backgroundPositionY }}
                    >
                        <div
                            className={"absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"}
                            style={{ backgroundImage: `url('/assets/grid-lines.png')` }}
                        />
                        <motion.div
                            className={"absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"}
                            style={{ backgroundImage: `url('/assets/grid-lines.png')`, maskImage }}
                            ref={borderedDivRef}
                        />
                        <div className={"relative"}>
                            <h2 className={" highlighted-text text-5xl tracking-tight text-center font-medium"}>
                                Powerful AI-driven Analytics.
                            </h2>
                            <p className={"text-center text-lg md:text-xl text-white/70 tracking-tight px-4 mt-5"}>
                                Impactful, easy-to-interpret analytics without the complexity.
                            </p>
                            <div className={"flex justify-center mt-8"}>
                                <Button>Join Waitlist for Early Access</Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
