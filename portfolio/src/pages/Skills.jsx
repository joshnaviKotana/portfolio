function Skills() {
    const technicalSkills = [
        { name: "Development", items: ["React", "HTML", "CSS", "Mobile Apps"], color: "#38bdf8" },
        { name: "CS Core", items: ["DSA", "OS", "CN", "COI"], color: "#10b981" },
        { name: "Languages", items: ["C", "Python", "Java", "JavaScript"], color: "#f59e0b" }
    ];

    return (
        <section className="page-section skills-view">
            <h2 className="section-title">Technical Arsenal</h2>
            <div className="skills-container">
                {technicalSkills.map((skill, i) => (
                    <div key={i} className="skill-box" style={{ borderTop: `4px solid ${skill.color}` }}>
                        <h3 style={{ color: skill.color }}>{skill.name}</h3>
                        <ul>{skill.items.map(item => <li key={item}>{item}</li>)}</ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Skills;