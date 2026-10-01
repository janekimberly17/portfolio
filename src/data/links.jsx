import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Mail } from 'lucide-react';

export const EMAIL = 'jane.kimberly17@gmail.com';

// Shared by the Contact page and the footer, so links only need updating here.
export const socialLinks = [
	{
		label: 'Email',
		value: EMAIL,
		href: `https://mail.google.com/mail/?view=cm&to=${EMAIL}`,
		icon: <Mail size={18} strokeWidth={1.75} />,
	},
	{
		label: 'LinkedIn',
		value: 'LinkedIn',
		href: 'https://www.linkedin.com/in/kimberly-jane-harry-202961180',
		icon: <FontAwesomeIcon icon={faLinkedinIn} />,
	},
	{
		label: 'GitHub',
		value: 'GitHub',
		href: 'https://github.com/janekimberly17',
		icon: <FontAwesomeIcon icon={faGithub} />,
	},
];
