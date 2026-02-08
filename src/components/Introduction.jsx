const Introduction = () => {
    return (
        <article className="relative h-full min-h-screen max-md:min-h-dvh bg-ink">
            <div className="absolute bottom-0 right-0 z-20 p-8 max-w-md max-md:p-5 max-md:max-w-full">
                <h2 className="border-none text-newsprint uppercase text-5xl max-md:text-3xl font-black leading-tight tracking-wide" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    <span className="text-brand">Hello.</span><br/>
                    I'm Victor
                </h2>
                <div className="rule-double my-4" style={{ borderColor: 'var(--color-newsprint)' }} />
                <span className="block text-newsprint/90 uppercase text-xs tracking-[0.3em]" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    FullStack JavaScript Lead &middot; 14 Years
                </span>
                <p className="text-newsprint/50 text-sm mt-3 italic leading-relaxed">
                    350K+ merchants &middot; 5M+ users &middot; Crypto &middot; AI &middot; UX
                </p>
            </div>

            <div
                className="absolute top-0 left-0 w-full h-full bg-ink bg-contain bg-no-repeat contrast-75 grayscale sepia-[0.15] max-md:bg-cover max-md:bg-center"
                style={{ backgroundImage: 'url(/images/me.jpg)' }}
            />
        </article>
    );
}

export default Introduction;
