import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = { darkMode: false };
	}

	toggleDarkMode = (darkMode) => {
		this.setState({ darkMode: !this.state.darkMode });
	};

	render() {
		return (
			<div className={`${this.state.darkMode ? 'dark' : ''}`}>
				<header className="bg-white dark:bg-dark-900">
					<nav>
						<NavBar toggleDarkMode={this.toggleDarkMode} />
					</nav>
				</header>
				<main className="bg-white dark:bg-dark-900">
					<section id="hero">
						<Hero />
					</section>
					<section id="main">
						<div className="container mx-auto px-6 p-10">
							<h2 className="text-4xl font-bold text-center text-gray-800 dark:text-dark-primarytext mb-8">
								Header
							</h2>
							<div className="flex items-center flex-wrap mb-20">
								<div className="w-full md:w-1/2">
									<h4 className="text-3xl text-gray-800 dark:text-dark-primarytext font-bold mb-3">
										A subheader
									</h4>
									<p className="text-gray-600 dark:text-dark-secondarytext mb-8">
										information for the subheader
									</p>
								</div>
								<div className="w-full md:w-1/2">
									<p>insert an image here</p>
								</div>
							</div>

							<div className="flex items-center flex-wrap mb-20">
								<div className="w-full md:w-1/2">
									<p>insert an image here</p>
								</div>
								<div className="w-full md:w-1/2">
									<h4 className="text-3xl text-gray-800 dark:text-dark-primarytext font-bold mb-3">
										Second subheader
									</h4>
									<p className="text-gray-600 dark:text-dark-secondarytext mb-8">
										yay for a second subheader paragraph
									</p>
								</div>
							</div>

							<div className="flex items-center flex-wrap mb-20">
								<div className="w-full md:w-1/2">
									<h4 className="text-3xl text-gray-800 dark:text-dark-primarytext dark font-bold mb-3">
										Third and final subheader
									</h4>
									<p className="text-gray-600 dark:text-dark-secondarytext mb-8">
										this is the last section paragraph, woo
									</p>
								</div>
								<div className="w-full md:w-1/2">
									<p>another image here</p>
								</div>
							</div>
						</div>
					</section>
				</main>
				<footer className="bg-light-900 dark:bg-dark-900">
					<Footer />
				</footer>
			</div>
		);
	}
}

export default App;
