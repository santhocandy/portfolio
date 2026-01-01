const Projects = () => {
    const projects = [
        {
            title: "Microservices Banking API",
            description: "A secure, scalable banking backend built with Java Spring Boot, handling transactions, user auth (JWT), and account management.",
            tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"]
        },
        {
            title: "Predictive Analytics Dashboard",
            description: "An interactive dashboard visualizing large-scale datasets with Python and React, implementing machine learning models for trend forecasting.",
            tags: ["Python", "Pandas", "React", "Scikit-run"]
        },
        {
            title: "Employee Management System",
            description: "Full-stack application for managing employee records, attendance, and payroll with a modern React frontend and RESTful API.",
            tags: ["React", "Spring Boot", "MySQL", "Material UI"]
        }
    ];

    return (
        <section id="projects" className="projects-section" style={{ padding: '80px 20px', backgroundColor: '#f9f9f9' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '32px', marginBottom: '40px', color: '#333', textAlign: 'center' }}>Projects</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'white',
                                padding: '30px',
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#333' }}>{project.title}</h3>
                            <p style={{ color: '#666', lineHeight: '1.6', mb: '20px' }}>{project.description}</p>
                            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} style={{ fontSize: '12px', padding: '4px 10px', backgroundColor: '#f0f0f0', borderRadius: '4px', color: '#555' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
