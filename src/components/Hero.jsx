import { useState, useEffect } from 'react';

const Hero = () => {
    return (
        <section
            className="Hero"
            id="home"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '80px', // Account for absolute header
                backgroundColor: '#f8fafc', // Clean light background
                overflow: 'hidden',
                position: 'relative' // Needed for absolute bg
            }}
        >

            {/* Left Side: Profile Picture (40%) */}
            <div
                style={{
                    flex: 1,
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 2
                }}
            >
                <div style={{
                    width: 'min(450px, 80vw)',
                    height: 'min(450px, 80vw)',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '8px solid white',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)', // Soft shadow
                    animation: 'float 6s ease-in-out infinite'
                }}>
                    {/* User's Profile Picture */}
                    <img
                        src="/images/profile1.jpg"
                        alt="Santhoshkumar S"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'top center'
                        }}
                    />
                </div>
            </div>

            {/* Right Side: Information (50%) */}
            <div
                style={{
                    flex: 1,
                    padding: '60px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'left',
                    zIndex: 2 // Establish proper stacking context
                }}
            >
                <div style={{ textAlign: 'left', maxWidth: '700px' }}>
                    {/* Name: Removed animation, added Nebula Gradient */}
                    <h1 style={{
                        fontSize: '64px',
                        marginBottom: '15px',
                        lineHeight: '1.1',
                        color: '#1e293b', // Dark slate
                        fontWeight: '700'
                    }}>
                        Santhoshkumar S
                    </h1>

                    <h2 style={{
                        fontSize: '28px',
                        color: '#ca4361', // Original professional accent
                        marginBottom: '25px',
                        fontWeight: '700'
                    }}>
                        Java Developer | Software Engineer
                    </h2>

                    <div style={{ marginBottom: '30px' }}>
                        <p style={{ fontSize: '18px', color: '#475569', marginBottom: '10px' }}>
                            Currently working at <a href="https://kombee.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 'bold', borderBottom: '2px solid #ca4361' }}>Kombee Technologies</a>
                        </p>
                    </div>

                    <div style={{ maxWidth: '650px', color: '#334155' }}>
                        <p style={{ fontSize: '20px', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '0' }}>
                            "I am a Java Developer passionate about coding and fixing bugs. I love exploring new technologies to solve day-to-day problems."
                        </p>
                    </div>
                </div>{/* Scroll Indicator (Right side only) */}
                <div
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    style={{
                        marginTop: '60px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: '#ca4361',
                        fontWeight: '600'
                    }}
                >
                    <span>More about me</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'bounce 2s infinite' }}>
                        <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="#ca4361" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .Hero {
                        flex-direction: column !important;
                        height: auto !important;
                        min-height: auto !important;
                        padding-top: 80px !important;
                    }
                    .Hero > div:first-child {
                         height: 50vh !important;
                         min-height: 50vh !important;
                         width: 100%;
                    }
                    .Hero > div:last-child {
                        padding: 40px 20px !important;
                        width: 100%;
                        text-align: center !important;
                        align-items: center !important;
                    }
                    .Hero h1 {
                        font-size: 42px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
