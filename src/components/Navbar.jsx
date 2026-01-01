import { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Desktop: Nav Bar */}
      <nav className="desktop-nav">
        <ul className="links">
          <li>
            <a href="#about">About</a>
            <div className="Line"></div>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>

        <div className="buttons" style={{ display: 'flex', alignItems: 'center' }}>
          <a
            href="https://wa.me/919087093403?text=Hello%20Santhosh%2C%20I%20visited%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginRight: '15px',
              padding: '12px',
              backgroundColor: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}
            aria-label="Contact on WhatsApp"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <WhatsAppIcon width={24} height={24} fill="#25D366" />
          </a>
          <a href="mailto:santhoshkumar.sds24@gmail.com" className="filled">
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Mobile: Nav Bar */}
      <nav className="mobile-nav">
        <div>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 19C9.31371 19 12 16.3137 12 13C12 9.68629 9.31371 7 6 7C2.68629 7 0 9.68629 0 13C0 16.3137 2.68629 19 6 19Z"
              fill="#CA4361"
            />
            <path
              d="M22 19C25.3137 19 28 16.3137 28 13C28 9.68629 25.3137 7 22 7C18.6863 7 16 9.68629 16 13C16 16.3137 18.6863 19 22 19Z"
              fill="#CA4361"
            />
          </svg>
        </div>
        <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
          <svg className="menu-icon visible" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.38889 9.91668C2.15595 9.91668 2.77778 9.28241 2.77778 8.50001C2.77778 7.71761 2.15595 7.08334 1.38889 7.08334C0.621827 7.08334 0 7.71761 0 8.50001C0 9.28241 0.621827 9.91668 1.38889 9.91668Z"
              fill="black"
            />
            <path
              d="M23.6944 7.08334H6.8611C6.14006 7.08334 5.55554 7.67955 5.55554 8.41501V8.58501C5.55554 9.32047 6.14006 9.91668 6.8611 9.91668H23.6944C24.4155 9.91668 25 9.32047 25 8.58501V8.41501C25 7.67955 24.4155 7.08334 23.6944 7.08334Z"
              fill="black"
            />
            <path
              d="M23.6944 14.1667H1.30556C0.584517 14.1667 0 14.7629 0 15.4983V15.6683C0 16.4038 0.584517 17 1.30556 17H23.6944C24.4155 17 25 16.4038 25 15.6683V15.4983C25 14.7629 24.4155 14.1667 23.6944 14.1667Z"
              fill="black"
            />
            <path
              d="M23.6944 0H1.30556C0.584517 0 0 0.596207 0 1.33167V1.50167C0 2.23713 0.584517 2.83333 1.30556 2.83333H23.6944C24.4155 2.83333 25 2.23713 25 1.50167V1.33167C25 0.596207 24.4155 0 23.6944 0Z"
              fill="black"
            />
          </svg>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`menu ${isMenuOpen ? 'visible' : 'hidden'}`} id="menu">
        <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
          <svg className="close-icon" width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L13.5938 13.5938M13.5938 1L1 13.5938L13.5938 1Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="divider"></div>

        <div className="buttons" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <a href="mailto:santhoshkumar.sds24@gmail.com" className="filled">
            Get in Touch
          </a>

          <a
            href="https://wa.me/919087093403?text=Hello%20Santhosh%2C%20I%20visited%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className="outlined"
            style={{
              marginTop: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '600',
              width: '100%'
            }}
          >
            <WhatsAppIcon width={24} height={24} fill="#25D366" />
            <span style={{ marginLeft: '10px' }}>Chat on WhatsApp</span>
          </a>
        </div>

        <ul className="links">
          <li>
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
