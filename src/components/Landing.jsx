import { Link } from 'react-router-dom';
import { files } from '../data/files';
import { projects } from '../data/projects';
import portrait from '../assets/portrait.jpg';
import './style.css';
import './Landing.css';

// Scattered "photocopy noise" squares on the About strip: [top %, left %, size px]
const pixels = [
	[14, 18, 14], [15, 30, 8], [18, 58, 10], [22, 40, 18], [26, 70, 8], [31, 22, 10],
	[34, 52, 14], [40, 64, 8], [46, 30, 22], [52, 48, 10], [58, 72, 12], [63, 18, 8],
	[68, 54, 18], [74, 36, 10], [79, 66, 8], [84, 26, 14],
];

// A few typed-text placeholder lines for the miniature pages; widths in %.
const Lines = ({ widths }) => (
	<span className="peek-lines">
		{widths.map((width, index) => <span key={index} style={{ width: `${width}%` }} />)}
	</span>
);

// Each folder's full page, drawn on an A4 sheet. Text is shown as grey bars,
// so editing a page never means editing its preview here.
const peeks = {
	'/about': (
		<>
			<span className="pg-grid">
				<span className="pg-main">
					<span>
						<span className="pg-eyebrow">→ Full Stack Engineer</span>
						<span className="pg-title">Hi, I'm Kimberly.</span>
					</span>
					<span className="pg-fields">
						<span><b>Subject</b><i /></span>
						<span><b>Role</b><i /></span>
						<span><b>Based</b><i /></span>
						<span><b>Status</b><i /></span>
					</span>
					<Lines widths={[96, 92, 90, 94, 40]} />
					<span className="pg-buttons"><i /><i /></span>
				</span>
				<span className="pg-side">
					<span className="pg-block">File<br />01<br />— AI &amp;<br />ML</span>
					<span className="pg-photo" style={{ backgroundImage: `url(${portrait})` }} />
				</span>
			</span>
			<span className="pg-card">
				<b>Contents</b>
				{files.map(({ to, code, label }) => (
					<span key={to}><small>{code}</small>{label}</span>
				))}
			</span>
		</>
	),
	'/projects': (
		<>
			<span>
				<span className="pg-eyebrow">→ Selected work</span>
				<span className="pg-title">Projects</span>
			</span>
			<Lines widths={[82]} />
			<span className="pg-pile">
				<span /><span /><span>
					<b>CODE_001 // Doc 1 of {projects.length}</b>
					<strong />
					<Lines widths={[92, 84, 50]} />
					<span className="pg-tags"><i /><i /></span>
				</span>
			</span>
			<span className="pg-controls"><i />01 / {String(projects.length).padStart(2, '0')}<i /></span>
			<span className="pg-sub">Skills</span>
			<span className="pg-cards">
				<span><strong /><span className="pg-tags"><i /><i /></span></span>
				<span><strong /><span className="pg-tags"><i /></span></span>
				<span><strong /><span className="pg-tags"><i /><i /></span></span>
			</span>
		</>
	),
	'/contact': (
		<>
			<span>
				<span className="pg-eyebrow">→ Get in touch</span>
				<span className="pg-title">Contact</span>
			</span>
			<Lines widths={[78]} />
			<span className="pg-slip">
				<span className="pg-slip-head"><span>Routing slip</span><span>No. 03</span></span>
				<span><b /><u /></span>
				<span><i /><b /><u /></span>
				<span><i /><b /><u /></span>
				<span><i /><b /><u /></span>
				<span className="pg-stamp">Open for<br />correspondence</span>
			</span>
		</>
	),
};

// What each file strip shows on the folder itself: printed shapes (back),
// a caption, and an optional badge. The page sits on top of them.
const faces = {
	'/about': {
		back: (
			<>
				{pixels.map(([top, left, size]) => (
					<span key={`${top}-${left}`} className="pixel"
						style={{ top: `${top}%`, left: `${left}%`, width: size, height: size }} />
				))}
				<span className="strip-log">LOG<br />01:00:26<br />FILED</span>
			</>
		),
		caption: <>Personnel<br />record</>,
	},
	'/projects': {
		back: <span className="strip-blur" />,
		caption: <>Documents<br />enclosed</>,
		badge: <span className="strip-big">{String(projects.length).padStart(2, '0')}</span>,
	},
	'/contact': {
		caption: <>Open for<br />correspondence</>,
	},
};

// The landing page: a row of file folders seen edge-on. The first strip is
// the archive's cover; every other strip is a file that opens its page.
const Landing = () => (
	<div className="landing">
		<header className="strip strip-cover">
			<h1 className="cover-title">
				Kim_Portfolio_01
			</h1>
			<p className="cover-sub">
				Software Engineer:<br />
				Machine Learning · AI · Full stack
			</p>
			<p className="cover-file">FILE_00//</p>
		</header>

		<section className="strip strip-log-sheet" style={{ '--i': 0 }} aria-label="Archive log">
			<span className="strip-tab"><span>Archive log</span></span>
			<div className="log-body">
				<span className="log-rule" />
				<span className="barcode" aria-hidden="true" />
				<p className="log-hello">Dive right in</p>
				<p className="log-ref">KJH — 01-A</p>
				<p className="log-text">
					I am a software engineer with a foundation in Machine Learning, AI, data analytics and full-stack development. Come explore my crafts!
				</p>
				<span className="log-scan" aria-hidden="true" />
			</div>
		</section>

		<nav className="landing-files" aria-label="Files">
			{files.map(({ to, code, label, title }, index) => (
				<Link key={to} to={to} className={`strip strip-file strip-${label.toLowerCase()}`}
					style={{ '--i': index + 1 }}>
					<span className="strip-tab">
						<span className="strip-code">CODE_0{code} //</span>
						<span>{label}</span>
					</span>
					<span className="strip-face" aria-hidden="true">
						{faces[to].back}
						<span className="strip-caption">{faces[to].caption}</span>
						{faces[to].badge}
						<span className="peek">
							<span className="pg">
								<span className="pg-head">
									<span>FILE_{code} // {title}<br /><em>Archive / {code}_{label}</em></span>
									<span className="barcode" />
								</span>
								{peeks[to]}
							</span>
						</span>
					</span>
				</Link>
			))}
		</nav>

		<footer className="strip strip-end" style={{ '--i': files.length + 1 }}>
			<span className="strip-tab"><span className="strip-code">End of file //</span></span>
			<p className="end-note">© {new Date().getFullYear()} Kimberly Jane Harry</p>
		</footer>
	</div>
);

export default Landing;
