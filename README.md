# Hearty Brunch

Hearty Brunch is a [skeleton](http://brunch.io/skeletons.html) used for templating projects.

Demo: [http://hearty-brunch-demo.s3-website-ap-southeast-1.amazonaws.com/](http://hearty-brunch-demo.s3-website-ap-southeast-1.amazonaws.com/)

## What makes Hearty Brunch hearty?

Version 0.0.2 comes with Bower, Stylus, Jade, Twitter Bootstrap, FontAwesome, jQuery, Modernizr, IE polyfills and a bunch of helpful mixins!

## Getting started
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * [Bower](http://bower.io): `npm install -g bower`
    * Install Dependencies: `npm start`.
* Run:
    * `brunch new https://github.com/ToanNG/hearty-brunch.git [appname]` — Create a new app with the skeleton
    * `cd [appname] && brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server.
    * `brunch build --production` — builds minified project for production
* Deploy:
    * include `aws.json` in the root folder
   ```javascript
   { 
      "accessKeyId": "***",
      "secretAccessKey": "***",
      "region": "us-east-1",
      "bucketName": "hearty-brunch-demo"
   }
   ```
    * `grunt deploy-demo`

## Using Bower:

Bower downloads and manages vendor files. Call for any package with ```bower install --save <package>```. Brunch will look for the file to be include within the ```main``` property within each package's ```bower.json```.

If the package does not include point to correct main files, you can override it in the root folder's ```bower.json```.

> Note: Only Stylesheets and Javascripts will be automatically included. You have to manually copy the fonts into the assets's folder. More info: [StackOverflow](http://stackoverflow.com/questions/18920491/font-files-for-bootstrap-3-0-with-brunch)

If you cannot find the available package you need in bower, include the libraries manually in the vendor ```scripts``` or ```styles``` folder respectively.

## What's next
* Include respond.js for IE8 and below
* Keep comments on compiled stylesheets
