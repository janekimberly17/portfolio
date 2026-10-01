import { socialLinks } from '../data/links';
import './style.css';

const Footer = () => (
	<footer className="footer">
		<div className="container">
			<p className="end-of-file">End of file</p>
			<p>© {new Date().getFullYear()} Kimberly Jane Harry - Your next great hire is just an email away.</p>
			<ul className="social-icons">
				{socialLinks.map(({ label, href, icon }) => (
					<li key={label}>
						<a className="icon-btn" href={href} target="_blank"
							rel="noopener noreferrer" aria-label={label}>
							{icon}
						</a>
					</li>
				))}
			</ul>
		</div>
	</footer>
);

export default Footer;
