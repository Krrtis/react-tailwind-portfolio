import React from 'react';

class NavBar extends React.Component {
	render() {
		return (
			<div className="container mx-auto px-10 py-2 flex justify-between bg-white dark:bg-black bg-opacity-60">
				<div className="block">
					<button
						aria-label="Toggle dark mode"
						type="button"
						className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
						onClick={this.props.toggleDarkMode}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-4 w-4 text-gray-800 dark:text-gray-200">
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
						</svg>
					</button>
				</div>
				<div className="block">
					<ul className="inline-flex">
						<li>
							<a
								className="px-4 text-gray-900 dark:text-gray-100"
								href="/">
								Object
							</a>
						</li>
						<li>
							<a
								className="px-4 text-gray-900 dark:text-gray-100"
								href="/">
								Object
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default NavBar;
