import { headerInfo, summary, skills, experience, languages, pdfFileName } from '../cv-data.js';

const CvPage = () => {
    return (
        <div
            className="cv-page"
            style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                color: '#000',
                background: '#fff',
                maxWidth: '8.5in',
                margin: '0 auto',
                padding: '0.6in',
                lineHeight: 1.4,
                fontSize: '10.5pt',
            }}
        >
            <header style={{ marginBottom: '0.3in' }}>
                <h1 style={{ fontSize: '22pt', fontWeight: 700, margin: 0, letterSpacing: '0.5px' }}>
                    {headerInfo.name}
                </h1>
                <h2 style={{ fontSize: '13pt', fontWeight: 500, margin: '4px 0 8px 0', color: '#222' }}>
                    {headerInfo.title}
                </h2>
                <p style={{ margin: 0, fontSize: '10pt', color: '#333' }}>
                    {headerInfo.location} &nbsp;·&nbsp; {headerInfo.email} &nbsp;·&nbsp; {headerInfo.phone}
                </p>
                <p style={{ margin: '2px 0 0 0', fontSize: '10pt', color: '#333' }}>
                    {headerInfo.linkedin} &nbsp;·&nbsp; {headerInfo.github} &nbsp;·&nbsp; {headerInfo.site}
                </p>
            </header>

            <hr style={{ border: 'none', borderTop: '1px solid #000', margin: '0.2in 0' }} />

            <section style={{ marginBottom: '0.25in' }}>
                <h3 style={{ fontSize: '11pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px 0' }}>
                    Summary
                </h3>
                <p style={{ margin: 0 }}>{summary}</p>
            </section>

            <section style={{ marginBottom: '0.25in' }}>
                <h3 style={{ fontSize: '11pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px 0' }}>
                    Skills
                </h3>
                {skills.map(({ label, items }) => (
                    <p key={label} style={{ margin: '3px 0' }}>
                        <strong>{label}:</strong> {items}
                    </p>
                ))}
            </section>

            <section>
                <h3 style={{ fontSize: '11pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px 0' }}>
                    Experience
                </h3>
                {experience.map(({ company, url, role, period, location, bullets, stack }) => (
                    <div key={`${company}-${period}`} className="cv-experience-item" style={{ marginBottom: '0.18in', breakInside: 'avoid' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
                            <h4 style={{ fontSize: '11pt', fontWeight: 700, margin: 0 }}>
                                {role} · {company}
                                {url && <span style={{ fontWeight: 400, color: '#333' }}> ({url})</span>}
                            </h4>
                            <span style={{ fontSize: '9.5pt', color: '#333' }}>
                                {period} · {location}
                            </span>
                        </div>
                        <ul style={{ margin: '4px 0 4px 0', paddingLeft: '0.22in' }}>
                            {bullets.map((b, i) => (
                                <li key={i} style={{ marginBottom: 2 }}>{b}</li>
                            ))}
                        </ul>
                        <p style={{ margin: '2px 0 0 0', fontSize: '9.5pt', color: '#444' }}>
                            <em>Stack:</em> {stack}
                        </p>
                    </div>
                ))}
            </section>

            <section style={{ marginTop: '0.2in' }}>
                <h3 style={{ fontSize: '11pt', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px 0' }}>
                    Languages
                </h3>
                <p style={{ margin: 0 }}>{languages}</p>
            </section>

            <div className="no-print" style={{ marginTop: '0.4in', padding: '0.15in', background: '#f3f3f3', fontSize: '9pt', color: '#555', textAlign: 'center' }}>
                <a
                    href={`/${pdfFileName}`}
                    download
                    style={{ color: '#000', textDecoration: 'underline', fontWeight: 600 }}
                >
                    Download as PDF
                </a>
                {' '}or press <strong>Cmd/Ctrl + P</strong> to print.
            </div>
        </div>
    );
};

export default CvPage;
