import { NavLink } from 'react-router-dom';
import { files } from '../data/files';

// Filing tabs sticking out of the folder edge: the site's main navigation.
const FolderTabs = () => (
	<nav className="folder-tabs" aria-label="Files">
		<ul>
			{files.map(({ to, code, label, tone }) => (
				<li key={to}>
					<NavLink to={to} end className={`folder-tab tone-${tone}`}>
						<span className="folder-tab-code">FILE_{code} //</span>
						<span className="folder-tab-label">{label}</span>
					</NavLink>
				</li>
			))}
		</ul>
	</nav>
);

export default FolderTabs;
