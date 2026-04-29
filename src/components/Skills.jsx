import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiD3Dotjs,
    SiAngular, SiVuedotjs, SiJquery, SiRedux,
    SiNodedotjs, SiNestjs, SiExpress, SiGraphql,
    SiPostgresql, SiMongodb, SiRedis, SiFirebase,
    SiSolana, SiStripe,
    SiOpenai, SiAnthropic,
    SiDocker, SiKubernetes, SiGithubactions,
    SiFigma,
    SiJavascript, SiPython, SiPhp, SiGo, SiRust, SiHtml5, SiCss3,
    SiAmazon, SiVercel, SiGooglecloud, SiLinux,
} from 'react-icons/si';
import {
    FaEthereum, FaWallet, FaLink, FaBitcoin, FaServer, FaLock,
    FaDesktop, FaCreditCard, FaRobot, FaComments, FaFolderOpen,
    FaNetworkWired, FaPlug, FaTerminal, FaBrain,
    FaDatabase, FaShoppingCart, FaCoins, FaCloud, FaIndustry, FaSearch, FaStore,
    FaSitemap, FaProjectDiagram, FaExpandArrowsAlt, FaVial, FaUsers, FaCodeBranch, FaSync,
} from 'react-icons/fa';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { MdApi, MdSmartphone } from 'react-icons/md';

