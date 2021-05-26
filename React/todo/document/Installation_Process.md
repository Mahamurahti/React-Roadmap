# My Installation Process

First I installed the create-react-app command with 
### `npm install -g create-react-app`
After installing it, I initiated the installation with
### `npx create-react-app todo`
Later I added tailwind to style my app. I first installed the package with a couple of installations:
### `npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`
Since React Apps don't support PostCSS, I had to install Craco:
### `npm install @craco/craco`
And also change some lines in my `package.json` file to:
```
  {
    // ...
    "scripts": {
-    "start": "react-scripts start",
-    "build": "react-scripts build",
-    "test": "react-scripts test",
+    "start": "craco start",
+    "build": "craco build",
+    "test": "craco test",
      "eject": "react-scripts eject"
    },
  }
```
I created a `craco.config.js` file to the root and pasted the following lines in:
```
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```
After this I had some trouble with initializing tailwindcss with `npx tailwindcss init`
, but found an answer solving the problem [here](https://github.com/tailwindlabs/tailwindcss/issues/2831):
```
npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@latest postcss@latest autoprefixer@latest

npx tailwindcss init -p

npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```
After solving this problem, I added some lines to the file `tailwind.config.js`
that `npx tailwindcss init -p` creates:
```
module.exports = {
-  purge: [],
+  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```
Tailwind needs to also be included in the project, so in the projects `index.css` file I added tailwind with:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
The css file will throw errors, since it doesn't know what is going on with @tailwind keyword, but it just works.
After this I just added the css file to my app:
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
After this everything was set up!