# Shopping Cart (Instrument Store)

A font-end implementation of a web store, created with ReactJS.

## Access deployment

Live implementation built and accessible with [GitHub Pages](https://samuelisch.github.io/shopping-cart/)

## Motivation

I wanted to implement a project using React Router, for access to multiple pages. There was some understanding needed to using { Links } instead of anchor tags, as I did not want the webpage to reload with every click. I referred to multiple resources for the project, including the [React Router documentation](https://reactrouter.com/docs/en/v6/getting-started/overview)

### Features

This web store application starts with the homepage, which (randomly)dynamically generates a clarinet as the 'featured clarinet of the day'. Multiple links are available on the page in the header navbar, and the 'Shop Now' button.

The shop page of the web store features multiple instruments generated as instances, with their images, names, and price displayed in each instance. The instrments' information are stored in a file, which is then imported and hooked using { useEffect } to the generated page content.

### Future implementations and improvements

There can be more cues / buttons for users to exit individual instruments' pages and cart. 

A faux payment system can be implemented with React Stripe.

Smoother styling can be done for the page, for a modern look.
