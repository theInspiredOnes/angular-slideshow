#angular-slideshow-module

A flexible module for [AngularJS](http://angularjs.org/) to implement slideshow-like elements.

##Installation

All you need is AngularJS and the slideshow module in `slideshow.js`.

```html
<script type="text/javascript" src="path/to/js/angular.min.js"></script>
<script type="text/javascript" src="path/to/js/slideshow.js"></script>
```

If you already have an Angular app up and running, add `slideshow` to its dependencies like so:

```javascript
angular.module('myCoolApp', ['slideshow'])
```

##Usage

Properly installed the `slideshow` directive is ready to use. It is invoked by the `data-slideshow` attribute wich contains the number of slideshow elements as value. The `data-interval` attribute is required, too, which has the display time of one slideshow element as its value.

The slideshow elements make use of the `ng-class` directive and get the class `visible` if `current` is equal to the index of the respective slideshow element or the class `out` if `fadeout` is `true` and `current` is equal to the index of the following slideshow element.

###As stand-alone app

If the slideshow is the only use of Angular on your website you can realize it like this:

```html
<div data-ng-app="slideshow" data-slideshow="3" data-interval="6000" class="slideshow">
   <div class="visible" data-ng-class="{visible: current==0, out: fadeout&&current==1}"></div> 
   <div data-ng-class="{visible: current==1, out: fadeout&&current==2}"></div> 
   <div data-ng-class="{visible: current==2, out: fadeout&&current==0}"></div> 
</div>
```

###As dependency

If the slideshow is embedded in your Angular app do it like this:

```html
<div data-ng-app="myCoolApp">
	<!--...-->
	<div data-slideshow="3" data-interval="6000" class="slideshow">
	   <div class="visible" data-ng-class="{visible: current==0, out: fadeout&&current==1}"></div> 
	   <div data-ng-class="{visible: current==1, out: fadeout&&current==2}"></div> 
	   <div data-ng-class="{visible: current==2, out: fadeout&&current==0}"></div> 
	</div>
	<!--...-->
</div>
```

##CSS

The appearance of the slideshow element depends solely on its CSS. In most cases the minimum CSS looks like this:

```css
.slideshow {
   position: relative;
   /* your element dimensions */
   height: 500px; 
   width: 500px;
}

.slideshow > div {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
```

For the slideshow module to actually do something visible you have to add to this CSS depending on what you wish to create. See the examples for different possibilities.