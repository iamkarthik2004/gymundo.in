import React, { useState } from 'react';
import { User, Send } from 'lucide-react';

/**
 * Developer Contact Page Component
 * Renders a premium, dark-themed developer contact portal.
 * Features a developer profile card, links to GitHub/LinkedIn portfolios,
 * and a fully functioning mock contact form.
 */
export const Contact: React.FC = () => {
  // State variables for contact form fields
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Form submission handler
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') return;

    // Simulate successful form submit
    setIsSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');

    // Clear submission success alert after 4 seconds
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="contact-page" style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <div className="container">
        
        {/* ==========================================
            1. HERO SECTION
           ========================================== */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-subtitle" style={{ color: 'var(--accent-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>
            Get In Touch
          </span>
          <h1 className="section-title" style={{ fontSize: '48px', fontWeight: '800', marginTop: '10px', marginBottom: '16px' }}>
            Connect with the Developer
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '16px', lineHeight: '1.6' }}>
            Gymundo is built and maintained with passion. Reach out for collaboration, queries, or feedback.
          </p>
        </div>

        {/* Grid layout splitting page into Developer Info and Contact Form */}
        <div className="grid-2" style={{ gap: '40px', alignItems: 'start' }}>
          
          {/* ==========================================
              LEFT COLUMN: DEVELOPER CARDS & PORTFOLIOS
             ========================================== */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Developer Profile Card */}
            <div className="glass-panel" style={{ padding: '32px', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(229, 9, 20, 0.1)',
                  border: '2px solid var(--accent-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-color)'
                }}>
                  <User size={32} />
                </div>
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: 'var(--text-primary)' }}>
                    Karthik Krishnan
                  </h2>
                  <p style={{ fontSize: '14px', color: 'var(--accent-color)', margin: '4px 0 0 0', fontWeight: '600' }}>
                    Frontend Developer & CSE Student
                  </p>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                Gymundo is a personal project created to help users discover gyms across Kerala through district-wise search, maps, ratings, and contact information.
              </p>
            </div>

            {/* GitHub Project Card */}
            <div className="glass-panel" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-color)' }}>
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>Source Code</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>
                  View the complete source code of Gymundo on GitHub.
                </p>
              </div>
              <a 
                href="https://github.com/iamkarthik2004/gymundo.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                style={{ whiteSpace: 'nowrap' }}
              >
                View Repository
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-panel" style={{ padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-color)' }}>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>Connect on LinkedIn</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>
                  Connect with the developer and view projects, achievements, and professional experience.
                </p>
              </div>
              <a 
                href="https://www.linkedin.com/in/karthikkk708/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ whiteSpace: 'nowrap' }}
              >
                Visit LinkedIn
              </a>
            </div>

          </div>

          {/* ==========================================
              RIGHT COLUMN: INTERACTIVE CONTACT FORM
             ========================================== */}
          <div className="glass-panel" style={{ padding: '32px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '800', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '24px', color: 'var(--text-primary)' }}>
              Send Message
            </h2>
            
            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: '500' }}>Your Name *</label>
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="Karthik Krishnan" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: '500' }}>Email Address *</label>
                <input 
                  type="email" 
                  className="input-field" 
                  placeholder="karthik@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: '500' }}>Your Message *</label>
                <textarea 
                  className="input-field" 
                  placeholder="Hi! I wanted to connect regarding..." 
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  style={{ resize: 'vertical', width: '100%' }}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start', padding: '14px 36px', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>

              {/* Success Banner */}
              {isSubmitted && (
                <div style={{ color: '#10B981', fontSize: '14px', fontWeight: '600', marginTop: '10px', padding: '12px', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                  ✓ Message sent successfully! I will get back to you as soon as possible.
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
