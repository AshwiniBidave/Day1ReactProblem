import React from "react";
import "./App.css";
function Uc8() {
	return (
               <body>
		   <header className="header">Header</header>
		   <div className="maincontainer">
				<sidebar className="sidebar-left">Left</sidebar>
				<section className="main">
					<article><h2> First Article</h2>
						<p>This is a test. This is a test. This is a test. This is a test.
						   This is a test. This is a test. This is a test. This is a test. This is a test.
						</p>
					</article>
					<article><h2> Second Article</h2>
						<p>This is a test. This is a test. This is a test. This is a test.
						   This is a test. This is a test. This is a test. This is a test. This is a test.
						</p>
					</article>
					<article><h2> Third Article</h2>
						<p>This is a test. This is a test. This is a test. This is a test.
						   This is a test. This is a test. This is a test. This is a test. This is a test.
						</p>
					</article>
				</section>

				<sidebar className="sidebar-right">Right</sidebar>
			</div>
			<footer className="footer">Footer</footer>
		</body>

	);

}
export default Uc8
