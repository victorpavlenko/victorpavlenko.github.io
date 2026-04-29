export const headerInfo = {
    name: 'Victor Pavlenko',
    title: 'Lead Software Engineer',
    location: 'Warsaw, Poland',
    email: 'pavlenkovictor92@gmail.com',
    phone: '+48 506 933 862',
    linkedin: 'linkedin.com/in/victor-pavlenko',
    github: 'github.com/victorpavlenko',
    site: 'victorpavlenko.github.io',
};

export const summary = 'Lead Software Engineer with 14 years architecting and shipping production systems across web, mobile, and backend. Specializes in distributed systems, microservices architecture, scalable platforms, and high-availability infrastructure. JavaScript-first engineer with hands-on work in TypeScript, Python, PHP, Go, and Rust. Delivered crypto wallets, AI dashboards, RAG systems, chatbots, payment platforms, ERPs, and e-commerce engines used by 350K+ merchants and 5M+ users across e-commerce, fintech, crypto/Web3, AI/LLM, and big data. Track record of leading cross-functional teams, mentoring engineers, owning architecture decisions, and driving code review culture in Agile/Scrum environments. Leverages Claude Code as a daily IDE with multi-agent workflows, MCP tools, and custom subagents to ship 3–5x faster than traditional teams.';

export const skills = [
    { label: 'Languages', items: 'JavaScript, TypeScript, Python, PHP, Go, Rust, SQL, HTML, CSS, Bash' },
    { label: 'AI / LLM', items: 'Claude Code, Anthropic SDK, OpenAI API, MCP (Model Context Protocol), Multi-Agent Systems, Subagents & Tool Use, RAG Pipelines, Vector Databases, Chatbots, Streaming LLM UIs, Prompt Engineering, AI Agents' },
    { label: 'Frontend', items: 'React, Next.js, React Native, TypeScript, Angular, Vue.js, jQuery, Redux, TailwindCSS, D3, Recharts, Responsive Design' },
    { label: 'Backend', items: 'Node.js, NestJS, Express, GraphQL, REST API, SSE, WebSocket, Microservices' },
    { label: 'Architecture & Practices', items: 'System Design, Distributed Systems, Microservices Architecture, Event-Driven Architecture, Scalability, High Availability, Test-Driven Development (TDD), Unit Testing, Code Review, Technical Leadership, Mentoring, Architecture Decisions, Cross-Functional Collaboration, Agile, Scrum, SDLC, OOP' },
    { label: 'Industries', items: 'E-commerce, Fintech, Crypto / Web3, AI / LLM, Big Data, SaaS, ERP, Marketplace' },
    { label: 'Web3 & Payments', items: 'Ethers.js, Web3.js, Multi-chain (EVM, Solana, Bitcoin, BNB, Tron), MetaMask, WalletConnect, Phantom, Stripe API, Payment Gateways, Crypto Checkout, Subscription Billing, WebCrypto API' },
    { label: 'Infrastructure & Cloud', items: 'PostgreSQL, MongoDB, Redis, Firebase, Docker, Kubernetes, AWS, Google Cloud, Vercel, GitHub Actions, CI/CD, Git, Linux' },
    { label: 'Product & Design', items: 'Mobile-first UX, Responsive Design, Design Systems, Figma, Accessibility' },
];

