import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SkillTag from './SkillTag';
import { skillGroups } from '../data/skills';
import './style.css';

const Skills = () => {
	const trackRef = useRef(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const updateScrollState = () => {
		const track = trackRef.current;
		setCanScrollLeft(track.scrollLeft > 0);
		setCanScrollRight(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
	};

	useEffect(() => {
		updateScrollState();
		window.addEventListener('resize', updateScrollState);
		return () => window.removeEventListener('resize', updateScrollState);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				observer.disconnect();
			}
		}, { threshold: 0.2 });

		observer.observe(trackRef.current);
		return () => observer.disconnect();
	}, []);

	const scrollByOneCard = (direction) => {
		const track = trackRef.current;
		const cardWidth = track.firstElementChild.offsetWidth;
		const gap = parseFloat(getComputedStyle(track).columnGap);
		track.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' });
	};

	const trackClasses = [
		'skills-track',
		isVisible && 'is-visible',
		canScrollLeft && 'fade-left',
		canScrollRight && 'fade-right',
	].filter(Boolean).join(' ');

	return (
		<section id="skills">
			<div className="skills-header">
				<div>
					<span className="eyebrow">Toolkit // Card index</span>
					<h2 className="skills-title">Skills</h2>
				</div>
				<div className="skills-arrows">
					<button type="button" className="icon-btn" aria-label="Scroll skills left"
						onClick={() => scrollByOneCard(-1)} hidden={!canScrollLeft}>
						<ChevronLeft size={18} />
					</button>
					<button type="button" className="icon-btn" aria-label="Scroll skills right"
						onClick={() => scrollByOneCard(1)} hidden={!canScrollRight}>
						<ChevronRight size={18} />
					</button>
				</div>
			</div>

			<div ref={trackRef} className={trackClasses} onScroll={updateScrollState}
				tabIndex={0} role="region" aria-label="Skills by category">
				{skillGroups.map(({ title, icon: Icon, skills }, index) => (
					<article className="card skill-card" key={title} style={{ '--i': index }}>
						<span className="skill-card-no">Card {String(index + 1).padStart(2, '0')} / {String(skillGroups.length).padStart(2, '0')}</span>
						<div className="skill-card-header">
							<div className="card-icon">
								<Icon size={20} strokeWidth={1.75} />
							</div>
							<h3 className="card-title">{title}</h3>
						</div>
						<ul className="card-skills">
							{skills.map(({ name }) => (
								<SkillTag key={name} name={name} />
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	);
};

export default Skills;
