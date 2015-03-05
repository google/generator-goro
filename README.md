# generator-goro Overview

This boilerplate is intended to jumpstart creation of marketing websites on Goro that use AngularJS.

### Usage

Install generator-goro:

```npm install -g generator-goro```

Make a new directory then cd into it:

```mkdir my-project && cd $_```

Run ```yo goro``` and answer the questions.

### Writing JavaScript
Please be sure your Javascript follows the [Google Javascript](https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml) and [Google AngularJS](https://google-styleguide.googlecode.com/svn/trunk/angularjs-google-style.html) style guides. Google doesn't write Angular the same way it is shown on the external AngularJS site.

Using AngularJS in Goro is some what tricky due to the usage of the Closure Compiler. But most of this is resolved for you with the boilerplate. Read the Goro documentation on using AngularJS with Goro for more info.

Easily debug changes in your site by appending ?debug=1 to your goro preview url. This will use the uncompiled js and make it easier to debug.

### More About Yeoman

To learn more about Yeoman check out the [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started). Yeoman also heaviliy relies on [Grunt](http://gruntjs.com) and [Bower](http://bower.io). 

### License

Apache 2.0