import { Link } from 'react-router-dom';

// A typed file path, e.g. "Archive / 02_Projects".
const Breadcrumbs = ({ code, current }) => (
	<nav aria-label="breadcrumb">
		<ol className="breadcrumb">
			<li className="breadcrumb-item">
				<Link to="/">Archive</Link>
			</li>
			<li className="breadcrumb-item active" aria-current="page">
				<span aria-hidden="true">/</span>
				<span>{code}_{current}</span>
			</li>
		</ol>
	</nav>
);

export default Breadcrumbs;
