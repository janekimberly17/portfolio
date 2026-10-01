import { skillIcons } from '../data/skills';

const SkillTag = ({ name }) => {
	const Icon = skillIcons[name];

	return (
		<li className="skill-tag">
			{Icon && <Icon size={14} strokeWidth={1.75} />}
			{name}
		</li>
	);
};

export default SkillTag;
