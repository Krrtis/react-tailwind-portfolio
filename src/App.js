import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header>
				<div className="container mx-auto px-10 py-2 flex justify-end">
					<div className="block lg:hidden">
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
			</header>
			<main>
				<section id="hero">
					<div className="py-20 bg-blue-400">
						<div className="container mx-auto px-6">
							<h2 className="text-4xl font-bold mb-2 text-gray-800">
								This is a header
							</h2>
							<h3 className="text-2xl mb-8 text-gray-700">
								With a subheader
							</h3>
						</div>
					</div>
				</section>
				<section id="main-section">
					<div className="container mx-auto px-6 p-10">
						<h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
							Header
						</h2>
						<div className="flex items-center flex-wrap mb-20">
							<div className="w-full md:w-1/2">
								<h4 className="text-3xl text-gray-800 font-bold mb-3">
									A subheader
								</h4>
								<p className="text-gray-600 mb-8">
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
								<h4 className="text-3xl text-gray-800 font-bold mb-3">
									Second subheader
								</h4>
								<p className="text-gray-600 mb-8">
									yay for a second subheader paragraph
								</p>
							</div>
						</div>

						<div className="flex items-center flex-wrap mb-20">
							<div className="w-full md:w-1/2">
								<h4 className="text-3xl text-gray-800 font-bold mb-3">
									Third and final subheader
								</h4>
								<p className="text-gray-600 mb-8">
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
			<footer>
				<div className="bg-gray-100">
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
			</footer>
		</div>
	);
}

export default App;
