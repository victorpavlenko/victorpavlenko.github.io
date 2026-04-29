import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
    {
        logo: '/images/logo/prem.svg',
        company: 'PREMAI.IO',
        url: 'https://premai.io',
        role: 'Lead Software Engineer',
        period: '2025 - present',
        highlights: [
            <><strong>Architected scalable API Dashboard</strong> for $19.5M-funded LLM platform — key management, usage analytics, billing, rate limiting, audit logging</>,
            <><strong>Designed quantum-resistant client-side encryption</strong> layer for LLM interactions — zero-knowledge architecture, end-to-end with WebCrypto API</>,
            <><strong>Shipped Model Playground</strong> — token-streaming UI, parameter tuning, side-by-side multi-model comparison</>,
        ],
        details: [
            <><strong>Fine-tuning UI</strong> — dataset upload pipeline, real-time training metrics (loss curves), model evaluation flows</>,
            <><strong>React Native enterprise app</strong> — model management, push notifications, on-device usage monitoring</>,
            <><strong>AI-augmented delivery</strong>: built dashboard, mobile app, and encryption layer with Claude Code multi-agent workflows — feature parity in ⅓ the headcount</>,
            <>Made enterprise crypto UX transparent — security state visible without cryptography knowledge</>,
        ],
        stack: 'React, React Native, TypeScript, Next.js, Node.js, TailwindCSS, Recharts, D3.js, WebCrypto API, SSE, Claude Code',
    },
    {
        logo: '/images/logo/bitgpt.svg',
        company: 'BITGPT.XYZ',
        url: 'https://bitgpt.xyz',
        role: 'Lead Software Engineer',
        period: '2025 - present',
        highlights: [
            <><strong>Shipped Terminal</strong> — natural-language crypto transactions powered by OpenAI streaming, cross-chain swaps, market analysis</>,
            <><strong>Built browser crypto wallet from zero</strong> — EVM, Solana, Bitcoin, BNB; real-time balances, tx signing, network switching</>,
            <><strong>Owned checkout & payment surface</strong> — h402 protocol integration, merchant onboarding, invoice generation, crypto settlement</>,
        ],
        details: [
            <><strong>Wallet integrations</strong> — MetaMask, Rabby, WalletConnect; error recovery, network prompts, tx confirmation flows</>,
            <><strong>OpenAI streaming patterns</strong> — token-by-token rendering, conversational tx flows, context management for transaction state</>,
            <>LLMs as a UI primitive, not a feature — AI-driven UX baked into every product surface</>,
        ],
        stack: 'React, TypeScript, Next.js, Node.js, OpenAI API, WebSocket, Web3.js, Ethers.js, WalletConnect, Claude Code',
    },
    {
        logo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMzg2LjcgOTcwLjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMzODYuNyA5NzAuNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMxZjFmMWY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNjUuNywyNjYuOGwyNjMtODcuOEw1MTEsMjUzLjhjMjIuOCw1LjQsNDcuNiwxMi42LDc1LDIyLjRjNjAuOCwyMS43LDExNS45LDQ2LjksMTY1LjQsNzUuNWwxMDkuNC0yMzAuNQoJCWMtNTIuMS0zMy0xMTMuNS01OS41LTE4NC4zLTc5LjRjLTcwLjgtMjAtMTQxLjctMzAtMjEyLjktMzBjLTc4LjEsMC0xNDYuNywxMi4yLTIwNS44LDM2LjVjLTU5LjEsMjQuMy0xMDQuNiw1OS4zLTEzNi43LDEwNC44CgkJQzg5LDE5OC44LDcyLjksMjUyLDcyLjksMzEyLjdjMCw2Mi41LDE1LjYsMTEyLjQsNDYuOSwxNDkuOGMzMS4yLDM3LjMsNjguMyw2NC45LDExMS4zLDgyLjdjNDMsMTcuOCw5Ni42LDM0LjksMTYwLjgsNTEuNAoJCWMxNy4zLDQuMywzMi42LDguNCw0Ni45LDEyLjZsMTctNzEuOWwyMDQuMywxNjAuOWwtMjYyLjksODcuOGwxNC4xLTU5LjhjLTMzLjgtNi44LTcxLjEtMTgtMTEzLjEtMzUuMQoJCUMyMjguOCw2NjIuOCwxNzEsNjI4LjcsMTI1LDU4OC44TDEzLDgxNi43YzU5LjksNDYsMTMwLjksODIuMiwyMTMsMTA4LjdjODIsMjYuNSwxNjMuNCwzOS43LDI0NC4xLDM5LjcKCQljNzEuMiwwLDEzNS45LTEwLjksMTk0LjEtMzIuNmM1OC4yLTIxLjcsMTA0LjQtNTQuOSwxMzguNy05OS42YzM0LjMtNDQuNyw1MS41LTEwMCw1MS41LTE2NmMwLTY0LjMtMTYuMS0xMTYuMS00OC4yLTE1NS42CgkJYy0zMi4xLTM5LjUtNjkuNy02OC40LTExMi43LTg2LjZjLTQzLTE4LjItOTctMzYuNS0xNjIuMS01NC43Yy0xNi41LTQuNC0zMS04LjYtNDQuNy0xMi43TDQ3MCw0MjcuN0wyNjUuNywyNjYuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjMxLjksMzAzLjZjLTIwMy4xLDAtMzQyLjUsMTQ3LjEtMzQyLjUsMzI5LjVjMCwyMDcuMSwxNTMuNiwzMzAuOCwzNTAuMywzMzAuOAoJCWM5My43LDAsMjA1LjgtMjQuNywyNjguMy03OC4ybC05Ni40LTE0NC41Yy0zMS4yLDI3LjMtMTA5LjQsNDQuMy0xNDQuNiw0NC4zYy03Ni44LDAtMTIyLjQtMzkuMS0xMzUuNC03OS40aDQyNy4xdi00OC4yCgkJQzE1NTguOCw0MzYuNCwxNDE2LjgsMzAzLjYsMTIzMS45LDMwMy42eiBNMTEyOSw1NTcuNWM3LjgtMjguNiwzMS4yLTc1LjUsMTAyLjgtNzUuNWM3NS42LDAsOTcuNyw0OC4yLDEwNC4yLDc1LjVIMTEyOXoiLz4KCTxyZWN0IHg9IjE2MzkuNSIgeT0iNzkuNiIgY2xhc3M9InN0MCIgd2lkdGg9IjIzNC40IiBoZWlnaHQ9Ijg2OC42Ii8+Cgk8cmVjdCB4PSIyMDA0LjEiIHk9Ijc5LjYiIGNsYXNzPSJzdDAiIHdpZHRoPSIyMzQuNCIgaGVpZ2h0PSI4NjguNiIvPgoJPHJlY3QgeD0iMjM2OC44IiB5PSIzMTkuMiIgY2xhc3M9InN0MCIgd2lkdGg9IjIzNC40IiBoZWlnaHQ9IjYyOSIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI0ODYsMTAuNmMtNzIuOSwwLTEzMS42LDU4LjYtMTMxLjYsMTMxLjVjMCw3Mi45LDU4LjYsMTMxLjYsMTMxLjYsMTMxLjZjNzIuOSwwLDEzMS41LTU4LjYsMTMxLjUtMTMxLjYKCQlDMjYxNy41LDY5LjIsMjU1OC45LDEwLjYsMjQ4NiwxMC42eiIvPgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzMTU1LjMsNjI1LjIgMzM0OCwzMTkuMiAzMDkxLjUsMzE5LjIgMzAwNi44LDQ2Ni40IDI5MjIuMiwzMTkuMiAyNjY1LjYsMzE5LjIgMjg1OC40LDYyNS4yIAoJCTI2NTIuNiw5NDguMiAyOTA3LjgsOTQ4LjIgMzAwOC4xLDc4MS41IDMxMDUuOCw5NDguMiAzMzYyLjMsOTQ4LjIgCSIvPgo8L2c+Cjwvc3ZnPgo=',
        company: 'SELLIX.IO',
        role: 'Lead Software Engineer',
        period: '2020 - 2025',
        highlights: [
            <><strong>Architected and scaled merchant-facing platform</strong> serving 350K+ merchants — storefront engine, checkout, dashboards, embed system, React Native app</>,
            <>Designed <strong>scalable Storefront Engine</strong> — visual editor, code-level theme builder, self-hosted templates via API, Style Center, custom-domain auto-SEO</>,
            <>Built <strong>multi-chain crypto wallet</strong> — Phantom, MetaMask, BTC, ETH, BNB, Tron; QR payments, cross-chain deposit detection</>,
        ],
        details: [
            <><strong>Integrated 50+ payment gateways</strong> — Stripe subscriptions, PayPal, CashApp; unified checkout with dynamic provider rendering</>,
            <><strong>Embed System</strong> — CDN-loaded JS widgets for external merchant sites, data-attribute API, fully white-label</>,
            <>Merchant + admin dashboards — real-time analytics, fraud alerts, KYC, dispute resolution</>,
            <><strong>React Native mobile app</strong> — push notifications, order management, payout tracking</>,
            <>Architected backend microservices (<strong>NestJS, Express</strong>) — REST APIs, payment webhooks, crypto transaction verification, analytics aggregation, high-availability under load</>,
            <><strong>Drove code review culture and mentored engineers</strong> across frontend and mobile teams</>,
            <>Adopted <strong>Claude Code</strong> mid-2024 — cut iteration time on dashboard work from days to hours</>,
            <>UX beyond specs: loading skeletons, optimistic updates, crypto error recovery, mobile-first onboarding</>,
        ],
        stack: 'React, React Native, Next.js, TypeScript, NestJS, Express, Node.js, PostgreSQL, MongoDB, Redis, Web3.js, Ethers.js, Stripe API, Docker, Claude Code',
    },
    {
        logo: '/images/logo/fb-logo.png',
        company: 'STARTWIRE.COM',
        role: 'Lead Software Engineer',
        period: '2017 - 2019',
        highlights: [
            <><strong>5M+ users</strong> — solo-led platform migration Angular 1.x → React, zero downtime, no feature regression</>,
            <>Built <strong>RESTful API layer</strong> (Node.js) — decoupled frontend from legacy Ruby backend, enabled independent deploys</>,
            <><strong>Full UX ownership</strong> (no designer) — redesigned job tracker mobile-first, cut registration from 5 steps to 2</>,
        ],
        details: [
            <>Phased migration — Angular and React shipping side-by-side, page-by-page, while delivering new features</>,
            <>Progressive loading, inline validation, keyboard navigation for power users</>,
        ],
        stack: 'React, Redux, Angular 1.x, Node.js, Express, Ruby, REST API, Responsive Design',
    },
    {
        logo: '/images/logo/carjojo.png',
        company: 'CARJOJO.COM',
        role: 'Software Engineer · Tech Lead',
        period: '2017 - 2018',
        highlights: [
            <><strong>Led Angular → React migration</strong> — performance, maintainability, team velocity gains</>,
            <>Built interactive <strong>vehicle comparison</strong> — side-by-side specs, pricing, dealer maps</>,
            <><strong>Managed dev team</strong> — owned UI/UX: pricing visualization, filters, mobile dealer flows</>,
        ],
        details: [],
        stack: 'React, Redux, Angular, Node.js, Python, Django, REST API',
    },
    {
        logo: '/images/logo/bizzly.jpeg',
        company: 'BIZLY.COM',
        role: 'Software Engineer',
        period: '2017',
        highlights: [
            <><strong>Booking platform UI</strong> for $12M-funded corporate event management</>,
            <><strong>GraphQL APIs</strong> — real-time venue availability, pricing, booking confirmation</>,
            <><strong>Reusable component library</strong> — forms, date pickers, venue cards, booking wizards</>,
        ],
        details: [],
        stack: 'React, Redux, GraphQL, Node.js',
    },
    {
        logo: '/images/logo/slooh.png',
        company: 'SLOOH.COM',
        role: 'Software Engineer',
        period: '2017',
        highlights: [
            <><strong>Real-time telescope control UI</strong> — camera positioning, exposure control, image capture queues</>,
            <><strong>Live image streaming</strong> — telescope feeds, celestial overlays, time-lapse tools</>,
            <><strong>GraphQL APIs</strong> for scheduling, gallery management, community features</>,
        ],
        details: [],
        stack: 'React, Redux, GraphQL, Node.js, WebSocket, Canvas API',
    },
    {
        logo: '/images/logo/lifograph.jpg',
        company: 'LIFOGRAPH.COM',
        role: 'Software Engineer · Founding',
        period: '2015 - 2017',
        highlights: [
            <><strong>Built entire product from zero</strong> — frontend, backend, database architecture</>,
            <>Backend with <strong>Node.js + GraphQL</strong> — profiles API, relationship graph, search engine</>,
            <><strong>2-engineer team</strong>; SSR for SEO; mobile-first responsive UI</>,
        ],
        details: [],
        stack: 'React, Redux, Node.js, GraphQL, MongoDB, Express, SSR',
    },
    {
        logo: '/images/logo/uyterra.png',
        company: 'YUTERRA.LIFE & COLORS.LIFE',
        role: 'Software Engineer',
        period: '2014 - 2015',
        highlights: [
            <><strong>Yuterra</strong> — major e-commerce: product catalogs, cart, checkout</>,
            <><strong>Colors.life</strong> — creator social network: feed, post editor, community</>,
            <><strong>Internal CMS</strong> — moderation, scheduling, analytics dashboards</>,
        ],
        details: [],
        stack: 'Angular 1.x, jQuery, Node.js, Responsive Design',
    },
    {
        logo: '/images/logo/tinko.png',
        company: 'TINKO.RU',
        role: 'Software Engineer',
        period: '2013 - 2014',
        highlights: [
            <><strong>Large-scale ERP</strong> — order processing, facility management, employee scheduling</>,
            <><strong>Reusable UI component library</strong> — forms, data tables, modals, notifications</>,
            <><strong>Magento e-commerce</strong> — product pages, categories, cart, checkout</>,
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
                        JavaScript &middot; TypeScript &middot; React &middot; Angular &middot; Node.js &middot; AI &middot; Claude Code &middot; Web3
                    </p>
                </div>

                <hr className="mx-auto max-w-175 rule-thin mb-6" />

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
