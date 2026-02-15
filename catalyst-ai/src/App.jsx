import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    BrainCircuit,
    Zap,
    BarChart3,
    Menu,
    X,
    Mail,
    Phone,
    Database,
    Search,
    Cpu,
    Share2,
    Repeat,
    Layers
} from 'lucide-react';
import './index.css';

const CatalystAI = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactModalOpen, setContactModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const stagger = {
        visible: {
            transition: { staggerChildren: 0.15 }
        }
    };

    // Product Steps Data
    const productSteps = [
        {
            id: "01",
            title: "Product Intake & Identity Vault",
            description: "We don't just store images; we extract Visual DNA. Your brand's style, features, and character are locked in a vault to ensure total consistency across all future AI-generated content.",
            icon: <Database size={48} />,
            accent: "blue"
        },
        {
            id: "02",
            title: "Market Scouting",
            description: "Our system 'hunts' for winning content across YouTube, Instagram, and Blogs using brave Search & Tavily. We pull transcripts, captions, and audience sentiment to see what works.",
            icon: <Search size={48} />,
            accent: "purple"
        },
        {
            id: "03",
            title: "Deconstruction & Gap Analysis",
            description: "Using Azure GPT-4o, we deconstruct competitors to find their 'winning formula'. Then, we identify the 'Gap'—audience questions and complaints that competitors ignored.",
            icon: <Layers size={48} />,
            accent: "indigo"
        },
        {
            id: "04",
            title: "Viral 'Content Gravity' Prediction",
            description: "Before posting, our GNN (Graph Neural Network) predicts viral potential. It scores hooks, urgency, and sentiment features to forecast engagement in specific regions.",
            icon: <Cpu size={48} />,
            accent: "cyan"
        },
        {
            id: "05",
            title: "Superior Content Generation",
            description: "Structuring the Competitor's Logic + Audience Gap + Your Product DNA. We generate Scripts, Reels (Kling/Runway), and High-authority educational posts.",
            icon: <Zap size={48} />,
            accent: "yellow"
        },
        {
            id: "06",
            title: "Loop Closure & Analytics",
            description: "Real assets are deployed. Performance data flows back into the GNN, allowing the model to learn and adapt strategies for your specific niche over time.",
            icon: <Repeat size={48} />,
            accent: "green"
        }
    ];

    return (
        <div className="app-container">
            {/* Navigation */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container nav-content">
                    <a href="#" className="logo">CATALYST AI</a>

                    <div className="nav-links desktop-only">
                        <a href="#engine">The Engine</a>
                        <a href="#services">Services</a>
                        <button
                            onClick={() => setContactModalOpen(true)}
                            className="btn btn-primary"
                        >
                            Request Demo
                        </button>
                    </div>

                    <button className="menu-toggle mobile-only" onClick={() => setIsMenuOpen(true)}>
                        <Menu size={24} color="white" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 30 }}
                        className="mobile-menu"
                    >
                        <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
                            <X size={32} />
                        </button>
                        <div className="mobile-links">
                            <a href="#engine" onClick={() => setIsMenuOpen(false)}>The Engine</a>
                            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                            <button
                                onClick={() => { setIsMenuOpen(false); setContactModalOpen(true); }}
                                className="mobile-cta"
                            >
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="hero-text-wrapper"
                    >
                        <motion.h1 variants={fadeIn} className="hero-title">
                            Engineering <span className="gradient-text">Virality</span> with Mathematical Precision.
                        </motion.h1>
                        <motion.p variants={fadeIn} className="hero-subtitle">
                            We don't guess. We use Graph Neural Networks and Competitor Deconstruction to build content that mathematically has to win.
                        </motion.p>
                        <motion.div variants={fadeIn} className="hero-actions">
                            <button
                                onClick={() => setContactModalOpen(true)}
                                className="btn btn-primary btn-large group"
                            >
                                Deploy Catalyst <ArrowRight className="icon-right group-hover" size={20} />
                            </button>
                            <button
                                onClick={() => window.location.href = "tel:9325341766"}
                                className="btn btn-outline btn-large"
                            >
                                <Phone className="icon-left" size={20} /> Talk to an Engineer
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Product Engine Section */}
            <section id="engine" className="product-section">
                <div className="container">
                    <div className="section-header">
                        <h2>The Content Gravity System</h2>
                        <p>
                            Our in-house 6-step engine that turns raw products into market-dominating content campaigns.
                        </p>
                    </div>

                    <div className="product-steps">
                        {productSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className="product-item"
                            >
                                <div className="product-text">
                                    <span className={`product-step-number accent-${step.accent}`}>STEP {step.id}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>

                                <div className={`product-visual gradient-${step.accent}`}>
                                    <div className="product-icon-wrapper">
                                        {step.icon}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section id="services" className="features">
                <div className="container mx-auto px-6">
                    <div className="section-header">
                        <h2>Why Catalyst?</h2>
                        <p>We don't just make content. We engineer attention.</p>
                    </div>
                    <div className="features-grid">
                        {[
                            {
                                icon: <BrainCircuit size={32} />,
                                title: "Deep Tech Integration",
                                desc: "From GNNs to LLMs, we use the entire AI stack to ensure your content outperforms mathematically."
                            },
                            {
                                icon: <Share2 size={32} />,
                                title: "Viral Engineering",
                                desc: "We analyze millions of data points to understand exactly what triggers the algorithm in your niche."
                            },
                            {
                                icon: <BarChart3 size={32} />,
                                title: "Predictive Analytics",
                                desc: "Stop guessing. Our models forecast the performance of your campaign before we even launch it."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="feature-card"
                            >
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="cta-bg"></div>
                <div className="container cta-content">
                    <h2>Ready to Dominate?</h2>
                    <p>
                        Join the detailed waitlist for the Content Gravity Engine.
                    </p>
                    <button
                        onClick={() => setContactModalOpen(true)}
                        className="btn btn-primary btn-large"
                    >
                        Start Your Transformation
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-logo">CATALYST AI</div>
                    <div className="copyright">© 2026 Catalyst AI. All rights reserved.</div>
                    <div className="footer-links">
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="mailto:barshilerohit1785@gmail.com">Email</a>
                    </div>
                </div>
            </footer>

            {/* Contact Modal */}
            <AnimatePresence>
                {isContactModalOpen && (
                    <div className="modal-overlay" onClick={() => setContactModalOpen(false)}>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setContactModalOpen(false)}
                                className="modal-close"
                            >
                                <X size={24} />
                            </button>

                            <div className="modal-header">
                                <h2>Get in Touch</h2>
                                <p>Discuss custom AI solutions with our engineers.</p>
                            </div>

                            <div className="modal-actions">
                                <button onClick={() => window.location.href = "mailto:barshilerohit1785@gmail.com"} className="contact-option">
                                    <Mail size={24} />
                                    <div className="contact-details">
                                        <span>Email Us</span>
                                        <strong>barshilerohit1785@gmail.com</strong>
                                    </div>
                                </button>

                                <button onClick={() => window.location.href = "tel:9325341766"} className="contact-option">
                                    <Phone size={24} />
                                    <div className="contact-details">
                                        <span>Call Us</span>
                                        <strong>+91 9325341766</strong>
                                    </div>
                                </button>
                            </div>

                            <div className="modal-footer">
                                Catalyst Agents | Mumbai, India
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CatalystAI;
