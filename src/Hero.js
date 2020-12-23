import React from 'react';

const Hero = () => {
	return (
		<div className="py-20 text-white bg-light-900 dark:bg-dark-800 dark:text-dark-primarytext">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold mb-2 text-gray-800 dark:text-dark-primarytext">
					This is a header
				</h2>
				<h3 className="text-2xl mb-8 text-gray-700 dark:text-dark-secondarytext">
					With a subheader
				</h3>
			</div>
		</div>
	);
};

export default Hero;
