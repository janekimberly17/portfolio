import {
	BrainCircuit, Brain, Layers, Bot, ScanEye, Eye,
	Database, Terminal, ChartColumn, ChartNoAxesCombined, NotebookPen,
	SquareCode, Zap, Atom, Network, Coffee, Braces, Code, Palette,
	Wrench, GitBranch, Cloud, Cpu, Monitor, RefreshCw, Workflow,
} from 'lucide-react';

// All skills live here, grouped by category. Add a skill by adding an entry to a group.
export const skillGroups = [
	{
		title: 'AI and ML',
		icon: BrainCircuit,
		skills: [
			{ name: 'Machine Learning', icon: Brain },
			{ name: 'Deep Learning', icon: Layers },
			{ name: 'LLM Agents (LangGraph)', icon: Bot },
			{ name: 'YOLO', icon: ScanEye },
			{ name: 'Computer Vision', icon: Eye },
		],
	},
	{
		title: 'Data',
		icon: Database,
		skills: [
			{ name: 'Python', icon: Terminal },
			{ name: 'PostgreSQL', icon: Database },
			{ name: 'Data Visualization', icon: ChartColumn },
			{ name: 'Big Data Analytics', icon: ChartNoAxesCombined },
			{ name: 'Colab Notebook', icon: NotebookPen },
		],
	},
	{
		title: 'Engineering',
		icon: SquareCode,
		skills: [
			{ name: 'FastAPI', icon: Zap },
			{ name: 'React', icon: Atom },
			{ name: 'RESTful APIs', icon: Network },
			{ name: 'Java', icon: Coffee },
			{ name: 'JavaScript', icon: Braces },
			{ name: 'HTML', icon: Code },
			{ name: 'CSS', icon: Palette },
		],
	},
	{
		title: 'Tools and methods',
		icon: Wrench,
		skills: [
			{ name: 'Git', icon: GitBranch },
			{ name: 'Azure DevOps', icon: Cloud },
			{ name: 'IntelliJ', icon: Cpu },
			{ name: 'Visual Studio', icon: Monitor },
			{ name: 'Agile', icon: RefreshCw },
			{ name: 'CRISP-DM', icon: Workflow },
		],
	},
];

// Project tags look up their icons here by name.
export const skillIcons = Object.fromEntries(
	skillGroups.flatMap((group) => group.skills).map(({ name, icon }) => [name, icon]),
);
