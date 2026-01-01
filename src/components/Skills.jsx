const Skills = () => {
    const skills = [
        "Java", "Spring Boot", "Data Structures", "Algorithms",
        "SQL", "Git", "REST APIs", "Microservices", "Data Science"
    ];

    return (
        <section id="skills" className="skills-section" style={{ padding: '80px 20px' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '32px', marginBottom: '40px', color: '#333' }}>Skills</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            style={{
                                padding: '12px 24px',
                                backgroundColor: 'white',
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#ca4361',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                cursor: 'default',
                                transition: 'transform 0.2s ease',
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
