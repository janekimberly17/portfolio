import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import FolderTabs from './components/FolderTabs';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { fileFor } from './data/files';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

// Behind the landing strips, each page is one folder on a desk: tabs pick a
// file, and the file's document slides out of the folder on top of the stack.
function Folder() {
	const { pathname } = useLocation();
	const file = fileFor(pathname);

	return (
		<>
			<Header file={file} />
			<main className="main">
				<div className={`folder tone-${file.tone}`}>
					<FolderTabs />
					<div className="folder-body">
						<div className="sheet" key={pathname}>
							<Outlet />
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

function App() {
	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route element={<Folder />}>
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
				{/* Old or mistyped URLs (e.g. /resume, /skills) fall back to the landing page */}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
