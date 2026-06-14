import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    BookOpen,
    BrainCircuit,
    Check,
    ChevronRight,
    CheckCircle,
    Cloud,
    Database,
    FileCheck2,
    FlaskConical,
    Globe2,
    HeartHandshake,
    Languages,
    LockKeyhole,
    Mail,
    Menu,
    HelpCircle,
    Mic2,
    MonitorSmartphone,
    Phone,
    Quote,
    School,
    ShieldCheck,
    Sparkles,
    Target,
    Users,
    WifiOff,
    X,
} from 'lucide-react';
import './index.css';

const CONTACT_EMAIL = 'barshilerohit1785@gmail.com';
const CONTACT_PHONE = '+91 93253 41766';
const CONTACT_PHONE_LINK = 'tel:+919325341766';

const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'For students', href: '#students' },
    { label: 'For teachers', href: '#teachers' },
    { label: 'Trust', href: '#trust' },
    { label: 'Roadmap', href: '#roadmap' },
];

const studentFeatures = [
    {
        icon: BookOpen,
        title: 'Curriculum tutor',
        text: 'Answers from approved Maharashtra State Board material, with chapter references and an honest “I do not know” when evidence is missing.',
        tag: 'Grounded AI',
    },
    {
        icon: FileCheck2,
        title: 'Homework and tests',
        text: 'Submit by text, photo, or voice. Students receive hints, while teachers remain in control of grading and published feedback.',
        tag: 'Teacher approved',
    },
    {
        icon: FlaskConical,
        title: 'Gurukul Labs',
        text: 'Chapter-linked practical challenges use affordable household materials to turn lessons into evidence, reflection, and lab badges.',
        tag: 'Learn by doing',
    },
    {
        icon: BrainCircuit,
        title: 'AI literacy',
        text: 'Short weekly lessons teach students how AI works, where it fails, and how to verify an answer instead of accepting it blindly.',
        tag: 'Critical thinking',
    },
];

const teacherFeatures = [
    {
        icon: Mic2,
        title: 'Voice-first Marathi',
        text: 'Attendance, notices, and notes can be spoken naturally. Common daily actions are designed to stay within two taps.',
    },
    {
        icon: HelpCircle,
        title: 'Explain it differently',
        text: 'Get analogies, local examples, drawing ideas, question-first approaches, and common misconceptions for a difficult concept.',
    },
    {
        icon: Target,
        title: 'Weekly class signals',
        text: 'Plain-language summaries highlight concepts that need revision, students who may need support, and one next action.',
    },
    {
        icon: HeartHandshake,
        title: 'Parent and PTM support',
        text: 'Draft parent updates and student preparation cards save time, with every message reviewed by the teacher before sending.',
    },
];

const trustPrinciples = [
    {
        icon: Database,
        title: 'Evidence before eloquence',
        text: 'Curriculum answers are designed to retrieve approved sources first and show the relevant chapter context.',
    },
    {
        icon: Users,
        title: 'Adults stay accountable',
        text: 'AI can suggest, summarize, and pre-grade. Teachers approve consequential content before it reaches a student or parent.',
    },
    {
        icon: ShieldCheck,
        title: 'Child data is not ad inventory',
        text: 'No targeted advertising, no sale of student data, and no engagement loops designed to keep children online.',
    },
    {
        icon: LockKeyhole,
        title: 'Privacy by design',
        text: 'Data minimization, role-based access, clear retention, auditable actions, and India-region deployment guide the build.',
    },
];

const roadmap = [
    {
        phase: '01',
        title: 'School pilot',
        scale: '5–10 schools',
        text: 'Validate Marathi voice flows, offline attendance, curriculum grounding, teacher onboarding, and child-safety controls.',
    },
    {
        phase: '02',
        title: 'District learning loop',
        scale: 'Up to 50K users',
        text: 'Introduce Gurukul Explore, parent updates, observability, support workflows, and independent security review.',
    },
    {
        phase: '03',
        title: 'Statewide readiness',
        scale: 'Target: 3M learners',
        text: 'Load-test the full platform, expand content coverage, complete government-readiness reviews, and roll out district by district.',
    },
];

