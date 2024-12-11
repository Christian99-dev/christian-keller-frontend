"use client"
import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interBubble = interactiveRef.current;
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    };

    const onMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-screen z-10 overflow-hidden bg-violet-100"
    >
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div 
        className="w-full h-full relative"
        style={{ filter: 'url(#goo) blur(25px)' }}
      >
        <div
          className="absolute mix-blend-hard-light animate-moveVertical"
          style={{
            width: '80%',
            height: '80%',
            top: 'calc(50% - 40%)',
            left: 'calc(50% - 40%)',
            background: 'radial-gradient(circle at center, rgba(135,206,235,0.8) 0%, rgba(135,206,235,0) 50%) no-repeat',
          }}
        />
        
        <div
          className="absolute mix-blend-hard-light"
          style={{
            animation: 'moveInCircle 20s linear infinite reverse',
            width: '80%',
            height: '80%',
            top: 'calc(50% - 40%)',
            left: 'calc(50% - 40%)',
            background: 'radial-gradient(circle at center, rgba(246,208,215,0.8) 0%, rgba(246,208,215,0) 50%) no-repeat',
            transformOrigin: 'calc(50% - 400px) center'
          }}
        />

        <div
          className="absolute mix-blend-hard-light"
          style={{
            animation: 'moveInCircle 40s linear infinite',
            width: '80%',
            height: '80%',
            top: 'calc(50% - 40% + 200px)',
            left: 'calc(50% - 40% - 500px)',
            background: 'radial-gradient(circle at center, rgba(229,164,183,0.8) 0%, rgba(229,164,183,0) 50%) no-repeat',
            transformOrigin: 'calc(50% + 400px) center'
          }}
        />

        <div
          className="absolute mix-blend-hard-light opacity-70"
          style={{
            animation: 'moveHorizontal 40s ease infinite',
            width: '80%',
            height: '80%',
            top: 'calc(50% - 40%)',
            left: 'calc(50% - 40%)',
            background: 'radial-gradient(circle at center, rgba(179,157,219,0.8) 0%, rgba(179,157,219,0) 50%) no-repeat',
            transformOrigin: 'calc(50% - 200px) center'
          }}
        />

        <div
          className="absolute mix-blend-hard-light"
          style={{
            animation: 'moveInCircle 20s ease infinite',
            width: '160%',
            height: '160%',
            top: 'calc(50% - 80%)',
            left: 'calc(50% - 80%)',
            background: 'radial-gradient(circle at center, rgba(209,213,219,0.8) 0%, rgba(209,213,219,0) 50%) no-repeat',
            transformOrigin: 'calc(50% - 800px) calc(50% + 200px)'
          }}
        />

        <div
          ref={interactiveRef}
          className="absolute mix-blend-hard-light opacity-100"
          style={{
            width: '100%',
            height: '100%',
            top: '-50%',
            left: '-50%',
            background: 'radial-gradient(circle at center, rgba(194, 203, 235, 0.8) 0%, rgba(241,241,241,0) 50%) no-repeat'
          }}
        ></div>
      </div>
    </div>
  );
};

export default Background;
