// JavaScript Document
$( document ).ready(function() {	
	var $menu = $('.menu-wrapper').masonry({
		  itemSelector: '.block',
		  gutter: 20,
		  resize: true
		});
		$menu.masonry('layout');
		
		setTimeout(function() { 
			$menu.masonry('layout');
		}, 4000);

//	$(function() {
//		  $('#slides').slidesjs({
//			width: 935,
//			height: 476,
//			navigation:false,
//			pagination:false
//		  });
//		});
	
	//map js
	var map;
	function initialize() {
	if ($('#map').length) {
	  var isDraggable = $(document).width() > 600 ? true : false;
	  map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		scrollwheel: false,
		draggable: isDraggable,
		center: new google.maps.LatLng(37.439171, -122.158096),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
					{
						"featureType": "all",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#e5deca"
							}
						]
					},
					{
						"featureType": "all",
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"gamma": 0.01
							},
							{
								"lightness": 20
							}
						]
					},
					{
						"featureType": "all",
						"elementType": "labels.text.stroke",
						"stylers": [
							{
								"saturation": -31
							},
							{
								"lightness": -33
							},
							{
								"weight": 2
							},
							{
								"gamma": 0.8
							},
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "all",
						"elementType": "labels.icon",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "landscape",
						"elementType": "geometry",
						"stylers": [
							{
								"lightness": 30
							},
							{
								"saturation": 30
							}
						]
					},
					{
						"featureType": "landscape.man_made",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#e5dec9"
							},
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "landscape.man_made",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "geometry",
						"stylers": [
							{
								"saturation": 20
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#d0c4a2"
							}
						]
					},
					{
						"featureType": "poi.medical",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#ede1b4"
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "geometry",
						"stylers": [
							{
								"lightness": 20
							},
							{
								"saturation": -20
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#e4cb7d"
							}
						]
					},
					{
						"featureType": "poi.school",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#edd898"
							}
						]
					},
					{
						"featureType": "poi.sports_complex",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#efe1b3"
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "geometry",
						"stylers": [
							{
								"lightness": 10
							},
							{
								"saturation": -30
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"saturation": 25
							},
							{
								"lightness": 25
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#f6f3ec"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"visibility": "off"
							},
							{
								"color": "#f6f3ec"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "labels.text",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "labels.text",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "all",
						"stylers": [
							{
								"lightness": -20
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#b3b3b3"
							}
						]
					}
				]
		  });
		  
		    var contentString = '<div class="info-box">'+
			  '<h3 id="firstHeading" class="firstHeading">Tava Kitchen</h3>'+
			  '<p>Town & Country Village</p>' +
			  '<p>855 El Camino Real #162</p>' +
			  '<p>Palo Alto, CA 94301</p>' +
			  '<p>(650) 321-8282</p>' +
			  '<a href="https://www.google.com/maps/dir//Tava+Indian+Kitchen,+855+El+Camino+Real+%23162,+Palo+Alto,+CA+94301,+United+States/@37.4386254,-122.1627181,17z/data=!3m1!5s0x808fbb249a0babdb:0xff95595e4c44ff00!4m12!1m3!3m2!1s0x0000000000000000:0xacc77c56e50098fe!2sTava+Indian+Kitchen!4m7!1m0!1m5!1m1!1s0x808fbb249adde0a3:0xacc77c56e50098fe!2m2!1d-122.1580972!2d37.439164" target="_blank">Get Directions</a>'+
			  '</div>';
		
		  var infowindow = new google.maps.InfoWindow({
			content: contentString
		  });

		  
		  var iconImage = {
			  url: "img/marker.png",
		  };
		  
		  marker = new google.maps.Marker({
			  map:map,
			  animation: google.maps.Animation.DROP,
			  position: new google.maps.LatLng(37.439171, -122.158096),
			  icon: iconImage,
			});
			marker.addListener('click', function() {
			infowindow.open(map, marker);
		  });

			
			

		  }
		}
	initialize();
	
	//smooth scroll to anchor
		$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	});
	

	//$('.pre-loader').addClass('hide');
	$('.callout-wrapper, .header-bg').addClass('active');
	
	//GA Tracking
	function trackEvent(label){
		ga('send', 'event', 'LandingPage-2016', 'click', label);
	}
	
	$('#menu-link').click(function(){
		trackEvent('Menu');	
	});
	$('#map-link').click(function(){
		trackEvent('Find Us');	
	});
	$('.facebook').click(function(){
		trackEvent('Facebook');	
	});
	$('.twitter').click(function(){
		trackEvent('Twitter');	
	});	
	$('.instagram').click(function(){
		trackEvent('Instagram');	
	});
	

});
	  $(window).load(function(){  
		var $menu = $('.menu-wrapper').masonry({
			itemSelector: '.block',
			gutter: 20,
			resize: true
		  });
		  $menu.masonry('layout');

	  });