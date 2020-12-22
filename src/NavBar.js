import React from 'react';

const NavBar = () => {
	return (
		<div className="container mx-auto px-10 py-2 flex justify-end">
			<div className="block">
				<ul className="inline-flex">
					<li>
						<a className="px-4 hover:text-gray-600" href="/">
							Object
						</a>
					</li>
					<li>
						<a className="px-4 hover:text-gray-600" href="/">
							Object
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