const skillCategories = [
    {
        title: 'Languages',
        skills: [
            { name: 'JavaScript ★', icon: <SiJavascript /> },
            { name: 'TypeScript ★', icon: <SiTypescript /> },
            { name: 'Python', icon: <SiPython /> },
            { name: 'PHP', icon: <SiPhp /> },
            { name: 'Go', icon: <SiGo /> },
            { name: 'Rust', icon: <SiRust /> },
            { name: 'SQL', icon: <FaDatabase /> },
            { name: 'HTML', icon: <SiHtml5 /> },
            { name: 'CSS', icon: <SiCss3 /> },
            { name: 'Bash', icon: <FaTerminal /> },
        ],
    },
    {
        title: 'AI / LLM',
        skills: [
            { name: 'Claude Code', icon: <FaTerminal /> },
            { name: 'Anthropic SDK', icon: <SiAnthropic /> },
            { name: 'OpenAI API', icon: <SiOpenai /> },
            { name: 'MCP', icon: <FaPlug /> },
            { name: 'Multi-Agent Systems', icon: <FaNetworkWired /> },
            { name: 'Subagents & Tool Use', icon: <FaRobot /> },
            { name: 'RAG Pipelines', icon: <FaSearch /> },
            { name: 'Vector Databases', icon: <FaDatabase /> },
            { name: 'Chatbots', icon: <FaComments /> },
            { name: 'Prompt Engineering', icon: <FaServer /> },
        ],
    },
    {
        title: 'Frontend',
        skills: [
            { name: 'React', icon: <SiReact /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'React Native', icon: <MdSmartphone /> },
            { name: 'Angular', icon: <SiAngular /> },
            { name: 'Vue.js', icon: <SiVuedotjs /> },
            { name: 'jQuery', icon: <SiJquery /> },
            { name: 'Redux', icon: <SiRedux /> },
            { name: 'TailwindCSS', icon: <SiTailwindcss /> },
            { name: 'D3 / Recharts', icon: <SiD3Dotjs /> },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: <SiNodedotjs /> },
            { name: 'NestJS', icon: <SiNestjs /> },
            { name: 'Express', icon: <SiExpress /> },
            { name: 'GraphQL', icon: <SiGraphql /> },
            { name: 'REST API', icon: <MdApi /> },
            { name: 'SSE / WebSocket', icon: <FaLink /> },
            { name: 'Microservices', icon: <FaServer /> },
        ],
    },
    {
        title: 'Architecture & Practices',
        skills: [
            { name: 'System Design', icon: <FaSitemap /> },
            { name: 'Distributed Systems', icon: <FaProjectDiagram /> },
            { name: 'Scalability / High Availability', icon: <FaExpandArrowsAlt /> },
            { name: 'Event-Driven Architecture', icon: <FaNetworkWired /> },
            { name: 'TDD / Unit Testing', icon: <FaVial /> },
            { name: 'Code Review', icon: <FaCodeBranch /> },
            { name: 'Mentoring / Tech Lead', icon: <FaUsers /> },
            { name: 'Agile / Scrum', icon: <FaSync /> },
        ],
    },
    {
        title: 'Industries',
        skills: [
            { name: 'E-commerce', icon: <FaShoppingCart /> },
            { name: 'Fintech', icon: <FaCoins /> },
            { name: 'Crypto / Web3', icon: <FaBitcoin /> },
            { name: 'AI / LLM', icon: <FaRobot /> },
            { name: 'Big Data', icon: <FaDatabase /> },
            { name: 'SaaS', icon: <FaCloud /> },
            { name: 'ERP', icon: <FaIndustry /> },
            { name: 'Marketplace', icon: <FaStore /> },
        ],
    },
    {
        title: 'Web3 & Payments',
        skills: [
            { name: 'Ethers.js / Web3.js', icon: <FaEthereum /> },
            { name: 'Multi-chain', icon: <FaBitcoin /> },
            { name: 'MetaMask / WalletConnect', icon: <FaWallet /> },
            { name: 'Phantom / Solana', icon: <SiSolana /> },
            { name: 'Stripe API', icon: <SiStripe /> },
            { name: 'Payment Gateways', icon: <FaCreditCard /> },
            { name: 'WebCrypto API', icon: <FaLock /> },
        ],
    },
    {
        title: 'Infrastructure & Cloud',
        skills: [
            { name: 'AWS', icon: <SiAmazon /> },
            { name: 'Google Cloud', icon: <SiGooglecloud /> },
            { name: 'Vercel', icon: <SiVercel /> },
            { name: 'Docker', icon: <SiDocker /> },
            { name: 'Kubernetes', icon: <SiKubernetes /> },
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Redis', icon: <SiRedis /> },
            { name: 'Firebase', icon: <SiFirebase /> },
            { name: 'GitHub Actions', icon: <SiGithubactions /> },
            { name: 'Linux', icon: <SiLinux /> },
        ],
    },
    {
        title: 'Product & Design',
        skills: [
            { name: 'Figma', icon: <SiFigma /> },
            { name: 'Mobile-first UX', icon: <HiDevicePhoneMobile /> },
            { name: 'Responsive / Adaptive', icon: <FaDesktop /> },
            { name: 'Design Systems', icon: <FaFolderOpen /> },
        ],
    },
];

const aiPillars = [
    {
        title: 'Orchestration',
        icon: <FaNetworkWired />,
        items: [
            'Claude Code as primary IDE',
            'Multi-agent parallel workflows',
            'Subagents: explore / plan / review / verify',
            'Background tasks & scheduled agents',
        ],
    },
    {
        title: 'Tooling',
        icon: <FaPlug />,
        items: [
            'MCP servers (Figma, Chrome DevTools, GitHub)',
            'Custom domain-specific subagents',
            'Anthropic SDK + OpenAI SDK in production',
            'RAG pipelines & vector databases',
        ],
    },
    {
        title: 'Philosophy',
        icon: <FaBrain />,
        items: [
            'Architecture & taste = human',
            'Code generation = AI',
            'Every line reviewed before ship',
            'Multi-agent = leverage; single-agent = autocomplete',
        ],
    },
];