export const experience = [
    {
        company: 'PremAI',
        url: 'premai.io',
        role: 'Lead Software Engineer',
        period: 'Jan 2025 – Present',
        location: 'Remote',
        bullets: [
            'Architected scalable API Dashboard for $19.5M-funded LLM platform — key management, usage analytics, billing, rate limiting, audit logging.',
            'Designed quantum-resistant client-side encryption layer for LLM interactions — zero-knowledge architecture, end-to-end with WebCrypto API.',
            'Shipped Model Playground — token-streaming UI, parameter tuning, side-by-side multi-model comparison.',
            'Built Fine-tuning UI — dataset upload pipeline, real-time training metrics (loss curves), model evaluation flows.',
            'Built React Native enterprise app — model management, push notifications, on-device usage monitoring.',
            'AI-augmented delivery: built dashboard, mobile app, and encryption layer with Claude Code multi-agent workflows — feature parity at a third of the typical team size.',
        ],
        stack: 'React, React Native, TypeScript, Next.js, Node.js, TailwindCSS, Recharts, D3.js, WebCrypto API, SSE, Claude Code',
    },
    {
        company: 'BitGPT',
        url: 'bitgpt.xyz',
        role: 'Lead Software Engineer',
        period: 'Jan 2025 – Present',
        location: 'Remote',
        bullets: [
            'Shipped Terminal — natural-language crypto transactions powered by OpenAI streaming, cross-chain swaps, market analysis.',
            'Built browser crypto wallet from zero — EVM, Solana, Bitcoin, BNB; real-time balances, transaction signing, network switching.',
            'Owned checkout & payment surface — h402 protocol integration, merchant onboarding, invoice generation, crypto settlement flows.',
            'Wallet integrations: MetaMask, Rabby, WalletConnect; error recovery, network prompts, transaction confirmation.',
            'OpenAI streaming patterns: token-by-token rendering, conversational tx flows, context management for transaction state.',
        ],
        stack: 'React, TypeScript, Next.js, Node.js, OpenAI API, WebSocket, Web3.js, Ethers.js, WalletConnect, Claude Code',
    },
    {
        company: 'Sellix',
        url: 'sellix.io',
        role: 'Lead Software Engineer',
        period: 'Jan 2020 – Jan 2025',
        location: 'Remote',
        bullets: [
            'Architected and scaled merchant-facing platform serving 350K+ merchants — storefront engine, checkout, dashboards, embed system, React Native app.',
            'Designed scalable Storefront Engine — visual editor, code-level theme builder, self-hosted templates via API, Style Center, custom-domain auto-SEO.',
            'Built multi-chain crypto wallet — Phantom, MetaMask, BTC, ETH, BNB, Tron; QR payments, cross-chain deposit detection.',
            'Integrated 50+ payment gateways — Stripe subscriptions, PayPal, CashApp; unified checkout with dynamic provider rendering.',
            'Built Embed System — CDN-loaded JS widgets for external merchant sites, data-attribute API, fully white-label.',
            'Delivered merchant + admin dashboards — real-time analytics, fraud alerts, KYC, dispute resolution.',
            'Built React Native mobile app — push notifications, order management, payout tracking.',
            'Architected backend microservices (NestJS, Express) — REST APIs, payment webhooks, crypto transaction verification, analytics aggregation, high-availability under load.',
            'Drove code review culture and mentored engineers across frontend and mobile teams.',
            'Adopted Claude Code mid-2024 — cut iteration time on dashboard work from days to hours.',
        ],
        stack: 'React, React Native, Next.js, TypeScript, NestJS, Express, Node.js, PostgreSQL, MongoDB, Redis, Web3.js, Ethers.js, Stripe API, Docker, Claude Code',
    },
    {
        company: 'Startwire',
        url: 'startwire.com',
        role: 'Lead Software Engineer',
        period: 'Jan 2017 – Jan 2019',
        location: 'Remote',
        bullets: [
            '5M+ users — solo-led platform migration from Angular 1.x to React, zero downtime, no feature regression.',
            'Built RESTful API layer (Node.js) — decoupled frontend from legacy Ruby backend, enabled independent deploys.',
            'Full UX ownership (no designer) — redesigned job tracker mobile-first, cut registration from 5 steps to 2.',
            'Phased migration — Angular and React shipping side-by-side, page-by-page, while delivering new features.',
        ],
        stack: 'React, Redux, Angular 1.x, Node.js, Express, Ruby, REST API, Responsive Design',
    },
    {
        company: 'Carjojo',
        url: 'carjojo.com',
        role: 'Software Engineer · Tech Lead',
        period: 'Jan 2017 – Jan 2018',
        location: 'Remote',
        bullets: [
            'Led migration from Angular to React — performance, maintainability, team velocity gains.',
            'Built interactive vehicle comparison — side-by-side specs, pricing, dealer maps.',
            'Managed dev team — owned UI/UX: pricing visualization, filters, mobile dealer flows.',
        ],
        stack: 'React, Redux, Angular, Node.js, Python, Django, REST API',
    },
    {
        company: 'Bizly',
        url: 'bizly.com',
        role: 'Software Engineer',
        period: '2017',
        location: 'Remote',
        bullets: [
            'Booking platform UI for $12M-funded corporate event management.',
            'GraphQL APIs — real-time venue availability, pricing, booking confirmation.',
            'Reusable component library — forms, date pickers, venue cards, booking wizards.',
        ],
        stack: 'React, Redux, GraphQL, Node.js',
    },
    {
        company: 'Slooh',
        url: 'slooh.com',
        role: 'Software Engineer',
        period: '2017',
        location: 'Remote',
        bullets: [
            'Real-time telescope control UI — camera positioning, exposure control, image capture queues.',
            'Live image streaming — telescope feeds, celestial overlays, time-lapse tools.',
            'GraphQL APIs for scheduling, gallery management, community features.',
        ],
        stack: 'React, Redux, GraphQL, Node.js, WebSocket, Canvas API',
    },
    {
        company: 'Lifograph',
        url: 'lifograph.com',
        role: 'Software Engineer · Founding',
        period: 'Jan 2015 – Jan 2017',
        location: 'Remote',
        bullets: [
            'Built entire product from zero — frontend, backend, database architecture.',
            'Backend with Node.js + GraphQL — profiles API, relationship graph, search engine.',
            '2-engineer team; SSR for SEO; mobile-first responsive UI.',
        ],
        stack: 'React, Redux, Node.js, GraphQL, MongoDB, Express, SSR',
    },
    {
        company: 'Yuterra & Colors.life',
        url: '',
        role: 'Software Engineer',
        period: 'Jan 2014 – Jan 2015',
        location: 'Remote',
        bullets: [
            'Yuterra — major e-commerce: product catalogs, cart, checkout.',
            'Colors.life — creator social network: feed, post editor, community.',
            'Internal CMS — moderation, scheduling, analytics dashboards.',
        ],
        stack: 'Angular 1.x, jQuery, Node.js, Responsive Design',
    },
    {
        company: 'Tinko',
        url: 'tinko.ru',
        role: 'Software Engineer',
        period: 'Jan 2013 – Jan 2014',
        location: 'On-site',
        bullets: [
            'Large-scale ERP — order processing, facility management, employee scheduling.',
            'Reusable UI component library — forms, data tables, modals, notifications.',
            'Magento e-commerce (PHP) — product pages, categories, cart, checkout.',
        ],
        stack: 'jQuery, JavaScript, HTML, CSS, PHP, Magento, MySQL',
    },
];

export const languages = 'English (professional) · Russian (native) · Polish (working)';

export const pdfFileName = 'Victor Pavlenko - Lead Software Engineer - CV.pdf';
