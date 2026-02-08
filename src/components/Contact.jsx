import { MapPin, Mail, FileText, Linkedin, Github } from 'lucide-react';

const WhatsApp = ({size = 20, className}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

const Telegram = ({size = 20, className}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
);

const XIcon = ({size = 20, className}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
    </svg>
);

const UpworkIcon = ({size = 20, className}) => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" aria-label="Upwork" role="img" viewBox="0 0 512 512" className={className}>
        <path fill="currentColor" d="M357.2,296.9c-17,0-33-7.2-47.4-18.9l3.5-16.6l0.1-.6c3.2-17.6,13.1-47.2,43.8-47.2c23,0,41.7,18.7,41.7,41.7S380.2,296.9,357.2,296.9L357.2,296.9z M357.2,171.4c-39.2,0-69.5,25.4-81.9,67.3c-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7c0,21.7-17.6,39.3-39.3,39.3s-39.3-17.6-39.3-39.3V147.8H71v109.7c0,44.9,36.5,81.8,81.4,81.8s81.4-36.9,81.4-81.8v-18.4c8.2,17.1,18.2,34.4,30.4,49.6l-25.8,121.4h43.1l18.7-88c16.4,10.5,35.2,17.1,56.8,17.1c46.2,0,83.8-37.8,83.8-84.1C440.9,209,403.4,171.4,357.2,171.4"/>
    </svg>
);

const linkItems = [
    { label: 'UpWork', icon: <UpworkIcon size={30} />, href: 'https://www.upwork.com/freelancers/~016ea051ceaaf85ca4' },
    { label: 'CV', icon: <FileText size={30} strokeWidth={2} />, href: '/Victor Pavlenko — FullStack JavaScript Lead _ CV.pdf', download: true },
    { label: 'LinkedIn', icon: <Linkedin size={30} strokeWidth={2} />, href: 'https://www.linkedin.com/in/victor-pavlenko/' },
    { label: 'GitHub', icon: <Github size={30} strokeWidth={2} />, href: 'https://github.com/victorpavlenko' },
];

const contactItems = [
    { icon: <Mail size={20} strokeWidth={2} />, label: 'Email', value: 'pavlenkovictor92@gmail.com', href: 'mailto:pavlenkovictor92@gmail.com' },
    { icon: <Telegram size={20} />, label: 'Telegram', value: '@vtxrtsss', href: 'https://t.me/vtxrtsss', target: '_blank' },
    { icon: <WhatsApp size={20} />, label: 'Phone, WhatsApp', value: '+48 506 933 862', href: 'tel:+48506933862' },
    { icon: <XIcon size={20} />, label: 'X', value: 'https://x.com/vixxxtro', href: 'https://x.com/vixxxtro', target: '_blank' },
    { icon: <MapPin size={20} strokeWidth={2} />, label: 'Location', value: 'Warsaw, Poland', href: 'https://www.google.com/maps?q=52.2276243,20.9717568', target: '_blank' },
];

const Contact = () => {
    return (
        <article className="h-full max-md:h-auto bg-newsprint">
            <div className="pt-24 px-8 pb-10 max-md:pt-33 max-md:px-5">
                <div className="text-center mb-2">
                    <h2 className="text-4xl font-black uppercase tracking-wider inline-block">Contact</h2>
                </div>
                <div className="rule-double mb-8" />

                <div className="mx-auto max-w-175 w-full relative mx-auto">
                    <div className="flex flex-wrap max-md:flex-col">

                        <div className="w-1/2 max-md:w-full mb-8 pr-6 max-md:pr-0 border-r max-md:border-r-0 border-rule">
                            <h3 className="mt-0 text-lg font-bold uppercase tracking-wider mb-4" style={{ fontFamily: "'Oswald', sans-serif" }} />

                            {contactItems.map(({ icon, label, value, href, target }) => (
                                <a href={href} target={target} className="flex items-center mt-3 first:mt-0 w-full group text-ink no-underline" key={label}>
                                    <div className="w-10 h-10 flex items-center justify-center shrink-0 mr-1 group-hover:text-brand transition-colors">
                                        {icon}
                                    </div>
                                    <div className="text-sm">
                                        <strong className="text-ink text-xs font-bold uppercase tracking-widest block" style={{ fontFamily: "'Oswald', sans-serif" }}>{label}</strong>
                                        <span className="text-ink-light group-hover:text-brand transition-colors">{value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="w-1/2 max-md:w-full pl-6 max-md:pl-0 flex flex-col gap-3">
                            {linkItems.slice(0, 2).map(({ label, icon, href, download }) => (
                                <a key={label} href={href} target="_blank" {...(download ? { download: '' } : {})} className="group flex items-center gap-4 px-4 py-3 bg-ink/90 text-newsprint hover:bg-brand hover:text-ink transition-colors">
                                    <div className="w-10 h-10 flex items-center justify-center shrink-0">{icon}</div>
                                    <span className="text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "'Oswald', sans-serif" }}>{label}</span>
                                </a>
                            ))}
                            <div className="flex gap-3 mt-1">
                                {linkItems.slice(2).map(({ label, icon, href }) => (
                                    <a key={label} href={href} target="_blank" className="group flex items-center gap-2 px-3 py-2 border border-rule hover:border-brand hover:text-brand transition-colors">
                                        <div className="w-6 h-6 flex items-center justify-center shrink-0 text-ink-light group-hover:text-brand">{icon}</div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-ink-light group-hover:text-brand" style={{ fontFamily: "'Oswald', sans-serif" }}>{label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </article>
    );
}

export default Contact;
