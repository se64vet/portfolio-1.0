

var myFullpage = new fullpage('#main', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['/home', '/works', '/about', '/contact'],
	navigation: false,
	navigationPosition: 'right',
	
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 200,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: true,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,
	verticalCentered: false,
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	dropEffect: false,
	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
	waterEffect: false,
	waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){
		switch (destination.index) {
			case 0:
				document.querySelectorAll(".nav_link").forEach(function(link) {
					link.style.color = 'var(--main_color)'
				} )
				document.querySelector("[title = 'home'] a").style.color = 'var(--sub_color)'
				break;
			case 1:
				document.querySelectorAll(".nav_link").forEach(function(link) {
					link.style.color = 'var(--main_color)'
				} )
				document.querySelector("[title = 'works'] a").style.color = 'var(--sub_color)'
				break;
			case 2:
				document.querySelectorAll(".nav_link").forEach(function(link) {
					link.style.color = 'var(--main_color)'
				} )
				document.querySelector("[title = 'about'] a").style.color = 'var(--sub_color)'
				break;
			case 3:
				document.querySelectorAll(".nav_link").forEach(function(link) {
					link.style.color = 'var(--main_color)'
				} )
				document.querySelector("[title = 'contact'] a").style.color = 'var(--sub_color)'
				break;
		
			default:
				break;
		}
	},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});
