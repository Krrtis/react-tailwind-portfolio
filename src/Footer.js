import React from 'react';

const Footer = () => {
	return (
		<div className="bg-gray-100 dark:bg-dark-800 dark:text-dark-secondarytext">
			<div className="container mx-auto px-6 pt-10 pb-6">
				<div className="flex flex-wrap">
					<div className="w-full md:w-1/4 text-center md:text-left">
						<h5 className="uppercase mb-6 font-bold">links</h5>
						<ul className="mb-4">
							<li className="mt-2">
								<a
									href="/"
									className="hover:underline text-gray-600 hover:text-orange-500">
									item
								</a>
							</li>
							<li className="mt-2">
								<a
									href="/"
									className="hover:underline text-gray-600 hover:text-orange-500">
									another item
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
