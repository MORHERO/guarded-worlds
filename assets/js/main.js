document.onreadystatechange = function() {
	if (document.readyState === 'complete') {
		// Get all needed partials
		const navigation = document.querySelector('nav');

		// Get all needed modules
		//const loader_module = document.querySelector('[module=page-loader');

		// Get all needed modulars

		//
		// PARTIAL
		//
		// navigation
		class NAVIGATION {
			constructor(dom) {
				this.dom = dom;
				//this.trigger = document.querySelector('#nav-trigger');
				//this.nav_elements = this.dom.querySelectorAll('.nav-element');
			}
		}
		const nav = new NAVIGATION(navigation);

		//
		// MODULAR
		// Parent modular class declaration

		class MODULAR {
			constructor(dom) {
				this.dom = dom;
			}
		}
	}
}