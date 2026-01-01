const About = () => {
    return (
        <section id="about" className="about-section" style={{ padding: '80px 20px', backgroundColor: '#f9f9f9' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#333' }}>About Me</h2>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#666', marginBottom: '30px' }}>
                    I am a passionate <strong>Java Developer</strong> with 1 year of professional experience.
                    I graduated in 2024 from the prestigious <strong>Vellore Institute of Technology (VIT)</strong>, Vellore, India,
                    with a B.Tech in Computer Science and Engineering, specializing in <strong>Data Science</strong>.
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#666' }}>
                    My journey involves building robust backend systems using <strong>Spring Boot</strong> and <strong>Microservices</strong>, exploring data-driven solutions, and continuously learning new technologies.
                    I am eager to contribute to innovative projects and solve complex problems.
                </p>
            </div>
        </section>
    );
};

export default About;
