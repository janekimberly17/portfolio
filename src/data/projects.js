import { CakeSlice, ScanLine, Wrench, BookOpen, FlaskConical, HandHeart, FolderTree } from 'lucide-react';

// One entry per sheet in the Projects pile, top sheet first.
// `tab` is the short name typed on the sheet's label; `tone` is the paper stock.
// `site` and `source` are optional; a sheet shows a link for each one it has.
export const projects = [
	{
		icon: CakeSlice,
		tab: 'Kneads Love',
		tone: 'manila',
		title: 'Kneads Love Baked Goods',
		text: 'A preorder site for a home-based brownie bakery in Kuching. Customers build a cart, choose pickup or delivery by zone, and check out; each order lands in a Google Sheet through a Google Apps Script web app, with no server to run.',
		skills: ['React', 'Tailwind CSS', 'Google Apps Script'],
		site: 'https://janekimberly17.github.io/kneads_love_baked_goods/',
		source: 'https://github.com/janekimberly17/kneads_love_baked_goods',
	},
	{
		icon: ScanLine,
		tab: 'Fleet plate check',
		tone: 'slate',
		title: 'Fleet Plate Check',
		text: 'Stops fuel-card misuse at the pump. A YOLOv8 model trained on Malaysian car plates finds the plate in a snapshot, EasyOCR reads it, and the plate is checked against the vehicle the fleet card was issued to. The demo site replays the model results in the browser.',
		skills: ['Python', 'YOLO', 'Computer Vision', 'React'],
		site: 'https://janekimberly17.github.io/plate_number/',
		source: 'https://github.com/janekimberly17/plate_number',
	},
	{
		icon: Wrench,
		tab: 'repAIr',
		tone: 'kraft',
		title: 'repAIr: Predictive Maintenance and Fleet Health',
		text: 'Capstone at Gamuda AI Academy (2026, in progress). I lead a four-member team building a full-stack platform that predicts failures in construction heavy machinery such as excavators. We train uptime and MTTR models on simulated IoT sensor data, and a multi-agent LLM system flags equipment anomalies and dispatches work orders to technicians.',
		skills: ['React', 'FastAPI', 'Machine Learning', 'LLM Agents (LangGraph)'],
	},
	{
		icon: BookOpen,
		tab: 'Playworks',
		tone: 'olive',
		title: 'Playworks Reading House Website',
		text: 'My first Freelance work (2024). Designed and deployed a responsive corporate website for a children\'s literacy intervention centre.',
		skills: ['HTML', 'CSS', 'JavaScript'],
		site: 'https://www.playworksreadinghouse.com/',
	},
	{
		icon: FlaskConical,
		tab: 'Nanomaterial risk',
		tone: 'manila',
		title: 'Nanomaterial (SiO2 & TiO2) Risk Assessment',
		text: 'Cross-disciplinary collaboration (2024). Built a Random Forest risk-assessment model with an end-to-end pipeline covering feature engineering, scaling and encoding.',
		skills: ['Python', 'Machine Learning'],
	},
	{
		icon: FolderTree,
		tab: 'Report taxonomy',
		tone: 'kraft',
		title: 'Taxonomy Classification of Mechanical Static Reports',
		text: 'Industrial training at PETRONAS Carigali, Miri (2023). Engineered a classification framework to standardise unstructured maintenance records, alongside a data taxonomy aligned with PETRONAS Data Governance and Assurance standards.',
		skills: ['Data Taxonomy', 'Data Governance', 'Power BI'],
	},
];
