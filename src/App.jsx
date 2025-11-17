import { useState } from 'react';
import './index.css';

function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'feedback' && value.length > 200) {
            return; // Prevent updating if feedback exceeds 200 characters
        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const isFormValid = formData.name.trim() !== ''
        && formData.email.trim() !== ''
        && formData.feedback.trim() !== '';

    return (
        <div className="container">
            <h1>User Feedback Form</h1>
            <div className="form-group">
                <label htmlFor="name" className="label">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    placeholder="Enter your name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email" className="label">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    placeholder="Enter your email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="feedback" className="label">
                    Feedback (200 character limit):
                    <span className="char-count">
                        {formData.feedback.length}/200
                    </span>
                </label>
                <textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    className="textarea"
                    placeholder="Enter your feedback"
                    rows="5"
                    maxLength="200"
                ></textarea>
            </div>
            <div className="preview">
                <h2>Feedback Preview</h2>
                <p><strong>Name:</strong> {formData.name || 'No name entered'}</p>
                <p><strong>Email:</strong> {formData.email || 'No email entered'}</p>
                <p><strong>Feedback:</strong> {formData.feedback || 'No feedback entered'}</p>
            </div>
            <button
                type="submit"
                disabled={!isFormValid}
                className={`submit-btn ${isFormValid ? 'active' : ''}`}>
                Submit Feedback
            </button>
        </div>
    );
}

export default FeedbackForm;