import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[40rem] md:h-[55rem] flex items-center justify-center relative p-2 pt-36 md:p-20 md:pt-40"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

const CornerOrnament = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fcf6ba" />
        <stop offset="30%" stopColor="#bf953f" />
        <stop offset="60%" stopColor="#fcf6ba" />
        <stop offset="100%" stopColor="#aa771c" />
      </linearGradient>
    </defs>
    {/* Main corner scroll */}
    <path d="M5 5 C5 5, 45 3, 55 8 C65 13, 50 25, 40 20 C30 15, 50 8, 55 8" stroke="url(#goldGrad)" strokeWidth="3" fill="none" />
    <path d="M5 5 C5 5, 3 45, 8 55 C13 65, 25 50, 20 40 C15 30, 8 50, 8 55" stroke="url(#goldGrad)" strokeWidth="3" fill="none" />
    {/* Floral center */}
    <circle cx="18" cy="18" r="8" fill="url(#goldGrad)" opacity="0.7" />
    <circle cx="18" cy="18" r="5" fill="none" stroke="#fcf6ba" strokeWidth="1" opacity="0.6" />
    <circle cx="18" cy="18" r="3" fill="#bf953f" opacity="0.8" />
    {/* Decorative leaves/petals */}
    <ellipse cx="10" cy="10" rx="6" ry="3" transform="rotate(-45 10 10)" fill="url(#goldGrad)" opacity="0.5" />
    <ellipse cx="26" cy="10" rx="3" ry="6" transform="rotate(-45 26 10)" fill="url(#goldGrad)" opacity="0.4" />
    <ellipse cx="10" cy="26" rx="6" ry="3" transform="rotate(-45 10 26)" fill="url(#goldGrad)" opacity="0.4" />
    {/* Spiral accents */}
    <path d="M35 5 C38 5, 42 8, 38 12 C34 16, 30 12, 33 9" stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" opacity="0.6" />
    <path d="M5 35 C5 38, 8 42, 12 38 C16 34, 12 30, 9 33" stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" opacity="0.6" />
    {/* Small dots */}
    <circle cx="48" cy="6" r="2" fill="url(#goldGrad)" opacity="0.5" />
    <circle cx="6" cy="48" r="2" fill="url(#goldGrad)" opacity="0.5" />
    <circle cx="30" cy="5" r="1.5" fill="#fcf6ba" opacity="0.4" />
    <circle cx="5" cy="30" r="1.5" fill="#fcf6ba" opacity="0.4" />
  </svg>
);

const CenterOrnament = () => (
  <svg viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldGradC" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fcf6ba" />
        <stop offset="30%" stopColor="#bf953f" />
        <stop offset="60%" stopColor="#fcf6ba" />
        <stop offset="100%" stopColor="#aa771c" />
      </linearGradient>
    </defs>
    {/* Central medallion */}
    <ellipse cx="80" cy="20" rx="18" ry="14" fill="url(#goldGradC)" opacity="0.6" />
    <ellipse cx="80" cy="20" rx="12" ry="9" fill="none" stroke="#fcf6ba" strokeWidth="1" opacity="0.5" />
    <ellipse cx="80" cy="20" rx="7" ry="5" fill="#bf953f" opacity="0.7" />
    {/* Left scrollwork */}
    <path d="M62 20 C55 15, 40 10, 30 15 C20 20, 30 28, 40 24 C50 20, 45 14, 38 18" stroke="url(#goldGradC)" strokeWidth="2.5" fill="none" />
    <path d="M30 15 C25 12, 15 14, 10 20" stroke="url(#goldGradC)" strokeWidth="2" fill="none" opacity="0.7" />
    {/* Right scrollwork */}
    <path d="M98 20 C105 15, 120 10, 130 15 C140 20, 130 28, 120 24 C110 20, 115 14, 122 18" stroke="url(#goldGradC)" strokeWidth="2.5" fill="none" />
    <path d="M130 15 C135 12, 145 14, 150 20" stroke="url(#goldGradC)" strokeWidth="2" fill="none" opacity="0.7" />
    {/* Small decorative elements */}
    <circle cx="25" cy="18" r="2" fill="url(#goldGradC)" opacity="0.5" />
    <circle cx="135" cy="18" r="2" fill="url(#goldGradC)" opacity="0.5" />
    <circle cx="80" cy="8" r="2.5" fill="#fcf6ba" opacity="0.4" />
    {/* Leaf accents */}
    <ellipse cx="50" cy="16" rx="5" ry="2" transform="rotate(-15 50 16)" fill="url(#goldGradC)" opacity="0.4" />
    <ellipse cx="110" cy="16" rx="5" ry="2" transform="rotate(15 110 16)" fill="url(#goldGradC)" opacity="0.4" />
  </svg>
);

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full ornate-frame"
    >
      {/* Corner ornaments */}
      <div className="ornate-corner ornate-corner--tl"><CornerOrnament /></div>
      <div className="ornate-corner ornate-corner--tr"><CornerOrnament /></div>
      <div className="ornate-corner ornate-corner--bl"><CornerOrnament /></div>
      <div className="ornate-corner ornate-corner--br"><CornerOrnament /></div>

      {/* Top & bottom center ornaments */}
      <div className="ornate-center-top"><CenterOrnament /></div>
      <div className="ornate-center-bottom"><CenterOrnament /></div>

      {/* Edge bead pattern */}
      <div className="ornate-edge-pattern"></div>

      {/* Inner molding border */}
      <div className="ornate-inner-border h-full w-full">
        {/* Dark mat */}
        <div className="ornate-mat h-full w-full">
          <div className="h-full w-full overflow-hidden bg-zinc-900">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