const policyPages = {
    '/privacy': {
        eyebrow: 'Trust centre',
        title: 'Privacy notice',
        intro: 'How Gurukul AI plans to handle personal data across its public website, product development, and future school pilots.',
        updated: '14 June 2026',
        sections: [
            {
                title: '1. Who we are',
                body: [
                    'Gurukul AI is an education technology product being developed by Neural Knights in Maharashtra, India. The product is currently in development and pilot planning.',
                    `Questions about privacy or data use can be sent to ${CONTACT_EMAIL}. This address also serves as the current privacy and grievance contact while formal pilot operations are being established.`,
                ],
            },
            {
                title: '2. Scope and current website data',
                body: [
                    'This notice covers this public website and the planned Gurukul AI student, teacher, and administrator experiences. The current marketing website does not use analytics, advertising trackers, account creation, or contact forms. If you email or call us, we receive the information you choose to provide through that channel.',
                    'Before any school pilot begins, participating schools and families will receive a pilot-specific notice describing the exact data fields, purposes, processors, retention periods, and consent flow used in that deployment.',
                ],
            },
            {
                title: '3. Data a product pilot may process',
                body: [
                    'Depending on the approved pilot scope, data may include account and roster details; school, class, and role information; assignments, test responses, attendance, learning activity, and teacher feedback; text, image, or voice submissions; parent contact details used for approved notices; and device, security, and diagnostic logs.',
                    'We plan to collect only data needed for a defined educational, safety, support, or legal purpose. Optional features will be identified as optional, and sensitive permissions such as microphone or camera access will be requested at the point of use.',
                ],
            },
            {
                title: '4. Children and consent',
                body: [
                    'Gurukul AI is designed for students in Standards 9 and 10, so child privacy is a core product requirement. A production pilot will use school authorization and an age-appropriate, verifiable parent or lawful guardian consent process where required. Notices will be written in clear language and made available in locally relevant languages.',
                    'We do not plan to serve targeted advertisements, sell student data, create commercial advertising profiles, or use dark patterns that encourage excessive use. A parent, guardian, or authorized school contact will have a route to request access, correction, or deletion subject to applicable law and school record obligations.',
                ],
            },
            {
                title: '5. AI and service providers',
                body: [
                    'The planned product may use contracted cloud infrastructure, AI model, search, messaging, monitoring, and speech-processing providers. Providers will be reviewed for security, privacy, data-use terms, regional availability, and contractual controls before production use.',
                    'Our production configuration is intended to prevent personal student content from being used to train general-purpose public models. A current subprocessors list and any necessary cross-border processing details will be published before a live pilot.',
                ],
            },
            {
                title: '6. Storage, retention, and security',
                body: [
                    'The reference architecture prioritizes India-region storage for production educational records. Data will be encrypted in transit and at rest, access will be role-based, and sensitive actions will be logged. Retention periods will be tied to educational, contractual, security, and legal needs rather than keeping data indefinitely.',
                    'Covered security logs are planned to be retained in Indian jurisdiction for at least the period required by applicable CERT-In directions. These are design commitments, not a claim that the product has completed certification or an independent audit.',
                ],
            },
            {
                title: '7. Your choices and contact',
                body: [
                    `To ask a question, report a concern, or request action regarding personal data, email ${CONTACT_EMAIL}. We will verify requests as appropriate and explain any lawful reason a school or service provider must retain part of a record.`,
                    'This notice will be updated as the product, legal entity, vendor list, and pilot contracts are finalized. Material changes will be clearly dated and communicated through the relevant school or account channel.',
                ],
            },
        ],
    },
    '/terms': {
        eyebrow: 'Trust centre',
        title: 'Website and pilot terms',
        intro: 'Plain-language terms for this public website and the planned Gurukul AI pilot experience.',
        updated: '14 June 2026',
        sections: [
            {
                title: '1. Current status',
                body: [
                    'Gurukul AI is under development. Information on this website describes the product plan, intended safeguards, and target roadmap. It is not a promise that every feature is currently available, certified, or deployed at statewide scale.',
                ],
            },
            {
                title: '2. Educational use',
                body: [
                    'Gurukul AI is intended to support learning and teacher workflows, not replace teachers, school judgment, examinations, or professional advice. AI outputs can be incomplete or wrong and should be checked against approved curriculum material and reviewed by an educator where the result affects a student.',
                ],
            },
            {
                title: '3. Acceptable use',
                body: [
                    'Users must not attempt to harm other people, access accounts or data without authorization, disrupt the service, upload unlawful or abusive material, bypass safeguards, or use the product to cheat or impersonate another person. Schools remain responsible for assigning authorized users and handling local disciplinary or academic policies.',
                ],
            },
            {
                title: '4. Content and intellectual property',
                body: [
                    'Maharashtra State Board and third-party learning materials remain the property of their respective owners and will be used only with an appropriate license or other lawful basis. Gurukul AI branding, original software, and original product materials belong to Neural Knights or its licensors. Student and teacher submissions remain subject to the rights and permissions set out in the applicable pilot agreement.',
                ],
            },
            {
                title: '5. External resources',
                body: [
                    'Gurukul Explore is planned to recommend free external resources. External sites have their own terms, privacy practices, availability, and content. Recommendations will be screened for relevance and age appropriateness, but users and supervising adults should still review third-party resources.',
                ],
            },
            {
                title: '6. Pilot-specific agreements',
                body: [
                    'A live school pilot will operate under a separate written agreement covering service levels, data roles, support, security, content review, authorized users, fees if any, and exit or deletion procedures. If those terms conflict with this page, the signed pilot agreement controls for that pilot.',
                ],
            },
            {
                title: '7. Contact',
                body: [
                    `Questions about these terms can be sent to ${CONTACT_EMAIL}. These terms may change as the product and pilot model mature; the current revision date will always be shown above.`,
                ],
            },
        ],
    },
    '/responsible-ai': {
        eyebrow: 'Trust centre',
        title: 'Responsible AI commitments',
        intro: 'The operating principles intended to keep Gurukul AI useful, honest, age-appropriate, and accountable.',
        updated: '14 June 2026',
        sections: [
            {
                title: 'Ground answers in approved material',
                body: [
                    'Curriculum tutoring is designed around retrieval from approved textbook content, chapter references, and confidence-aware responses. When evidence is missing, the expected behavior is to say so rather than invent an answer.',
                ],
            },
            {
                title: 'Keep teachers in control',
                body: [
                    'Teachers review AI-generated tests, grades, parent messages, and consequential feedback before publication. Automation should reduce repetitive work without transferring professional accountability to a model.',
                ],
            },
            {
                title: 'Help students think, not merely finish',
                body: [
                    'Homework assistance should prefer hints, questions, and explanations over completed answers. The AI literacy track explicitly teaches verification, limitations, source checking, and the difference between fluent language and reliable knowledge.',
                ],
            },
            {
                title: 'Design for children',
                body: [
                    'Age appropriateness, privacy, bounded interactions, clear reporting routes, and human escalation are product requirements. Gurukul AI will not be designed around targeted advertising, compulsive engagement, or emotional dependency.',
                ],
            },
            {
                title: 'Test across languages and contexts',
                body: [
                    'Quality evaluation must cover Marathi, Hindi, and English, including rural vocabulary, speech variation, low-connectivity behavior, accessibility, and subject-specific accuracy. Known limitations will be documented rather than hidden.',
                ],
            },
            {
                title: 'Measure and respond',
                body: [
                    'Before broader rollout, the team plans red-team testing, curriculum review, incident reporting, feedback analysis, model and prompt version tracking, and repeatable evaluations for hallucination, unsafe content, bias, and data leakage. Significant issues should be contained, investigated, and communicated to affected partners.',
                ],
            },
        ],
    },
    '/security': {
        eyebrow: 'Trust centre',
        title: 'Security overview',
        intro: 'The reference controls planned for Gurukul AI pilots and statewide-scale architecture.',
        updated: '14 June 2026',
        notice: 'Status: architecture and control roadmap. Independent certification and production audit are not yet claimed.',
        sections: [
            {
                title: 'Architecture and data protection',
                body: [
                    'The planned service uses separated environments, encryption in transit and at rest, managed secrets, least-privilege access, protected backups, and India-region deployment for educational records. The mobile experience is designed to cache only the minimum offline data needed for approved tasks.',
                ],
            },
            {
                title: 'Identity and authorization',
                body: [
                    'Role-based access will separate students, parents, teachers, school administrators, district users, and internal operators. Administrative access is planned to require multi-factor authentication, strong session controls, and periodic access review. District reporting is intended to be aggregated rather than expose individual student records.',
                ],
            },
            {
                title: 'Logging and incident response',
                body: [
                    'Sensitive access and administrative actions will be auditable. Covered ICT logs are planned for secure retention in Indian jurisdiction for the applicable CERT-In period. The incident process will include triage, containment, evidence preservation, partner communication, and reporting to authorities within legally required timelines where applicable.',
                ],
            },
            {
                title: 'Secure development',
                body: [
                    'The engineering roadmap includes peer review, dependency scanning, secret detection, automated testing, environment separation, vulnerability management, rate limiting, abuse monitoring, and pre-release security testing. High-risk releases will require explicit approval and rollback plans.',
                ],
            },
            {
                title: 'Independent assurance',
                body: [
                    'The product plan includes external security assessment before pilot expansion and further reviews for government hosting, accessibility, and data-protection readiness. Until those reviews are complete, Gurukul AI will not describe itself as CERT-In certified, GIGW certified, DPDP compliant, or otherwise independently certified.',
                ],
            },
            {
                title: 'Report a concern',
                body: [
                    `To report a suspected vulnerability or security incident, email ${CONTACT_EMAIL} with “Security” in the subject. Please do not include student personal data or exploit other accounts while investigating an issue.`,
                ],
            },
        ],
    },
    '/accessibility': {
        eyebrow: 'Trust centre',
        title: 'Accessibility statement',
        intro: 'Our commitment to a product that remains understandable and operable across devices, abilities, languages, and network conditions.',
        updated: '14 June 2026',
        sections: [
            {
                title: 'Our target',
                body: [
                    'Gurukul AI is being designed toward WCAG 2.1 Level AA and relevant GIGW 3.0 accessibility guidance. Alignment is a development target, not a claim of completed external certification.',
                ],
            },
            {
                title: 'Design practices',
                body: [
                    'The interface prioritizes keyboard access, visible focus, semantic structure, readable type, sufficient contrast, alternatives to color-only meaning, reduced-motion support, large touch targets, captions or transcripts for learning media, and clear error messages.',
                    'Marathi-first teacher experiences, plain language, voice input, icon-plus-text confirmations, offline workflows, and support for entry-level Android devices are treated as inclusion requirements rather than optional enhancements.',
                ],
            },
            {
                title: 'Feedback',
                body: [
                    `If you encounter an accessibility barrier on this website or in a future pilot, email ${CONTACT_EMAIL}. Please include the page or task, device, browser, and assistive technology if you are comfortable sharing them.`,
                ],
            },
        ],
    },
};

