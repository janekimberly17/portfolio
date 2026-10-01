import { Link } from 'react-router-dom';
import { files } from '../data/files';

import './Header.css';
import './style.css';

// The label strip on the desk above the folder: who the archive belongs to
// and which file is currently pulled out.
const Header = ({ file }) => (
	<header className="site-header">
		<div className="container nav-inner">
			<Link to="/" className="brand-name">
				Kim's Portfolio
			</Link>
			<p className="desk-meta">
				<span>Archive / Visual record</span>
				<span className="desk-file" aria-live="polite">
					FILE_{file.code} of {String(files.length).padStart(2, '0')} — {file.label}
				</span>
			</p>
		</div>
	</header>
);

export default Header;
