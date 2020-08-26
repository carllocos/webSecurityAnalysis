# Servers Intallation

## Node Js
I created the application using node version 13.12.x and npm version 6.14.x. To install and start the servers execute respectively 'npm install' and 'node index.js'

The project starts succesfully if the following logs are displayed on the console:
- Server listening at port 3000
- Server listening at port 3030 
- Server listening at port 3050

Regarding the report, sever 3000 is the host, sever 3030 is guest1 and 3050 is guest2. 

If by any chance those ports are conflicting. You will have to manually change top of the file 'index.js' and the corresponding HTML and JS files in public/caja and public/jsflow directories.


The three different servers can be used for Caja and JSFlow

# Caja

## Browser


I executed all of the caja examples on brave browser Version 1.12.114. Normally each browser build on top of Chromium: 84.0.4147.135 (Official Build) should also work. 

## Accessing Examples
To access the examples you will have to type in the browser the name of each file in directory /public/caja/
- example 1 http://localhost:3000/caja/example1.html
- example 2 http://localhost:3000/caja/example2.html
- example 3 http://localhost:3000/caja/example3.html
- example 4 http://localhost:3000/caja/example4.html

All the examples contain a small description and usually the guests are displayed on a light blue background color.

# JSFlow

## Browser
JSFlow requires Firefox version 30. The following webpage should give you access to older Firefox versions https://www.mozilla.org/en-US/firefox/releases/.


You also need to download the extension that enables the use of JSFlow on Firefox http://www.jsflow.net/coins-2015.html
On the loaded web page you can click on the blue button "Dowload Tortoise" and manually add the extension to Firefox through the Add-ons>extensions option. 

When you restart Firefox, an additional window should popup. This is normal and means that the extension is correctly loaded. Otherwise, something went wrong.

**VERY IMPORTANT:** when you test the JSFlow examples make sure to close the window that pops up when you access the example page. For unknown reasons, when that window is left open, the display of the alert box is inconsistent in the execution of the examples. More precisely, the dialog box message varies and sometimes the dialog box does not even appear. I suspect a bug in the extension tool.


## Accessing Examples
To access the examples you will have to type in the browser the name of each file in directory /public/jsflow/
- example 1 http://localhost:3000/jsflow/example1.html
- example 2 http://localhost:3000/jsflow/example2.html

All the examples contain a small description and usually the guests are displayed on a light blue background color.

