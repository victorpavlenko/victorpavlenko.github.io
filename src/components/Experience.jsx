import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
    {
        logo: '/images/logo/prem.svg',
        company: 'PREMAI.IO',
        url: 'https://premai.io',
        role: 'Lead Frontend Developer',
        period: '2025 - present',
        highlights: [
            <>Built <strong>API Dashboard</strong> for a $19.5M-funded platform — key management, usage analytics, billing, rate limiting</>,
            <>Architected <strong>quantum-resistant client-side encryption</strong> for LLM interactions — zero data exposure, end-to-end</>,
            <>Built <strong>Model Playground</strong> — streaming AI responses, parameter tuning, side-by-side model comparison</>,
        ],
        details: [
            <><strong>Fine-tuning UI</strong> — dataset upload, real-time training metrics (loss curves via Recharts), model evaluation</>,
            <><strong>React Native app</strong> — model management, usage monitoring, real-time push notifications</>,
            <>Made enterprise encryption UX transparent — security status visible without cryptography knowledge</>,
        ],
        stack: 'React, React Native, TypeScript, Next.js, Node.js, TailwindCSS, Recharts, D3.js, WebCrypto API, SSE',
    },
    {
        logo: '/images/logo/bitgpt.svg',
        company: 'BITGPT.XYZ',
        url: 'https://bitgpt.xyz',
        role: 'Lead Frontend Developer',
        period: '2025 - present',
        highlights: [
            <>Built <strong>Terminal</strong> — execute crypto transactions via natural language (OpenAI API), cross-chain swaps, market analysis</>,
            <>Built <strong>browser crypto wallet</strong> from scratch — EVM, Solana, Bitcoin, BNB; real-time balances, tx signing, network switching</>,
            <>Built <strong>checkout &amp; payment pages</strong> — h402 protocol, merchant integrations, invoice generation, crypto settlement flows</>,
        ],
        details: [
            <>Integrated <strong>MetaMask, Rabby, WalletConnect</strong> — wallet connection, error recovery, network prompts, tx confirmation</>,
            <><strong>OpenAI API</strong> streaming — token-by-token rendering, context management, conversational transaction flows</>,
        ],
        stack: 'React, TypeScript, Next.js, Node.js, OpenAI API, WebSocket, Web3.js, Ethers.js, WalletConnect',
    },
    {
        logo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMzg2LjcgOTcwLjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMzODYuNyA5NzAuNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMxZjFmMWY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNjUuNywyNjYuOGwyNjMtODcuOEw1MTEsMjUzLjhjMjIuOCw1LjQsNDcuNiwxMi42LDc1LDIyLjRjNjAuOCwyMS43LDExNS45LDQ2LjksMTY1LjQsNzUuNWwxMDkuNC0yMzAuNQoJCWMtNTIuMS0zMy0xMTMuNS01OS41LTE4NC4zLTc5LjRjLTcwLjgtMjAtMTQxLjctMzAtMjEyLjktMzBjLTc4LjEsMC0xNDYuNywxMi4yLTIwNS44LDM2LjVjLTU5LjEsMjQuMy0xMDQuNiw1OS4zLTEzNi43LDEwNC44CgkJQzg5LDE5OC44LDcyLjksMjUyLDcyLjksMzEyLjdjMCw2Mi41LDE1LjYsMTEyLjQsNDYuOSwxNDkuOGMzMS4yLDM3LjMsNjguMyw2NC45LDExMS4zLDgyLjdjNDMsMTcuOCw5Ni42LDM0LjksMTYwLjgsNTEuNAoJCWMxNy4zLDQuMywzMi42LDguNCw0Ni45LDEyLjZsMTctNzEuOWwyMDQuMywxNjAuOWwtMjYyLjksODcuOGwxNC4xLTU5LjhjLTMzLjgtNi44LTcxLjEtMTgtMTEzLjEtMzUuMQoJCUMyMjguOCw2NjIuOCwxNzEsNjI4LjcsMTI1LDU4OC44TDEzLDgxNi43YzU5LjksNDYsMTMwLjksODIuMiwyMTMsMTA4LjdjODIsMjYuNSwxNjMuNCwzOS43LDI0NC4xLDM5LjcKCQljNzEuMiwwLDEzNS45LTEwLjksMTk0LjEtMzIuNmM1OC4yLTIxLjcsMTA0LjQtNTQuOSwxMzguNy05OS42YzM0LjMtNDQuNyw1MS41LTEwMCw1MS41LTE2NmMwLTY0LjMtMTYuMS0xMTYuMS00OC4yLTE1NS42CgkJYy0zMi4xLTM5LjUtNjkuNy02OC40LTExMi43LTg2LjZjLTQzLTE4LjItOTctMzYuNS0xNjIuMS01NC43Yy0xNi41LTQuNC0zMS04LjYtNDQuNy0xMi43TDQ3MCw0MjcuN0wyNjUuNywyNjYuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjMxLjksMzAzLjZjLTIwMy4xLDAtMzQyLjUsMTQ3LjEtMzQyLjUsMzI5LjVjMCwyMDcuMSwxNTMuNiwzMzAuOCwzNTAuMywzMzAuOAoJCWM5My43LDAsMjA1LjgtMjQuNywyNjguMy03OC4ybC05Ni40LTE0NC41Yy0zMS4yLDI3LjMtMTA5LjQsNDQuMy0xNDQuNiw0NC4zYy03Ni44LDAtMTIyLjQtMzkuMS0xMzUuNC03OS40aDQyNy4xdi00OC4yCgkJQzE1NTguOCw0MzYuNCwxNDE2LjgsMzAzLjYsMTIzMS45LDMwMy42eiBNMTEyOSw1NTcuNWM3LjgtMjguNiwzMS4yLTc1LjUsMTAyLjgtNzUuNWM3NS42LDAsOTcuNyw0OC4yLDEwNC4yLDc1LjVIMTEyOXoiLz4KCTxyZWN0IHg9IjE2MzkuNSIgeT0iNzkuNiIgY2xhc3M9InN0MCIgd2lkdGg9IjIzNC40IiBoZWlnaHQ9Ijg2OC42Ii8+Cgk8cmVjdCB4PSIyMDA0LjEiIHk9Ijc5LjYiIGNsYXNzPSJzdDAiIHdpZHRoPSIyMzQuNCIgaGVpZ2h0PSI4NjguNiIvPgoJPHJlY3QgeD0iMjM2OC44IiB5PSIzMTkuMiIgY2xhc3M9InN0MCIgd2lkdGg9IjIzNC40IiBoZWlnaHQ9IjYyOSIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI0ODYsMTAuNmMtNzIuOSwwLTEzMS42LDU4LjYtMTMxLjYsMTMxLjVjMCw3Mi45LDU4LjYsMTMxLjYsMTMxLjYsMTMxLjZjNzIuOSwwLDEzMS41LTU4LjYsMTMxLjUtMTMxLjYKCQlDMjYxNy41LDY5LjIsMjU1OC45LDEwLjYsMjQ4NiwxMC42eiIvPgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMTU1LjMsNjI1LjIgMzM0OCwzMTkuMiAzMDkxLjUsMzE5LjIgMzAwNi44LDQ2Ni40IDI5MjIuMiwzMTkuMiAyNjY1LjYsMzE5LjIgMjg1OC40LDYyNS4yIAoJCTI2NTIuNiw5NDguMiAyOTA3LjgsOTQ4LjIgMzAwOC4xLDc4MS41IDMxMDUuOCw5NDguMiAzMzYyLjMsOTQ4LjIgCSIvPgo8L2c+Cjwvc3ZnPgo=',
        company: 'SELLIX.IO',
        role: 'Lead FullStack Developer',
        period: '2020 - 2025',
        highlights: [
            <><strong>350K+ merchants</strong> — owned entire frontend: storefront engine, checkout, dashboards, embeds, React Native app</>,
            <>Built <strong>Storefront Engine</strong> — visual editor + code-level theme builder + self-hosted templates via API + Style Center + custom domains with auto-SEO</>,
            <>Built <strong>multi-chain crypto wallet</strong> — Phantom, MetaMask, BTC, ETH, BNB, Tron; QR payments, cross-chain deposit detection</>,
        ],
        details: [
            <><strong>50+ payment gateways</strong> integrated — Stripe subscriptions, PayPal, CashApp; unified checkout with dynamic rendering</>,
            <><strong>Embed System</strong> — CDN-loaded JS widgets for external sites, data-attribute driven, fully white-label</>,
            <>Merchant + admin dashboards — real-time analytics, orders, fraud alerts, verification, dispute resolution</>,
            <><strong>React Native mobile app</strong> — push notifications, order management, sales overview, payout tracking</>,
            <>Backend: <strong>NestJS &amp; Express</strong> — REST APIs, payment webhooks, crypto tx verification, analytics aggregation</>,
            <>UX beyond specs: loading skeletons, optimistic updates, crypto error recovery, mobile-first, onboarding flows</>,
        ],
        stack: 'React, React Native, Next.js, TypeScript, NestJS, Express, Node.js, PostgreSQL, MongoDB, Redis, Web3.js, Ethers.js, Stripe API, Docker',
    },
    {
        logo: '/images/logo/fb-logo.png',
        company: 'STARTWIRE.COM',
        role: 'Lead Frontend Developer',
        period: '2017 - 2019',
        highlights: [
            <><strong>5M+ users</strong> — solo migrated entire platform Angular 1.x → React, zero downtime, no feature regression</>,
            <>Built <strong>RESTful API layer</strong> (Node.js) — decoupled frontend from legacy Ruby backend, enabled independent deploys</>,
            <><strong>No designer, full UX ownership</strong> — redesigned job tracker mobile-first, cut registration from 5 steps to 2</>,
        ],
        details: [
            <>Phased migration — Angular and React side-by-side, page-by-page while shipping new features</>,
            <>Progressive loading, inline validation, keyboard navigation for power users</>,
        ],
        stack: 'React, Redux, Node.js, Express, REST API, Responsive Design',
    },
    {
        logo: '/images/logo/carjojo.png',
        company: 'CARJOJO.COM',
        role: 'Full Stack Engineer',
        period: '2017 - 2018',
        highlights: [
            <>Migrated Angular → React, improved performance and maintainability</>,
            <>Interactive <strong>vehicle comparison</strong> — side-by-side specs, pricing, dealer maps</>,
            <>Managed a dev team; owned UI/UX: pricing visualization, filters, mobile dealer flows</>,
        ],
        details: [],
        stack: 'React, Redux, Node.js, REST API',
    },
    {
        logo: '/images/logo/bizzly.jpeg',
        company: 'BIZLY.COM',
        role: 'Frontend Developer',
        period: '2017',
        highlights: [
            <>React-based booking interfaces for <strong>corporate event management</strong> ($12M+ funded)</>,
            <><strong>GraphQL APIs</strong> — real-time venue availability, pricing, booking confirmation</>,
            <>Reusable UI component library — forms, date pickers, venue cards, booking wizards</>,
        ],
        details: [],
        stack: 'React, Redux, GraphQL, Node.js',
    },
    {
        logo: '/images/logo/slooh.png',
        company: 'SLOOH.COM',
        role: 'Frontend Developer',
        period: '2017',
        highlights: [
            <>Real-time <strong>telescope control interfaces</strong> — camera positioning, exposure, image capture queues</>,
            <><strong>Live image streaming</strong> — telescope feeds, celestial overlays, time-lapse tools</>,
            <>GraphQL APIs for scheduling, gallery management, community features</>,
        ],
        details: [],
        stack: 'React, Redux, GraphQL, Node.js, WebSocket, Canvas API',
    },
    {
        logo: '/images/logo/lifograph.jpg',
        company: 'LIFOGRAPH.COM',
        role: 'Full Stack JavaScript Developer',
        period: '2015 - 2017',
        highlights: [
            <><strong>Built entire product from zero</strong> — frontend, backend, database architecture</>,
            <>Backend with <strong>Node.js &amp; GraphQL</strong> — profiles API, relationship graph, search engine</>,
            <>Team of 2; <strong>SSR</strong> for SEO; responsive mobile-first UI</>,
        ],
        details: [],
        stack: 'React, Redux, Node.js, GraphQL, MongoDB, Express, SSR',
    },
    {
        logo: '/images/logo/uyterra.png',
        company: 'YUTERRA.LIFE & COLORS.LIFE',
        role: 'Front End Developer',
        period: '2014 - 2015',
        highlights: [
            <><strong>Yuterra</strong> — major e-commerce: product catalogs, cart, checkout</>,
            <><strong>Colors.life</strong> — social network for creators: feed, post editor, community</>,
            <><strong>Internal CMS</strong> — content moderation, scheduling, analytics dashboards</>,
        ],
        details: [],
        stack: 'Angular 1.x, jQuery, Node.js, Responsive Design',
    },
    {
        logo: '/images/logo/tinko.png',
        company: 'TINKO.RU',
        role: 'JavaScript Developer',
        period: '2013 - 2014',
        highlights: [
            <><strong>Large ERP system</strong> — order processing, facility management, employee scheduling</>,
            <><strong>Reusable UI component library</strong> — forms, data tables, modals, notifications</>,
            <><strong>E-commerce on Magento</strong> — product pages, categories, cart, checkout</>,
        ],
        details: [],
        stack: 'jQuery, JavaScript, HTML, CSS, PHP, Magento, MySQL',
    },
];

