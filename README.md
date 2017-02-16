# webpack complete demo
Follow the steps to set up your webpack environment :
  1) Clone the project
  2) Run npm install
  3) Run npm start

After following these steps a local server starts running in your system (in my case at http://localhost:8080). You can access the index file at( http://localhost:8080/index.html).

Server keeps all the static files in memeory, if you change any css or js file which are watched by the server then changes will automatically gets reflected to the index.html page without refreshing the browser.

There is a css generation rule present as query parameter localIdentName in loaders present in module section. It can be altered according to your requirement and will also be helpful in automation







