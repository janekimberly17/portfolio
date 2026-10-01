import { Link } from 'react-router-dom';
import { ArrowRight, Download, Paperclip } from 'lucide-react';
import DocHeader from './DocHeader';
import BinderClip from './BinderClip';
import { files } from '../data/files';
import portrait from '../assets/portrait.jpg';
import './style.css';

// Served from public/, so swapping the PDF there updates the button.
const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`;

const About = () => (
	<section id="about" className="doc">
		<DocHeader />

		<div className="about-grid">
			<div className="about-main">
				<span className="eyebrow">AI &amp; ML engineer</span>
				<h1 className="doc-title">Hi, I'm Kimberly.</h1>

				<dl className="record">
					<div><dt>Subject</dt><dd>Kimberly Jane Harry</dd></div>
					<div><dt>Role</dt><dd>AI and machine learning engineer</dd></div>
					<div><dt>Based</dt><dd>Kuching, Sarawak</dd></div>
					<div><dt>Status</dt><dd>Open to new work</dd></div>
				</dl>

				<p className="section-description">
					I'm an AI and machine learning engineer with a foundation in data
					analytics and full-stack development, currently pursuing a Certificate
					in AI and Cloud for Construction at Gamuda AI Academy. I turn
					operational data into machine learning models and dashboards that
					measurably improve efficiency.
				</p>

				<div className="hero-actions">
					<Link to="/projects" className="btn btn-solid">
						Open project files <ArrowRight size={18} />
					</Link>
					<a href={RESUME_URL} className="btn btn-outline" download="Kimberly_Jane_Harry_Resume.pdf">
						<Download size={18} /> Download Resume
					</a>
				</div>
			</div>

			<aside className="about-side">
				<div className="stamp-wrap">
					<div className="stamp-block">
						<span>File</span>
						<span>01</span>
						<span>— AI &amp;</span>
						<span>ML</span>
					</div>
					<BinderClip className="stamp-clip" />
				</div>

				<figure className="photo">
					<Paperclip className="photo-clip" size={56} strokeWidth={1.25} aria-hidden="true" />
					<div className="photo-frame">
						<img src={portrait} alt="Kimberly Jane Harry" />
					</div>
					<figcaption>Fig. 01 — Portrait</figcaption>
				</figure>
			</aside>
		</div>

		<div className="index-card-wrap">
			<nav className="index-card" aria-label="Contents">
				<h2 className="index-card-title">Contents</h2>
				<ol>
					{files.map(({ to, code, label, title }) => (
						<li key={to}>
							<Link to={to}>
								<span className="index-no">{code}</span>
								<span className="index-label">{label}</span>
								<span className="index-title">{title}</span>
							</Link>
						</li>
					))}
				</ol>
			</nav>
		</div>
	</section>
);

export default About;
