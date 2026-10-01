// Each page behind the landing strips is one file in the archive. The folder tabs, the desk label and
// every document header read from here, so a page's code and colour live in one place.
export const files = [
	{ to: '/about', code: '01', label: 'About', title: 'Personnel record', tone: 'manila' },
	{ to: '/projects', code: '02', label: 'Projects', title: 'Project files', tone: 'sage' },
	{ to: '/contact', code: '03', label: 'Contact', title: 'Correspondence', tone: 'slate' },
];

export const fileFor = (pathname) => files.find((file) => file.to === pathname) ?? files[0];