const ExperienceItem = ({ logo, company, url, role, period, highlights, details, stack }) => {
    const [expanded, setExpanded] = useState(false);
    const hasDetails = details && details.length > 0;

    return (
        <div className="group">
            <div className="flex max-md:flex-col gap-5 py-5">
                <div className="flex items-start gap-3 w-1/3 max-md:w-full shrink-0">
                    <img
                        src={logo}
                        alt={company}
                        className="group-hover:scale-90 w-12 h-12 object-contain shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div>
                        <h5 className="m-0 text-sm font-bold uppercase tracking-wider transition-colors" style={{ fontFamily: "'Oswald', sans-serif" }}>
                            {url ? <a href={url} target="_blank" className="hover:text-brand transition-colors">{company}</a> : company}
                        </h5>
                        <h4 className="m-0 mt-0.5 text-sm font-normal italic">{role}</h4>
                        <span className="text-xs text-ink-light uppercase tracking-widest" style={{ fontFamily: "'Oswald', sans-serif" }}>{period}</span>
                    </div>
                </div>
                <div className="w-2/3 max-md:w-full text-ink-light">

                    <span className="block mb-4 text-xs text-ink-light">{stack}</span>

                    <ul className="list-disc pl-4 space-y-1 text-sm">
                        {highlights.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                        {expanded && details.map((item, i) => (
                            <li key={`d-${i}`} className="text-ink-light/90">{item}</li>
                        ))}
                    </ul>
                    {hasDetails && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="ml-auto mt-2 text-xs text-dark hover:text-brand/70 transition-colors cursor-pointer flex items-center gap-1"
                            style={{ fontFamily: "'Oswald', sans-serif" }}
                        >
                            {expanded ? <>Less <ChevronUp size={12} /></> : <>+{details.length} more <ChevronDown size={12} /></>}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <article className="bg-newsprint select-none">
            <div className="pt-24 px-8 pb-10 max-md:pt-33 max-md:px-5">
                <div className="text-center mb-2">
                    <h2 className="text-4xl font-black uppercase tracking-wider inline-block">Experience</h2>
                </div>
                <div className="rule-double mb-4" />

                <div className="text-center mb-6">
                    <h3 className="text-lg font-normal italic">14 years &middot; 10 companies &middot; 3 continents</h3>
                    <p className="text-sm text-ink-light mt-2 max-w-lg mx-auto" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
                        React &middot; Node.js &middot; NestJS &middot; TypeScript &middot; Web3 &middot; OpenAI API
                    </p>
                </div>

                <hr className="rule-thin mb-6" />

                <div className="w-full relative mx-auto">
                    {experiences.map(({ logo, company, url, role, period, highlights, details, stack }, index) => {
                        const opacity = 100 - (100 / experiences.length) * index;
                        return (
                            <div key={company} style={{ opacity: opacity / 100 }}>
                                {index > 0 && <hr className="rule-thin" />}
                                <ExperienceItem
                                    logo={logo}
                                    company={company}
                                    url={url}
                                    role={role}
                                    period={period}
                                    highlights={highlights}
                                    details={details}
                                    stack={stack}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </article>
    );
}

export default Experience;
