export default function Home() {
	return (
		<main>
			<header>
				<a href="#home" aria-label="Portfolio home">
					Portfolio
				</a>
				<nav aria-label="Main navigation">
					<a href="#projects">Projects</a>
					<a href="#about">About</a>
					<a href="#contact">Contact</a>
				</nav>
			</header>

			<section id="home" aria-labelledby="home-heading">
				<p>Welcome to my portfolio</p>
				<h1 id="home-heading">I create thoughtful digital experiences.</h1>
				<p>Explore my work and learn more about what I do.</p>
				<a href="#projects">View projects</a>
			</section>

			<section id="projects" aria-labelledby="projects-heading">
				<h2 id="projects-heading">Featured projects</h2>
				<div>
					<article>
						<h3>Project One</h3>
						<p>A short description of the project and its impact.</p>
					</article>
					<article>
						<h3>Project Two</h3>
						<p>A short description of the project and its impact.</p>
					</article>
					<article>
						<h3>Project Three</h3>
						<p>A short description of the project and its impact.</p>
					</article>
				</div>
			</section>

			<section id="about" aria-labelledby="about-heading">
				<h2 id="about-heading">About me</h2>
				<p>
					I enjoy solving problems and building useful, engaging experiences.
				</p>
			</section>

			<section id="contact" aria-labelledby="contact-heading">
				<h2 id="contact-heading">Let’s work together</h2>
				<p>Have a project in mind? Get in touch.</p>
				<a href="mailto:hello@example.com">Send me an email</a>
			</section>

			<footer>
				<p>© {new Date().getFullYear()} Portfolio</p>
			</footer>
		</main>
	);
}
