import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import {
    ArrowRight, ArrowUpRight, BrainCircuit, Zap, BarChart3, Menu, X, Mail, Phone,
    Database, Search, Cpu, Share2, Repeat, Layers, Code2, Rocket, ShieldCheck,
    ChevronDown, Sparkles, Globe, Clock, Check, Activity
} from 'lucide-react';
import './index.css';

/* ========= CURSOR GLOW COMPONENT ========= */
const CursorGlow = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 200);
            cursorY.set(e.clientY - 200);
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <motion.div
            className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
            }}
        />
    );
};

/* ========= MAIN COMPONENT ========= */
const NeuralKnights = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactModalOpen, setContactModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 0) => ({
            opacity: 1, y: 0,
            transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] }
        })
    };

    const processSteps = [
        {
            step: "01", title: "1-Week Proof of Concept",
            desc: "We prove it works using your actual use case before you commit anything. Real data, real results.",
            icon: <Code2 size={20} />, color: "blue"
        },
        {
            step: "02", title: "Full System Delivery",
            desc: "Production-grade AI system built in ~3 weeks. End-to-end, robust, scalable, and battle-tested.",
            icon: <Rocket size={20} />, color: "purple"
        },
        {
            step: "03", title: "Cloud Deployment",
            desc: "Seamless deployment across AWS, Azure, or GCP—wherever your infrastructure lives. Zero friction.",
            icon: <ShieldCheck size={20} />, color: "emerald"
        }
    ];

    const catalystSteps = [
        { title: "Identity Vault", desc: "Extract and lock in your brand's Visual DNA for total consistency.", icon: <Database size={18} />, color: "from-blue-500/20 to-blue-900/10" },
        { title: "Market Scouting", desc: "Hunt winning content across YouTube, Instagram & Blogs.", icon: <Search size={18} />, color: "from-purple-500/20 to-purple-900/10" },
        { title: "Gap Analysis", desc: "Deconstruct competitors. Find what they missed.", icon: <Layers size={18} />, color: "from-indigo-500/20 to-indigo-900/10" },
        { title: "Viral Prediction", desc: "GNN scores hooks, urgency & sentiment before posting.", icon: <Cpu size={18} />, color: "from-cyan-500/20 to-cyan-900/10" },
        { title: "Content Gen", desc: "Scripts, Reels, and high-authority posts—synthesized.", icon: <Zap size={18} />, color: "from-amber-500/20 to-amber-900/10" },
        { title: "Loop Closure", desc: "Performance feeds back into the model. It learns.", icon: <Repeat size={18} />, color: "from-emerald-500/20 to-emerald-900/10" }
    ];

    const techStack = ["LangGraph", "GPT-4o", "Azure", "GNN", "KLING", "Runway", "Brave Search", "Tavily", "AWS", "Docker"];

    return (
        <div className="min-h-screen noise-overlay dot-grid-bg">
            <CursorGlow />

            {/* ===== NAVIGATION ===== */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[11px] font-black tracking-tighter shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
                            NK
                        </div>
                        <span className="text-lg font-bold tracking-tight">Neural Knights</span>
                    </a>

                    <div className="hidden md:flex items-center gap-1">
                        <a href="#process" className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all">Process</a>
                        <a href="#catalyst" className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all">Catalyst AI</a>
                        <a href="#stats" className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all">Results</a>
                        <div className="w-px h-6 bg-white/10 mx-3" />
                        <button
                            onClick={() => setContactModalOpen(true)}
                            className="glow-btn px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-all"
                        >
                            Book a Call
                        </button>
                    </div>

                    <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(true)}>
                        <Menu size={22} />
                    </button>
                </div>
            </nav>

            {/* ===== HERO SECTION ===== */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Background gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Text */}
                        <motion.div initial="hidden" animate="visible" className="max-w-xl">
                            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-[0.15em] mb-8">
                                <Activity size={12} className="animate-pulse" />
                                Custom AI Systems
                            </motion.div>

                            <motion.h1 variants={fadeUp} custom={1} className="text-[3.25rem] lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
                                Scale Your Agency. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                                    Without Headcount.
                                </span>
                            </motion.h1>

                            <motion.p variants={fadeUp} custom={2} className="text-xl text-gray-300 leading-relaxed mb-6 max-w-lg">
                                I help agencies implement custom end-to-end AI systems tailored to their workflow — content, ads, automation, and everything in between.
                            </motion.p>

                            <motion.ul variants={fadeUp} custom={3} className="space-y-3 mb-10 text-lg text-gray-300">
                                <li className="flex items-start gap-3"><Check size={20} className="text-emerald-400 mt-1 shrink-0" /> 1-week PoC using your real use case</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-emerald-400 mt-1 shrink-0" /> If it works → full delivery in ~3 weeks</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-emerald-400 mt-1 shrink-0" /> Deployment across AWS / Azure / GCP</li>
                            </motion.ul>

                            <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setContactModalOpen(true)}
                                    className="glow-btn group relative px-8 py-4 bg-white text-black rounded-full font-bold text-base hover:scale-[1.03] transition-all"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Start Your PoC <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                                <button
                                    onClick={() => window.location.href = "tel:9325341766"}
                                    className="px-8 py-4 rounded-full border border-white/10 hover:border-white/25 hover:bg-white/[0.03] text-base font-medium transition-all text-gray-300 hover:text-white flex items-center gap-2 justify-center"
                                >
                                    <Phone size={16} /> Talk to an Engineer
                                </button>
                            </motion.div>
                        </motion.div>

                        {/* Right: Animated Orb Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className="hidden lg:flex items-center justify-center"
                        >
                            <div className="relative">
                                <div className="hero-orb">
                                    <div className="orb-inner-ring" />
                                    <div className="orb-center-dot" />
                                </div>
                                {/* Floating labels */}
                                <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }}
                                    className="absolute -top-4 -right-8 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-indigo-300 flex items-center gap-1.5">
                                    <Sparkles size={12} /> GNN Prediction
                                </motion.div>
                                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
                                    className="absolute -bottom-4 -left-8 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-purple-300 flex items-center gap-1.5">
                                    <BrainCircuit size={12} /> LLM Pipeline
                                </motion.div>
                                <motion.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                                    className="absolute top-1/2 -right-20 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-pink-300 flex items-center gap-1.5">
                                    <Globe size={12} /> Multi-Cloud
                                </motion.div>
                                {/* Pulse rings */}
                                <div className="pulse-ring" style={{ animationDelay: '0s' }} />
                                <div className="pulse-ring" style={{ animationDelay: '1.5s' }} />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
                >
                    <ChevronDown size={24} />
                </motion.div>
            </section>

            {/* ===== TECH MARQUEE ===== */}
            <div className="border-y border-white/5 py-4 overflow-hidden bg-black/30">
                <div className="tech-marquee">
                    {[...techStack, ...techStack].map((tech, i) => (
                        <span key={i} className="text-sm font-medium text-gray-500 whitespace-nowrap tracking-wide uppercase">{tech}</span>
                    ))}
                </div>
            </div>

            {/* ===== PROCESS SECTION ===== */}
            <section id="process" className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
                        <motion.p variants={fadeUp} custom={0} className="text-indigo-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">How We Work</motion.p>
                        <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                            Simple. Fast. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Proven.</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} custom={2} className="text-gray-400 text-lg max-w-xl">
                            No bloated timelines or endless discovery. We ship working AI systems fast.
                        </motion.p>
                    </motion.div>

                    {/* Bento-style process cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {processSteps.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                className="gradient-border-card group p-8 hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color === 'blue' ? 'bg-blue-500/15 text-blue-400' :
                                        item.color === 'purple' ? 'bg-purple-500/15 text-purple-400' :
                                            'bg-emerald-500/15 text-emerald-400'
                                        } group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-xs font-mono text-gray-600 tracking-wider">STEP {item.step}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== STATS SECTION ===== */}
            <section id="stats" className="py-20 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { num: "7", label: "Day PoC" },
                            { num: "3", label: "Week Delivery" },
                            { num: "100%", label: "Cloud Native" },
                            { num: "24/7", label: "Support" },
                        ].map((stat, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="stat-item"
                            >
                                <div className="stat-number">{stat.num}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CATALYST AI SECTION ===== */}
            <section id="catalyst" className="py-32 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                        <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-[0.15em] mb-6">
                            <Sparkles size={12} /> Featured Product
                        </motion.div>
                        <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                            Content Gravity <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Engine</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} custom={2} className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Our in-house AI engine. 6 stages that turn raw products into market-dominating content campaigns.
                        </motion.p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {catalystSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className={`group p-6 rounded-2xl bg-gradient-to-br ${step.color} border border-white/5 hover:border-white/15 transition-all duration-300 backdrop-blur-sm`}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white transition-colors group-hover:bg-white/10">
                                        {step.icon}
                                    </div>
                                    <span className="text-xs font-mono text-white/20">0{i + 1}</span>
                                </div>
                                <h3 className="text-base font-bold mb-1">{step.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.h2 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                            Open to a quick call <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">if you find it valuable.</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} custom={1} className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
                            Let's discuss how custom AI can help your team produce faster and scale — without adding headcount.
                        </motion.p>
                        <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setContactModalOpen(true)}
                                className="glow-btn px-10 py-4 bg-white text-black rounded-full font-bold text-base hover:scale-[1.03] transition-all shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)]"
                            >
                                Book a 15-min Call
                            </button>
                            <a href="mailto:barshilerohit1785@gmail.com"
                                className="px-10 py-4 rounded-full border border-white/10 hover:border-white/25 font-medium transition-all text-gray-300 hover:text-white flex items-center gap-2 justify-center"
                            >
                                <Mail size={16} /> Send an Email
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="border-t border-white/5 py-12 bg-black/30">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[9px] font-black">NK</div>
                        <span className="text-sm font-semibold">Neural Knights</span>
                    </div>
                    <div className="text-xs text-gray-600">© 2026 Neural Knights. All rights reserved.</div>
                    <div className="flex gap-6">
                        <a href="mailto:barshilerohit1785@gmail.com" className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"><Mail size={12} /> Email</a>
                        <a href="tel:9325341766" className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"><Phone size={12} /> Call</a>
                        <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"><ArrowUpRight size={12} /> LinkedIn</a>
                    </div>
                </div>
            </footer>

            {/* ===== MOBILE MENU ===== */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100]"
                    >
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)} />
                        <motion.div
                            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="absolute right-0 top-0 bottom-0 w-80 bg-[#0a0a0d] border-l border-white/5 p-8 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <span className="font-bold text-lg">Menu</span>
                                <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-lg hover:bg-white/5"><X size={20} /></button>
                            </div>
                            <div className="flex flex-col gap-1">
                                {[
                                    { label: 'Process', href: '#process' },
                                    { label: 'Catalyst AI', href: '#catalyst' },
                                    { label: 'Results', href: '#stats' },
                                ].map((link, i) => (
                                    <a key={i} href={link.href} onClick={() => setIsMenuOpen(false)}
                                        className="px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                                    >{link.label}</a>
                                ))}
                            </div>
                            <div className="mt-auto">
                                <button onClick={() => { setIsMenuOpen(false); setContactModalOpen(true); }}
                                    className="w-full px-6 py-4 bg-white text-black rounded-xl font-bold text-center hover:bg-gray-100 transition-colors"
                                >Book a Call</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ===== CONTACT MODAL ===== */}
            <AnimatePresence>
                {isContactModalOpen && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/85 backdrop-blur-md"
                            onClick={() => setContactModalOpen(false)}
                        />
                        <motion.div
                            initial={{ scale: 0.92, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.92, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative w-full max-w-md gradient-border-card bg-[#0c0c10] p-8"
                        >
                            <button onClick={() => setContactModalOpen(false)}
                                className="absolute top-5 right-5 text-gray-500 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-all"
                            ><X size={18} /></button>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-black shadow-lg shadow-indigo-500/25">NK</div>
                                <div>
                                    <h2 className="text-xl font-bold">Let's build together.</h2>
                                    <p className="text-xs text-gray-500">Direct line • Engineering team</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <a href="mailto:barshilerohit1785@gmail.com"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-indigo-500/30 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em] mb-0.5">Email</div>
                                        <div className="text-sm font-medium text-white">barshilerohit1785@gmail.com</div>
                                    </div>
                                    <ArrowUpRight size={14} className="text-gray-600 group-hover:text-indigo-400 transition-colors" />
                                </a>

                                <a href="tel:9325341766"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-purple-500/30 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                        <Phone size={18} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em] mb-0.5">Phone</div>
                                        <div className="text-sm font-medium text-white">+91 9325341766</div>
                                    </div>
                                    <ArrowUpRight size={14} className="text-gray-600 group-hover:text-purple-400 transition-colors" />
                                </a>
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/5 text-center">
                                <p className="text-[11px] text-gray-600">Mumbai, India • Available Mon–Sat, 10am–7pm IST</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NeuralKnights;
