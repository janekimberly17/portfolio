// A black binder clip, drawn in SVG so it can sit over any document edge.
const BinderClip = ({ className }) => (
	<svg className={className} viewBox="0 0 64 72" aria-hidden="true">
		<path d="M14 8 C14 2 26 2 26 10 L28 34" fill="none" stroke="#c9c6bd" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M50 8 C50 2 38 2 38 10 L36 34" fill="none" stroke="#e2dfd6" strokeWidth="2.5" strokeLinecap="round" />
		<path d="M10 30 H54 L58 70 H6 Z" fill="#141413" />
		<path d="M10 30 H54 L55 38 H9 Z" fill="#2a2a27" />
	</svg>
);

export default BinderClip;
