import {Tutorial} from "../tutorial.interface";

export const TYPE_COMPLETE = 'complete';
export const TYPE_INTRODUCTION = 'introduction';
export const TYPE_DIRECTIVES = 'directives';
export const TYPE_FORMS = 'forms';
export const TYPE_ROUTING = 'routing';
export const TYPE_HTTP = 'http';
export const TYPE_OTHER = 'other';

export const TUTORIALS: Tutorial[] = [
    {title: 'The Complete Guide to Angular 2', id: 'the-complete-guide', description: 'A 5-star rated, 12 hour Udemy course covering everything from components over databinding to routing and HTTP.', url: 'https://www.udemy.com/the-complete-guide-to-angular-2/?couponCode=angular2tutorials', type: TYPE_COMPLETE},
    {title: 'Official Documentation Tutorial', id: 'official-doc', description: 'A tutorial by the Angular 2 team covering many but not all aspects of Angular 2.', url: 'https://angular.io/docs/ts/latest/tutorial/', type: TYPE_COMPLETE},
    {title: 'Comprehensive YouTube Series on Angular 2', id: 'youtube-series', description: 'A playlist on YouTube which covers all important aspects you need to get started developing Angular 2 applications.', url: 'https://www.youtube.com/playlist?list=PL55RiY5tL51qIb5VW2ywbT12UZeqmzBAu', type: TYPE_COMPLETE},
    {title: '5 Minute Quickstart by Angular 2 Team', id: 'official-doc', description: 'An article by the official Angular 2 team which guides you through the required setup and starts off with a first, simple app.', url: 'https://angular.io/docs/ts/latest/quickstart.html', type: TYPE_INTRODUCTION},
    {title: 'Getting past Hello World in Angular 2', id: 'getting-past-hello-world', description: 'A very good quickstart guide which explains the required setup and explains the very basics of Angular 2 applications.', url: 'http://www.sitepoint.com/getting-past-hello-world-angular-2/', type: TYPE_INTRODUCTION},
    {title: 'Angular 2 template syntax', id: 'angular2-template-syntax', description: 'A tutorial which gives a very good overview over how to work with templates in Angular 2.', url: 'http://victorsavkin.com/post/119943127151/angular-2-template-syntax', type: TYPE_DIRECTIVES},
    {title: 'Official Documentation - Template Syntax', id: 'official-doc', description: 'By the Angular 2 Team. A very detailed explanation of the different possibilities to manipulate the template in an Angular 2 application.', url: 'https://angular.io/docs/ts/latest/guide/template-syntax.html', type: TYPE_DIRECTIVES},
    {title: 'Component Hierarchy & Inputs/ Outputs', id: 'component-hierarchy-inputs-outputs', description: 'Great article about the component hierarchy and how inputs and outputs are used for communication.', url: 'http://www.sitepoint.com/angular-2-components-inputs-outputs/', type: TYPE_DIRECTIVES},
    {title: 'Detailed Explanation of Directives ', id: 'github', description: 'This article on Github (official Angular 2 repo) dives a little deeper into the topic of directives and explains how to create custom directives, how dependency injection works and how to use directives.', url: 'https://github.com/angular/angular/blob/master/modules/angular2/docs/core/02_directives.md', type: TYPE_DIRECTIVES},
    {title: 'The Ultimate Guide to Forms in Angular 2 (ngBook2)', id: 'ngbook2', description: 'Absolute must-read. Very, very detailed article on Angular 2 forms, explaining a lot of important concepts (incl. custom validation).', url: 'http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/', type: TYPE_FORMS},
    {title: 'Official Documentation - Forms', id: 'official-doc', description: 'Very good article on Forms in Angular 2. Explains the core concepts and the different approaches.', url: 'https://angular.io/docs/ts/latest/guide/forms.html', type: TYPE_FORMS},
    {title: 'Angular 2 Forms - Template-driven vs Model-driven', id: 'angular2-forms-template-vs-data', description: 'An article which provides a fast overview over the two different approaches you can take when creating forms in Angular 2.', url: 'http://blog.jhades.org/introduction-to-angular-2-forms-template-driven-vs-model-driven/', type: TYPE_FORMS},
    {title: 'Angular 2 Form Builder and Validation Management', id: 'angular2-formbuilder-validation', description: 'Good article which focuses on the topic of validating forms. This includes how to dynamically output error message and use the built-in properties and CSS classes.', url: 'https://coryrylan.com/blog/angular-2-form-builder-and-validation-management', type: TYPE_FORMS},
    {title: 'Async Validation', id: 'async-validation', description: 'Blog entry which describes how to setup and use an async validator in Angular 2.', url: 'http://www.carlrippon.com/?p=564', type: TYPE_FORMS},
    {title: 'Official Documentation - Routing', id: 'official-doc', description: 'Article in the official documentation, which describes how to use the Router in Angular 2. This includes the router lifecycle, subrouting as well as passing parameters.', url: 'https://angular.io/docs/ts/latest/guide/router.html', type: TYPE_ROUTING},
    {title: 'Basic Routing', id: 'ngBook2', description: 'A quick overview over the fundamental parts of the Angular 2 Router package.', url: 'http://blog.ng-book.com/basic-routing-in-angular-2/', type: TYPE_ROUTING},
    {title: 'Github Repo showing how to protect routes', id: 'github', description: 'Great Github repository which shows to extend the built-in router-outlet to implement a custom \'middleware\' functionality.', url: 'https://github.com/auth0/angular2-authentication-sample', type: TYPE_ROUTING},
    {title: 'Official Documentation - Using the HTTP module', id: 'official-doc', description: 'Official documentation article describing how to access the web/ APIs using the HTTP service/ module. Very detailed and also with great example showing the advantages of observables.', url: 'https://angular.io/docs/js/latest/api/http/Http-class.html', type: TYPE_HTTP},
    {title: 'Introduction to HTTP module', id: 'introduction-to-http-module', description: 'Good article showing the very basics of how to use the HTTP module in Angular 2. Syntax is from alpha though and needs some minor adjustments.', url: 'https://medium.com/google-developer-experts/angular-2-introduction-to-new-http-module-1278499db2a0#.bygmatbj6', type: TYPE_HTTP},
    {title: 'Taking Advantage of Observables in Angular 2', id: 'advantages-angular2-observables', description: 'This a little more advanced article shows how to use the strengths of observables when using the Angular 2 HTTP module.', url: 'http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html', type: TYPE_HTTP},
    {title: 'Introduction to Redux with Angular 2', id: 'intro-angular2-redux', description: 'This articles explores the possibilities of using Redux in an Angular 2 app. It also shows how to implement such an approach.', url: 'https://medium.com/google-developer-experts/angular-2-introduction-to-redux-1cf18af27e6e#.gwa2ax3fs', type: TYPE_OTHER},
    {title: 'Official Documentation - Angular 2 Testing Overview', id: 'official-doc', description: 'An introductory article on testing Angular 2 applications.', url: 'https://angular.io/docs/ts/latest/testing/', type: TYPE_OTHER},
];