function Brand({ compact = false }) {
    return (
        <a className={`brand ${compact ? 'brand--compact' : ''}`} href="/" aria-label="Gurukul AI home">
            <span className="brand__mark" aria-hidden="true">
                <span>गु</span>
            </span>
            <span className="brand__copy">
                <strong>Gurukul AI</strong>
                {!compact && <small>by Neural Knights</small>}
            </span>
        </a>
    );
}

function Header({ policy = false }) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const close = () => setMenuOpen(false);
        window.addEventListener('resize', close);
        return () => window.removeEventListener('resize', close);
    }, []);

    return (
        <header className="site-header">
            <div className="shell nav-wrap">
                <Brand />
                {!policy && (
                    <>
                        <nav className="desktop-nav" aria-label="Primary navigation">
                            {navItems.map((item) => (
                                <a key={item.href} href={item.href}>{item.label}</a>
                            ))}
                        </nav>
                        <a className="button button--small button--ink desktop-cta" href={`mailto:${CONTACT_EMAIL}?subject=Gurukul%20AI%20pilot%20conversation`}>
                            Discuss a pilot <ArrowRight size={16} />
                        </a>
                        <button
                            className="menu-button"
                            type="button"
                            onClick={() => setMenuOpen((value) => !value)}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-navigation"
                            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
                        >
                            {menuOpen ? <X /> : <Menu />}
                        </button>
                    </>
                )}
                {policy && <a className="back-link" href="/"><ArrowRight size={16} /> Back to product</a>}
            </div>
            <AnimatePresence>
                {menuOpen && !policy && (
                    <motion.nav
                        id="mobile-navigation"
                        className="mobile-nav"
                        aria-label="Mobile navigation"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="shell">
                            {navItems.map((item) => (
                                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                                    {item.label} <ChevronRight size={18} />
                                </a>
                            ))}
                            <a className="button button--ink" href={`mailto:${CONTACT_EMAIL}?subject=Gurukul%20AI%20pilot%20conversation`}>
                                Discuss a pilot <ArrowRight size={17} />
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}

function Footer() {
    return (
        <footer className="site-footer">
            <div className="shell footer-grid">
                <div className="footer-intro">
                    <Brand />
                    <p>Building a Marathi-first AI learning companion for Maharashtra’s students and teachers.</p>
                    <div className="footer-contact">
                        <a href={`mailto:${CONTACT_EMAIL}`}><Mail size={16} /> {CONTACT_EMAIL}</a>
                        <a href={CONTACT_PHONE_LINK}><Phone size={16} /> {CONTACT_PHONE}</a>
                    </div>
                </div>
                <div className="footer-links">
                    <div>
                        <strong>Product</strong>
                        <a href="/#students">For students</a>
                        <a href="/#teachers">For teachers</a>
                        <a href="/#roadmap">Roadmap</a>
                    </div>
                    <div>
                        <strong>Trust centre</strong>
                        <a href="/privacy">Privacy</a>
                        <a href="/responsible-ai">Responsible AI</a>
                        <a href="/security">Security</a>
                        <a href="/accessibility">Accessibility</a>
                        <a href="/terms">Terms</a>
                    </div>
                </div>
            </div>
            <div className="shell footer-bottom">
                <span>© 2026 Neural Knights. Gurukul AI is an independent software product initiative.</span>
                <span>Maharashtra, India</span>
            </div>
        </footer>
    );
}

function HeroProductCard() {
    return (
        <motion.div
            className="hero-product-card"
            initial={{ y: 24, rotate: 1 }}
            animate={{ y: 0, rotate: -1.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
        >
            <div className="mockup-topbar">
                <div className="mini-brand"><span>गु</span> Gurukul AI</div>
                <div className="signal"><span></span><span></span><span></span></div>
            </div>
            <div className="mockup-greeting">
                <div>
                    <small>नमस्कार, सायली</small>
                    <strong>आज काय शिकायचं?</strong>
                </div>
                <div className="avatar">स</div>
            </div>
            <div className="mockup-question">
                <div className="question-icon"><Sparkles size={18} /></div>
                <div>
                    <small>Ask Gurukul</small>
                    <p>Why does the sky look blue?</p>
                </div>
                <Mic2 size={19} />
            </div>
            <div className="mockup-answer">
                <div className="answer-label"><BookOpen size={15} /> Science · Chapter 11</div>
                <p>Sunlight contains many colours. The tiny particles in our atmosphere scatter blue light more strongly...</p>
                <button type="button">मराठीत समजावून सांगा <ArrowRight size={14} /></button>
            </div>
            <div className="mockup-grid">
                <div className="mockup-tile mockup-tile--green"><FlaskConical /><span>आजचा प्रयोग</span><small>Simple circuit</small></div>
                <div className="mockup-tile mockup-tile--orange"><Target /><span>माझी प्रगती</span><small>4 tasks done</small></div>
            </div>
            <div className="offline-pill"><WifiOff size={14} /> Core lessons available offline</div>
        </motion.div>
    );
}

function SectionHeading({ eyebrow, title, copy, align = 'left' }) {
    return (
        <div className={`section-heading section-heading--${align}`}>
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            {copy && <p>{copy}</p>}
        </div>
    );
}

function HomePage() {
    return (
        <div className="site-page">
            <a className="skip-link" href="#main-content">Skip to main content</a>
            <Header />
            <main id="main-content">
                <section className="hero">
                    <div className="hero-orbit hero-orbit--one" aria-hidden="true"></div>
                    <div className="hero-orbit hero-orbit--two" aria-hidden="true"></div>
                    <div className="shell hero-grid">
                        <motion.div
                            className="hero-copy"
                            initial={{ y: 18 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="status-pill"><span></span> In development · Maharashtra pilot planning</div>
                            <h1>Learning that speaks <em>your language.</em></h1>
                            <p className="hero-lead">Gurukul AI is a Marathi-first learning companion for Standards 9 and 10, built for teachers, students, entry-level Android phones, and the internet Maharashtra actually has.</p>
                            <div className="hero-actions">
                                <a className="button button--ink" href="#product">Explore the product <ArrowRight size={18} /></a>
                                <a className="button button--text" href="/responsible-ai">How we build responsibly <ChevronRight size={17} /></a>
                            </div>
                            <div className="hero-proof" aria-label="Product principles">
                                <span><CheckCircle size={17} /> Marathi, Hindi, English</span>
                                <span><CheckCircle size={17} /> Offline core workflows</span>
                                <span><CheckCircle size={17} /> Teacher in control</span>
                            </div>
                        </motion.div>
                        <div className="hero-visual" aria-label="Illustration of the Gurukul AI student interface">
                            <div className="hero-note hero-note--top"><Languages size={17} /><span><strong>Voice first</strong>Marathi by default</span></div>
                            <HeroProductCard />
                            <div className="hero-note hero-note--bottom"><ShieldCheck size={17} /><span><strong>Grounded answers</strong>Textbook references</span></div>
                        </div>
                    </div>
                    <div className="shell stat-strip">
                        <div><strong>16</strong><span>capabilities in the product blueprint</span></div>
                        <div><strong>3</strong><span>languages planned from day one</span></div>
                        <div><strong>2G</strong><span>non-video workflows designed for low bandwidth</span></div>
                        <div><strong>3M</strong><span>learner statewide target architecture</span></div>
                    </div>
                </section>

                <section className="belief-section section" id="product">
                    <div className="shell belief-grid">
                        <div>
                            <span className="eyebrow">Why Gurukul</span>
                            <h2>Not another digital textbook.</h2>
                        </div>
                        <div className="belief-copy">
                            <p>Technology should adapt to a village classroom, not ask a village classroom to adapt to technology.</p>
                            <p>That means voice instead of typing, plain Marathi instead of product jargon, offline actions instead of loading screens, and an AI that knows when to step back and let a teacher decide.</p>
                        </div>
                    </div>
                    <div className="shell principle-grid">
                        <article><Mic2 /><strong>Voice first</strong><span>Speak attendance, notes, questions, and notices.</span></article>
                        <article><MonitorSmartphone /><strong>₹5,000 phone ready</strong><span>Designed for entry-level Android and small screens.</span></article>
                        <article><WifiOff /><strong>Offline core</strong><span>Learn, assign, and mark attendance through weak connectivity.</span></article>
                        <article><Languages /><strong>Marathi by default</strong><span>Simple language with Hindi and English support.</span></article>
                    </div>
                </section>

                <section className="student-section section" id="students">
                    <div className="shell">
                        <SectionHeading
                            eyebrow="For students"
                            title="A patient tutor. A wider world."
                            copy="School learning stays grounded in approved curriculum. Curiosity gets a separate, carefully guided place to grow."
                        />
                        <div className="feature-grid">
                            {studentFeatures.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.article
                                        className="feature-card"
                                        key={feature.title}
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true, amount: 0.25 }}
                                        transition={{ delay: index * 0.08 }}
                                    >
                                        <div className="feature-icon"><Icon /></div>
                                        <span className="feature-tag">{feature.tag}</span>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.text}</p>
                                    </motion.article>
                                );
                            })}
                        </div>

                        <div className="explore-panel">
                            <div className="explore-copy">
                                <span className="eyebrow eyebrow--light">Signature experience</span>
                                <h3>Gurukul Explore</h3>
                                <p>A student can ask to learn piano, French, sketching, cooking, electronics, or basic coding. Gurukul builds a guided, age-appropriate learning path from quality free resources.</p>
                                <div className="explore-rule"><CheckCircle /> Explore unlocks after weekly schoolwork is completed.</div>
                            </div>
                            <div className="learning-path" aria-label="Example Gurukul Explore learning plan">
                                <div className="path-header"><span><Globe2 /> My learning path</span><small>Basic coding · 6 weeks</small></div>
                                {['Variables and simple input', 'Loops through mini games', 'Functions and reusable ideas', 'Build your first program'].map((item, index) => (
                                    <div className={`path-row ${index === 0 ? 'path-row--active' : ''}`} key={item}>
                                        <span>{index + 1}</span>
                                        <p>{item}</p>
                                        {index === 0 ? <Check /> : <div className="path-lock"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="teacher-section section" id="teachers">
                    <div className="shell teacher-grid">
                        <div className="teacher-story">
                            <SectionHeading
                                eyebrow="For teachers"
                                title="Less paperwork. More teaching."
                                copy="The teacher experience is designed around rural classrooms, limited time, and no assumption of technical confidence."
                            />
                            <div className="teacher-quote">
                                <Quote />
                                <p>“18 students found acceleration difficult this week. Explain it once more with a bicycle example.”</p>
                                <span>Example weekly class signal · shown in plain Marathi in product</span>
                            </div>
                        </div>
                        <div className="teacher-feature-list">
                            {teacherFeatures.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <article key={feature.title}>
                                        <div><Icon /></div>
                                        <span><strong>{feature.title}</strong><p>{feature.text}</p></span>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="trust-section section" id="trust">
                    <div className="shell">
                        <SectionHeading
                            eyebrow="Responsible by design"
                            title="Useful AI earns trust slowly."
                            copy="Gurukul is being built for children and public education. Safety, truthfulness, privacy, and human accountability are part of the product architecture."
                            align="center"
                        />
                        <div className="trust-grid">
                            {trustPrinciples.map((principle) => {
                                const Icon = principle.icon;
                                return (
                                    <article key={principle.title}>
                                        <Icon />
                                        <h3>{principle.title}</h3>
                                        <p>{principle.text}</p>
                                    </article>
                                );
                            })}
                        </div>
                        <div className="trust-links">
                            <a href="/privacy">Privacy notice <ArrowRight /></a>
                            <a href="/responsible-ai">Responsible AI <ArrowRight /></a>
                            <a href="/security">Security overview <ArrowRight /></a>
                            <a href="/accessibility">Accessibility <ArrowRight /></a>
                        </div>
                    </div>
                </section>

                <section className="architecture-section section">
                    <div className="shell architecture-grid">
                        <div>
                            <span className="eyebrow">Technology and scale</span>
                            <h2>Built as a product, designed to travel across clouds.</h2>
                            <p>Gurukul AI’s reference architecture separates the learning product from the infrastructure underneath it. That supports India-region deployments, cost control, resilient pilots, and responsible model choice as the system grows.</p>
                            <div className="architecture-disclaimer">Provider names describe planned or evaluated technology paths. They do not imply endorsement, partnership, credits, or certification.</div>
                        </div>
                        <div className="architecture-stack">
                            <div className="stack-layer stack-layer--ai">
                                <BrainCircuit />
                                <span><small>Learning intelligence</small><strong>Claude API for grounded tutoring and teacher assistance</strong></span>
                            </div>
                            <div className="stack-connector"></div>
                            <div className="stack-layer">
                                <Cloud />
                                <span><small>Portable application layer</small><strong>Containerized services · offline sync · model gateway</strong></span>
                            </div>
                            <div className="stack-connector"></div>
                            <div className="cloud-options">
                                <span>AWS India</span><span>Google Cloud India</span><span>Microsoft Azure India</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="roadmap-section section" id="roadmap">
                    <div className="shell">
                        <SectionHeading
                            eyebrow="Delivery roadmap"
                            title="Prove it in classrooms. Then scale it carefully."
                            copy="The roadmap begins with teacher adoption and learning quality, then expands only after reliability, safety, and support are demonstrated."
                        />
                        <div className="roadmap-grid">
                            {roadmap.map((item) => (
                                <article key={item.phase}>
                                    <div className="roadmap-number">{item.phase}</div>
                                    <span>{item.scale}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="shell cta-panel">
                        <div className="cta-sun" aria-hidden="true"></div>
                        <div>
                            <span className="eyebrow eyebrow--light">Let’s build the pilot well</span>
                            <h2>For a student in the last row, the network bar should not decide what is possible.</h2>
                        </div>
                        <div className="cta-actions">
                            <a className="button button--paper" href={`mailto:${CONTACT_EMAIL}?subject=Gurukul%20AI%20pilot%20conversation`}>Start a conversation <ArrowRight size={18} /></a>
                            <a href={CONTACT_PHONE_LINK}><Phone size={17} /> {CONTACT_PHONE}</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

function PolicyPage({ page }) {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `${page.title} | Gurukul AI`;
    }, [page.title]);

    return (
        <div className="policy-page">
            <a className="skip-link" href="#policy-content">Skip to main content</a>
            <Header policy />
            <main id="policy-content" className="policy-main">
                <div className="shell policy-shell">
                    <header className="policy-hero">
                        <span className="eyebrow">{page.eyebrow}</span>
                        <h1>{page.title}</h1>
                        <p>{page.intro}</p>
                        <small>Last updated: {page.updated}</small>
                    </header>
                    {page.notice && <div className="policy-notice"><ShieldCheck /> {page.notice}</div>}
                    <div className="policy-layout">
                        <aside>
                            <strong>On this page</strong>
                            {page.sections.map((section, index) => (
                                <a key={section.title} href={`#section-${index + 1}`}>{section.title}</a>
                            ))}
                        </aside>
                        <article className="policy-content">
                            {page.sections.map((section, index) => (
                                <section id={`section-${index + 1}`} key={section.title}>
                                    <h2>{section.title}</h2>
                                    {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                </section>
                            ))}
                            <div className="policy-contact-card">
                                <Mail />
                                <div><strong>Questions or concerns?</strong><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
                            </div>
                        </article>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function NotFound() {
    useEffect(() => {
        document.title = 'Page not found | Gurukul AI';
    }, []);

    return (
        <div className="not-found">
            <Brand />
            <School />
            <h1>That page is not here.</h1>
            <p>The lesson can continue from the Gurukul AI home page.</p>
            <a className="button button--ink" href="/">Return home <ArrowRight /></a>
        </div>
    );
}

export default function App() {
    const path = window.location.pathname.replace(/\/$/, '') || '/';

    if (path === '/') return <HomePage />;
    if (policyPages[path]) return <PolicyPage page={policyPages[path]} />;
    return <NotFound />;
}
