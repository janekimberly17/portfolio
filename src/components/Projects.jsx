import DocHeader from './DocHeader';
import Skills from './Skills';
import PaperStack from './PaperStack';
import { projects } from '../data/projects';
import './style.css';

const Projects = () => (
	<section id="projects" className="doc">
		<DocHeader />
		<span className="eyebrow">Selected work</span>
		<h2 className="doc-title">Projects</h2>
		<p className="section-description">
			{projects.length} documents enclosed. Swipe the top sheet aside to read the next.
		</p>

		<PaperStack projects={projects} />

		<div className="page-skills">
			<Skills />
		</div>
	</section>
);

export default Projects;