const Skills = () => {
    return (
        <article className="bg-newsprint">
            <div className="pt-24 px-8 pb-10 max-md:pt-33 max-md:px-5">
                <div className="text-center mb-2">
                    <h2 className="text-4xl font-black uppercase tracking-wider inline-block">Skills</h2>
                </div>
                <div className="rule-double mb-8" />

                <div className="max-w-175 mx-auto mb-6">
                    <p className="text-sm leading-relaxed text-justify text-ink-light" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                        <span className="text-4xl font-bold float-left mr-2 leading-[0.8] text-brand">14</span>
                        years architecting and shipping production software &mdash; web, mobile, and backend.
                        Specialize in distributed systems, microservices architecture, scalable platforms,
                        and high-availability infrastructure. JavaScript-first engineer with hands-on work
                        in TypeScript, Python, PHP, Go, and Rust. Delivered crypto wallets, AI dashboards,
                        RAG systems, chatbots, payment platforms, ERPs, and e-commerce engines used by
                        350K+ merchants and 5M+ users across e-commerce, fintech, crypto/Web3, AI/LLM,
                        and big data. Track record of leading cross-functional teams, mentoring engineers,
                        and owning architecture decisions in Agile environments. Claude Code is my daily
                        IDE &mdash; multi-agent workflows ship 3&ndash;5&times; faster than team-of-one in 2023.
                    </p>
                </div>

                <hr className="mx-auto max-w-175 rule-thin my-10" />

                <div className="mx-auto max-w-175 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                    {skillCategories.map(({ title, skills }) => (
                        <div key={title}>
                            <h4 className="text-dark font-bold mb-2 uppercase text-xs tracking-[0.2em] border-b border-rule pb-1 flex items-center gap-1.5" style={{ fontFamily: "'Oswald', sans-serif" }}>
                                <FaFolderOpen className="shrink-0" />
                                {title}
                            </h4>
                            <ul className="m-0 p-0">
                                {skills.map(({ name, icon }) => (
                                    <li key={name} className="list-none py-0.5 text-xs text-ink-light flex items-center gap-1.5">
                                        <span className="text-dark text-xs shrink-0 opacity-70">{icon}</span>
                                        {name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="mx-auto max-w-175 rule-thin my-10" />

                <div className="text-center mb-4">
                    <h3 className="text-2xl font-black uppercase tracking-wider inline-block">AI Workflow</h3>
                </div>

                <div className="max-w-175 mx-auto mb-6">
                    <p className="text-sm leading-relaxed text-justify text-ink-light" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                        I ship 3&ndash;5&times; faster than I did in 2023. <strong>Claude Code</strong> is my daily driver
                        &mdash; not autocomplete, but a coordination layer where I orchestrate parallel subagents
                        to explore, plan, implement, and review. The leverage isn't writing code faster &mdash; it's
                        running multiple investigations, refactors, and feature branches in parallel without
                        losing the architectural thread.
                    </p>
                </div>

                <div className="mx-auto max-w-175 grid grid-cols-3 max-md:grid-cols-1 gap-6 mb-6">
                    {aiPillars.map(({ title, icon, items }) => (
                        <div key={title}>
                            <h4 className="text-dark font-bold mb-2 uppercase text-xs tracking-[0.2em] border-b border-rule pb-1 flex items-center gap-1.5" style={{ fontFamily: "'Oswald', sans-serif" }}>
                                <span className="shrink-0">{icon}</span>
                                {title}
                            </h4>
                            <ul className="m-0 p-0">
                                {items.map((item) => (
                                    <li key={item} className="list-none py-0.5 text-xs text-ink-light flex items-start gap-1.5">
                                        <span className="text-brand text-xs shrink-0 mt-0.5">&rsaquo;</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="max-w-175 mx-auto border-l-3 border-brand pl-4">
                    <p className="text-xs text-ink-light leading-relaxed italic" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                        I use LLMs as an exoskeleton &mdash; prototyping, research, acceleration.
                        I set the architecture, review every line, and never ship without validation.
                        <strong className="not-italic"> AI writes code. I shape the experience, the system, and the standards.</strong>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Skills;
