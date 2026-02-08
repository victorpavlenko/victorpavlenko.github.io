import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiD3Dotjs,
    SiNodedotjs, SiNestjs, SiExpress, SiGraphql,
    SiPostgresql, SiMongodb, SiRedis, SiFirebase,
    SiWeb3Dotjs, SiSolana, SiStripe,
    SiOpenai, SiAnthropic,
    SiDocker, SiKubernetes, SiGit, SiGithubactions,
    SiFigma,
} from 'react-icons/si';
import { FaEthereum, FaWallet, FaLink, FaBitcoin, FaServer, FaLock, FaDesktop, FaCreditCard, FaRobot, FaComments, FaFolderOpen } from 'react-icons/fa';
import { HiDevicePhoneMobile } from 'react-icons/hi2';
import { MdApi, MdSmartphone } from 'react-icons/md';

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React', icon: <SiReact /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'React Native', icon: <MdSmartphone /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
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
        ],
    },
    {
        title: 'Database',
        skills: [
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Redis', icon: <SiRedis /> },
            { name: 'Firebase', icon: <SiFirebase /> },
        ],
    },
    {
        title: 'Crypto / Web3',
        skills: [
            { name: 'Ethers.js', icon: <FaEthereum /> },
            { name: 'Web3.js', icon: <SiWeb3Dotjs /> },
            { name: 'MetaMask', icon: <FaWallet /> },
            { name: 'WalletConnect', icon: <FaLink /> },
            { name: 'Phantom', icon: <SiSolana /> },
            { name: 'Multi-chain', icon: <FaBitcoin /> },
        ],
    },
    {
        title: 'Fintech',
        skills: [
            { name: 'Stripe API', icon: <SiStripe /> },
            { name: 'Payment Gateways', icon: <FaCreditCard /> },
            { name: 'Crypto Checkout', icon: <FaWallet /> },
            { name: 'Subscription Billing', icon: <FaCreditCard /> },
        ],
    },
    {
        title: 'AI / LLM',
        skills: [
            { name: 'OpenAI API', icon: <SiOpenai /> },
            { name: 'Claude API', icon: <SiAnthropic /> },
            { name: 'Streaming LLM UIs', icon: <FaComments /> },
            { name: 'AI Agents', icon: <FaRobot /> },
            { name: 'Prompt Engineering', icon: <FaServer /> },
            { name: 'WebCrypto API', icon: <FaLock /> },
        ],
    },
    {
        title: 'DevOps',
        skills: [
            { name: 'Docker', icon: <SiDocker /> },
            { name: 'Kubernetes', icon: <SiKubernetes /> },
            { name: 'Git', icon: <SiGit /> },
            { name: 'CI/CD', icon: <SiGithubactions /> },
        ],
    },
    {
        title: 'Design',
        skills: [
            { name: 'Figma', icon: <SiFigma /> },
            { name: 'Responsive / Adaptive', icon: <FaDesktop /> },
            { name: 'Mobile-first UX', icon: <HiDevicePhoneMobile /> },
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
                        years shipping production JavaScript — full stack, from database schema to the pixel the user sees.
                        I've built crypto wallets, AI interfaces, payment platforms, and e-commerce engines
                        used by 350K+ merchants and 5M+ users. Years of working without designers
                        gave me a UX instinct that no framework can replace: I catch the edge cases,
                        error states, and mobile breakpoints that get missed in Figma.
                    </p>
                </div>

                <div className="max-w-175 mx-auto mb-6 border-l-3 border-brand pl-4">
                    <p className="text-xs text-ink-light leading-relaxed italic" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                        I use LLMs as an exoskeleton — prototyping, research, acceleration.
                        But I set the architecture, review every line, and never ship without validation.
                        AI writes code. I shape the experience.
                    </p>
                </div>

                <hr className="mx-auto max-w-175 rule-thin my-10" />

                <div className="mx-auto max-w-175 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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
            </div>
        </article>
    );
};

export default Skills;
