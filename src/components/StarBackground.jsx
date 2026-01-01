import { useRef, useEffect } from 'react';

const StarBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const stars = [];
        const numStars = 800;
        const width = canvas.width;
        const height = canvas.height;

        // Create Stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.2,
                alpha: Math.random(),
                speed: Math.random() * 0.05
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // 1. Deep Space Background
            ctx.fillStyle = '#020205'; // Almost pure black
            ctx.fillRect(0, 0, width, height);

            // 2. Nebula / Milky Way "Gas" Clouds
            // We use globalCompositeOperation to blend them nicely
            ctx.globalCompositeOperation = 'screen';

            // Cloud 1: Deep Blue/Purple diagonal
            const nebula1 = ctx.createRadialGradient(width * 0.2, height * 0.8, 0, width * 0.2, height * 0.8, width * 0.6);
            nebula1.addColorStop(0, 'rgba(76, 29, 149, 0.1)'); // Purple
            nebula1.addColorStop(1, 'transparent');
            ctx.fillStyle = nebula1;
            ctx.fillRect(0, 0, width, height);

            // Cloud 2: Blue/Cyan center
            const nebula2 = ctx.createRadialGradient(width * 0.8, height * 0.2, 0, width * 0.8, height * 0.2, width * 0.5);
            nebula2.addColorStop(0, 'rgba(14, 165, 233, 0.08)'); // Cyan
            nebula2.addColorStop(1, 'transparent');
            ctx.fillStyle = nebula2;
            ctx.fillRect(0, 0, width, height);

            // Cloud 3: Pink/Magenta center (subtle)
            const nebula3 = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, width * 0.4);
            nebula3.addColorStop(0, 'rgba(236, 72, 153, 0.05)'); // Pink
            nebula3.addColorStop(1, 'transparent');
            ctx.fillStyle = nebula3;
            ctx.fillRect(0, 0, width, height);

            // Reset composite for stars
            ctx.globalCompositeOperation = 'source-over';

            // 3. Draw Stars
            stars.forEach(star => {
                // Twinkle
                if (Math.random() > 0.99) {
                    star.alpha = Math.random();
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();

                // Slow movement
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)' // Deep space gradient
            }}
        />
    );
};

export default StarBackground;
