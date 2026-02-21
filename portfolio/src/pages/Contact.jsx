function Contact() {
    const handleSubmission = (e) => {
        // We still show the pop-up for a good user experience
        alert(`Thank you! Your message is being sent.`);
    };

    return (
        <section className="page-section">
            <h2 className="blue-title">Get In Touch</h2>
            {/* Replace YOUR_FORM_ID with the ID you get from formspree.io */}
            <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="contact-form"
                onSubmit={handleSubmission}
            >
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Technical Inquiry / Message" rows="6" required></textarea>
                <button type="submit" className="btn-solid">Send Message</button>
            </form>
        </section>
    );
}