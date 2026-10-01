import { ArrowUpRight } from 'lucide-react';
import DocHeader from './DocHeader';
import { socialLinks } from '../data/links';
import './style.css';

const Contact = () => (
	<section id="contact" className="doc">
		<DocHeader />
		<span className="eyebrow">Get in touch</span>
		<h2 className="doc-title">Contact</h2>
		<p className="section-description">
			Feel free to reach out for collaboration or inquiries.
		</p>

		<div className="slip">
			<div className="slip-head">
				<span>Routing slip</span>
				<span>No. {new Date().getFullYear()}–03</span>
			</div>
			<div className="slip-to">
				<span className="field-label">To</span>
				<span>Kimberly Jane Harry</span>
			</div>
			<ul className="contact-list">
				{socialLinks.map(({ label, value, href, icon }, index) => (
					<li key={label}>
						<a href={href} target="_blank" rel="noopener noreferrer">
							<span className="slip-no">{String(index + 1).padStart(2, '0')}</span>
							<span className="card-icon">{icon}</span>
							<span className="contact-label">{label}</span>
							<span className="contact-value">{value}</span>
							<ArrowUpRight className="slip-arrow" size={18} />
						</a>
					</li>
				))}
			</ul>
			<div className="ink-stamp" aria-hidden="true">
				<span>Open for</span>
				<span>correspondence</span>
			</div>
		</div>
	</section>
);

export default Contact;
