import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import SkillTag from './SkillTag';

// How far (px) the top sheet must be dragged before letting go files it away.
const SWIPE_DISTANCE = 90;
// Matches the .is-flying transition in style.css.
const FLY_MS = 360;
// Each sheet keeps its own slightly crooked angle in the pile.
const TILTS = [-1.4, 1.8, -0.8, 2.4, -2];

const pad = (n) => String(n).padStart(3, '0');

const prefersReducedMotion = () =>
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Projects as a pile of loose paper. Drag (or swipe) the top sheet left to
// file it at the back and read the next one; drag right to bring the last one back.
const PaperStack = ({ projects }) => {
	const count = projects.length;
	const [active, setActive] = useState(0);
	const [dragX, setDragX] = useState(null);
	const [flying, setFlying] = useState(0);
	const dragStart = useRef(0);
	const timer = useRef();

	useEffect(() => () => clearTimeout(timer.current), []);

	// direction 1 = next (sheet leaves to the left), -1 = previous (leaves to the right)
	const turn = (direction) => {
		if (flying) return;
		const settle = () => {
			setActive((current) => (current + direction + count) % count);
			setFlying(0);
			setDragX(null);
		};
		if (prefersReducedMotion()) {
			settle();
			return;
		}
		setFlying(direction);
		timer.current = setTimeout(settle, FLY_MS);
	};

	const onPointerDown = (event) => {
		if (flying || event.button !== 0) return;
		// Let the sheet's links be clicked instead of starting a drag
		if (event.target.closest('a')) return;
		event.currentTarget.setPointerCapture(event.pointerId);
		dragStart.current = event.clientX;
		setDragX(0);
	};

	const onPointerMove = (event) => {
		if (dragX === null || flying) return;
		setDragX(event.clientX - dragStart.current);
	};

	const onPointerUp = () => {
		if (dragX === null || flying) return;
		if (Math.abs(dragX) > SWIPE_DISTANCE) {
			turn(dragX < 0 ? 1 : -1);
		} else {
			setDragX(null);
		}
	};

	const onKeyDown = (event) => {
		if (event.key === 'ArrowRight') turn(1);
		if (event.key === 'ArrowLeft') turn(-1);
	};

	const topStyle = () => {
		if (flying) {
			return { transform: `translateX(${-flying * 125}%) rotate(${-flying * 14}deg)` };
		}
		if (dragX !== null) {
			return { transform: `translateX(${dragX}px) rotate(${dragX / 24}deg)` };
		}
		return undefined;
	};

	return (
		<div className="paper-stack-wrap">
			<div
				className="paper-stack"
				tabIndex={0}
				role="region"
				aria-roledescription="carousel"
				aria-label="Project documents. Use the left and right arrow keys to turn the sheets."
				onKeyDown={onKeyDown}
			>
				{projects.map(({ icon: Icon, tab, tone, title, text, skills, site, source }, index) => {
					// 0 is the top sheet, 1 is just under it, and so on
					const depth = (index - active + count) % count;
					const isTop = depth === 0;
					const classes = [
						'paper',
						`tone-${tone}`,
						isTop && 'is-top',
						isTop && dragX !== null && !flying && 'is-dragging',
						isTop && flying && 'is-flying',
						depth > 2 && 'is-buried',
					].filter(Boolean).join(' ');

					return (
						<article
							key={title}
							className={classes}
							style={{
								'--depth': depth,
								'--tilt': `${TILTS[index % TILTS.length]}deg`,
								zIndex: count - depth,
								...(isTop ? topStyle() : null),
							}}
							aria-hidden={!isTop}
							onPointerDown={isTop ? onPointerDown : undefined}
							onPointerMove={isTop ? onPointerMove : undefined}
							onPointerUp={isTop ? onPointerUp : undefined}
							onPointerCancel={isTop ? () => setDragX(null) : undefined}
						>
							<div className="paper-meta">
								<span>CODE_{pad(index + 1)} // {tab}</span>
								<span>Doc {index + 1} of {count}</span>
							</div>

							<div className="paper-content">
								<div className="scan" aria-hidden="true">
									<Icon size={44} strokeWidth={1.25} />
								</div>
								<div>
									<h3 className="paper-title">{title}</h3>
									<p className="card-text">{text}</p>
									{(site || source) && (
										<p className="paper-links">
											{site && (
												<a href={site} target="_blank" rel="noreferrer" tabIndex={isTop ? 0 : -1}>
													Visit site <ArrowUpRight size={14} />
												</a>
											)}
											{source && (
												<a href={source} target="_blank" rel="noreferrer" tabIndex={isTop ? 0 : -1}>
													Source code <ArrowUpRight size={14} />
												</a>
											)}
										</p>
									)}
								</div>
							</div>

							<div className="paper-materials">
								<span className="field-label">Materials</span>
								{skills.length > 0 ? (
									<ul className="card-skills">
										{skills.map((name) => <SkillTag key={name} name={name} />)}
									</ul>
								) : (
									<span className="field-empty">— not recorded —</span>
								)}
								<span className="barcode" aria-hidden="true" />
							</div>
						</article>
					);
				})}
			</div>

			<div className="paper-controls">
				<button type="button" className="icon-btn" aria-label="Previous project" onClick={() => turn(-1)}>
					<ArrowLeft size={18} />
				</button>
				<p className="paper-count" aria-live="polite">
					<span>{String(active + 1).padStart(2, '0')}</span> / {String(count).padStart(2, '0')}
				</p>
				<button type="button" className="icon-btn" aria-label="Next project" onClick={() => turn(1)}>
					<ArrowRight size={18} />
				</button>
				<p className="paper-hint">← Drag the top sheet aside →</p>
			</div>
		</div>
	);
};

export default PaperStack;
