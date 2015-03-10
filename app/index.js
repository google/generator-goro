/* Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var GoroGenerator = yeoman.generators.Base.extend({
  initializing: function() {
    this.pkg = require('../package.json');
  },

  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the laudable Goro generator!'));

    var prompts = [
      {
        type: 'confirm',
        name: 'isVendor',
        message: 'Are you an agency developer?',
        default: false
      },
      {
        type: 'input',
        name: 'agencyName',
        message: 'What is the name of your agency?',
        when: function(response) {
          return response.isVendor;
        }
      },
      {
        type: 'input',
        name: 'agencyPOC',
        message: 'Please provide a point of contact. ex: John Smith jsmith@mydomain.com',
        when: function(response) {
          return response.isVendor;
        }
      },
      {
        type: 'input',
        name: 'projectDomain',
        message: 'What is the domain used for the project? ex: www.mydomain.com'
      },
      {
        type: 'input',
        name: 'projectPath',
        message: 'What is the path used for the project? ex: /about/products/'
      },
      {
        type: 'input',
        name: 'projectBranch',
        message: 'What is the branch name used for the project?'
      },
      {
        type: 'input',
        name: 'goroPath',
        message: 'What is the local path to your Goro CLI tool? Ex: ~/tools/goro/goro.py',
        default: '~/tools/goro/goro.py'
      }
    ];

    this.prompt(prompts, function(props) {
      this.isVendor = props.isVendor;
      this.agencyName = props.agencyName;
      this.agencyPOC = props.agencyPOC;
      this.projectDomain = props.projectDomain;
      this.projectPath = props.projectPath;
      this.projectBranch = props.projectBranch;
      this.goroPath = props.goroPath;

      done();
    }.bind(this));
  },

  configuring: function() {
    this.src.copy('editorconfig', '.editorconfig');
    this.src.copy('goroignore', '.goroignore');
  },

  writing: function() {
      // Set up directory structure
      this.mkdir('css');
      this.mkdir('css/components');
      this.mkdir('index.html_data');
      this.mkdir('js');
      this.mkdir('js/components');
      this.mkdir('js/components/my-component');
      this.mkdir('js/sections');

      // Process templates
      this.template('_gruntfile.js', 'gruntfile.js');
      this.template('_base.tpl', 'base.tpl');
      this.template('_index.html', 'index.html');
      this.template('js/_main.js', 'js/main.js');
      this.template('js/_app.js', 'js/app.js');
      this.template('js/_my-service.js', 'js/my-service.js');
      this.template('js/sections/_home-controller.js', 'js/sections/home-controller.js');
      this.template('js/components/my-component/_my-component-controller.js', 'js/components/my-component/my-component-controller.js');
      this.template('js/components/my-component/_my-component-directive.js', 'js/components/my-component/my-component-directive.js');

      // Copy non-template files
      this.src.copy('package.json', 'package.json');
      this.src.copy('config.inc.tpl', 'config.inc.tpl');
      this.src.copy('css/default.min.css', 'css/default.min.css');
      this.src.copy('css/components/my-component.scss', 'css/components/my-component.scss');
      this.src.copy('index.html_data/side-content.gnode', 'index.html_data/side-content.gnode');
      this.src.copy('js/main.min.js', 'js/main.min.js');
      this.src.copy('js/components/my-component/my-directive-template.html', 'js/components/my-component/my-directive-template.html');
      this.src.copy('README', 'README');
  },

  install: function () {
    this.installDependencies({
      bower: false
    });
  },

  end: function() {
    this.spawnCommand('grunt', ['shell']);
  }
});

module.exports = GoroGenerator;
