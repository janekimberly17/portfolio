import { useLocation } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import { fileFor } from '../data/files';

// The typed header strip at the top of every document: file code, path and a barcode.
const DocHeader = () => {
	const file = fileFor(useLocation().pathname);

	return (
		<header className="doc-head">
			<div>
				<span className="doc-code">FILE_{file.code} // {file.title}</span>
				<Breadcrumbs code={file.code} current={file.label} />
			</div>
			<div className="doc-ref">
				<span className="barcode" aria-hidden="true" />
				<span>REF. KJH–{file.code}–A</span>
			</div>
		</header>
	);
};

export default DocHeader;
