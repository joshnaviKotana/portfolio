import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <section className="hero-view">
            <div className="hero-main">
                <p className="welcome-label">Welcome</p>
                <h1 className="hero-title">Hi, I am <span className="highlight-blue">Joshnavi</span></h1>
                <p className="hero-tagline">Future Full-Stack Developer & Tech Innovator</p>

                <div className="hero-actions">
                    <button className="btn-solid" onClick={() => navigate('/projects')}>View My Work</button>
                    <button className="btn-ghost" onClick={() => navigate('/contact')}>Get In Touch</button>
                </div>
            </div>

            <div className="feature-grid">
                <div className="feature-item">
                    <span className="icon">🚀</span>
                    <h3>Fast UI</h3>
                    <p>Optimized for speed and transitions.</p>
                </div>
                <div className="feature-item">
                    <span className="icon">💻</span>
                    <h3>Clean Code</h3>
                    <p>Standardized React architecture.</p>
                </div>
                <div className="feature-item">
                    <span className="icon">📱</span>
                    <h3>Responsive</h3>
                    <p>Perfect on any screen size.</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;