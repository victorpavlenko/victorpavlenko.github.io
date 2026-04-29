import { createElement as h } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { headerInfo, summary, skills, experience, languages } from './cv-data.js';

// ATS-friendly: pure black, single-column, standard fonts, plain bullets,
// 10-12pt body / 13-14pt headings, 1.15 line spacing, 0.6 inch margins.
const styles = StyleSheet.create({
    page: {
        paddingTop: 44,
        paddingBottom: 44,
        paddingLeft: 50,
        paddingRight: 50,
        fontFamily: 'Helvetica',
        fontSize: 10,
        color: '#000000',
        lineHeight: 1.35,
    },
    name: {
        fontSize: 22,
        fontFamily: 'Helvetica-Bold',
        lineHeight: 1.15,
        marginBottom: 4,
    },
    title: {
        fontSize: 12,
        fontFamily: 'Helvetica',
        lineHeight: 1.2,
        marginBottom: 8,
    },
    contactLine: {
        fontSize: 10,
        marginBottom: 2,
    },
    rule: {
        borderBottomWidth: 0.75,
        borderBottomColor: '#000000',
        marginTop: 10,
        marginBottom: 14,
    },
    sectionHeading: {
        fontSize: 13,
        fontFamily: 'Helvetica-Bold',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 7,
        marginTop: 6,
    },
    summary: {
        fontSize: 10,
        marginBottom: 14,
        textAlign: 'left',
    },
    skillLine: {
        fontSize: 10,
        marginBottom: 4,
    },
    skillLabel: {
        fontFamily: 'Helvetica-Bold',
    },
    sectionGap: {
        marginBottom: 14,
    },
    expEntry: {
        marginBottom: 12,
    },
    expHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 2,
    },
    expRoleLine: {
        fontSize: 11,
        fontFamily: 'Helvetica-Bold',
        flex: 1,
        paddingRight: 8,
    },
    expRoleUrl: {
        fontFamily: 'Helvetica',
    },
    expMeta: {
        fontSize: 10,
        textAlign: 'right',
    },
    bulletRow: {
        flexDirection: 'row',
        marginBottom: 2,
    },
    bulletDot: {
        fontSize: 10,
        width: 11,
    },
    bulletText: {
        fontSize: 10,
        flex: 1,
    },
    stackLine: {
        fontSize: 9.5,
        marginTop: 4,
    },
    languages: {
        fontSize: 10,
    },
});

const HeaderBlock = () => h(View, null,
    h(Text, { style: styles.name }, headerInfo.name),
    h(Text, { style: styles.title }, headerInfo.title),
    h(Text, { style: styles.contactLine },
        `${headerInfo.location}  |  ${headerInfo.email}  |  ${headerInfo.phone}`
    ),
    h(Text, { style: styles.contactLine },
        `${headerInfo.linkedin}  |  ${headerInfo.github}  |  ${headerInfo.site}`
    ),
    h(View, { style: styles.rule })
);

const SummarySection = () => h(View, { style: styles.sectionGap },
    h(Text, { style: styles.sectionHeading }, 'Summary'),
    h(Text, { style: styles.summary }, summary)
);

const SkillsSection = () => h(View, { style: styles.sectionGap },
    h(Text, { style: styles.sectionHeading }, 'Skills'),
    ...skills.map(({ label, items }) =>
        h(Text, { key: label, style: styles.skillLine },
            h(Text, { style: styles.skillLabel }, `${label}: `),
            items
        )
    )
);

const ExperienceEntry = ({ entry }) => h(View, { style: styles.expEntry, wrap: false },
    h(View, { style: styles.expHeaderRow },
        h(Text, { style: styles.expRoleLine },
            `${entry.role}, ${entry.company}`,
            entry.url ? h(Text, { style: styles.expRoleUrl }, ` (${entry.url})`) : null
        ),
        h(Text, { style: styles.expMeta }, `${entry.period}  |  ${entry.location}`)
    ),
    ...entry.bullets.map((b, i) =>
        h(View, { key: i, style: styles.bulletRow },
            h(Text, { style: styles.bulletDot }, '•'),
            h(Text, { style: styles.bulletText }, b)
        )
    ),
    h(Text, { style: styles.stackLine }, `Stack: ${entry.stack}`)
);

const ExperienceSection = () => h(View, null,
    h(Text, { style: styles.sectionHeading }, 'Work Experience'),
    ...experience.map((entry, i) =>
        h(ExperienceEntry, { key: `${entry.company}-${i}`, entry })
    )
);

const LanguagesSection = () => h(View, { style: { marginTop: 8 } },
    h(Text, { style: styles.sectionHeading }, 'Spoken Languages'),
    h(Text, { style: styles.languages }, languages)
);

export const CvPdfDoc = () =>
    h(Document, {
        title: `${headerInfo.name} - ${headerInfo.title}`,
        author: headerInfo.name,
        subject: 'Curriculum Vitae',
        keywords: 'Lead Software Engineer, JavaScript, TypeScript, Python, PHP, Go, Rust, React, Next.js, Node.js, NestJS, Claude Code, Multi-Agent, RAG, Web3, Crypto, Fintech, E-commerce, Big Data',
    },
        h(Page, { size: 'A4', style: styles.page },
            h(HeaderBlock),
            h(SummarySection),
            h(SkillsSection),
            h(ExperienceSection),
            h(LanguagesSection)
        )
    );
