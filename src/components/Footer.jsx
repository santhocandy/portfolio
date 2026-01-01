const Footer = () => {
    const iconStyle = { width: '24px', height: '24px', transition: 'fill 0.2s' };
    const linkStyle = {
        padding: '12px',
        backgroundColor: 'white',
        borderRadius: '50%',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 10px',
        transition: 'transform 0.2s'
    };

    return (
        <footer style={{ backgroundColor: '#f9f9f9', padding: '60px 20px', textAlign: 'center' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '30px', color: '#333' }}>Let's Connect</h3>

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
                    {/* LinkedIn (Blue) */}
                    <a href="https://www.linkedin.com/in/santhoshkumar-s-8356011b9/" target="_blank" rel="noopener noreferrer" style={linkStyle} aria-label="LinkedIn" className="social-icon">
                        <svg style={{ ...iconStyle, fill: '#0077b5' }} viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>

                    {/* GitHub (Black) */}
                    <a href="https://github.com/santhocandy" target="_blank" rel="noopener noreferrer" style={linkStyle} aria-label="GitHub" className="social-icon">
                        <svg style={{ ...iconStyle, fill: '#333' }} viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>

                    {/* Telegram (Blue) */}
                    <a href="https://t.me/Hardiksanthosh?text=Hello%20Santhosh%2C%20I%20visited%20your%20portfolio." target="_blank" rel="noopener noreferrer" style={linkStyle} aria-label="Telegram" className="social-icon">
                        <svg style={{ ...iconStyle, fill: '#0088cc' }} viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.325.016.093.036.305.02.469z" />
                        </svg>
                    </a>

                    {/* Email (Gmail Red) */}
                    <a href="mailto:santhoshkumar.sds24@gmail.com" style={linkStyle} aria-label="Email" className="social-icon">
                        <svg style={{ ...iconStyle, fill: '#EA4335' }} viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </a>
                </div>

                <div style={{ borderTop: '1px solid #ddd', paddingTop: '20px' }}>
                    <p style={{ color: '#999', fontSize: '14px' }}>&copy; 2026 Santhoshkumar S. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
