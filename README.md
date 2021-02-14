This website will be hosted eventually but at the time of writing I still have to learn to host it :sweat_smile:

To set up the website on your machine simply install NodeJS. To setup the website running on localhost:3000 run the following command

`node src/app.js`

This will spin up a local development server so that you can see and use the website in the browser of your choice at http://localhost:3000

If you want to work on the app yourself I advise you install `nodemon` using `npm` with the following command

`npm install nodemon --global`

Installing it globally so you need not repeat the installation for every similiar project that you work on. Once that has been done you can use the command

`nodemon src/app.js`

All nodemon does is restart the development server everytime you save and make changes to it. However, it only looks at javascript file changes. If you want it to update for all types of file changes then use the following command

`nodemon src/app.js -ext js,css,html/hbs`

You shouldn't need to track more than those type of file changes honestly. The `css` and `html` part is optional. It really depends what you are working on in that point in time.