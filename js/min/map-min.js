function init(){function e(e,o,t,n,i,r,l,a){var p=function(){var e=!1;return function(o){return void 0!==o&&(e=o),e}}();iw=new google.maps.InfoWindow,google.maps.event.addListener(e,"click",function(){if(p())iw.close(),p(!1);else{var s="<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+t+"</h4><p>"+n+"<p><p>"+i+"<p><a href='mailto:"+r+"' >"+r+"<a><a href='"+a+"'' >"+l+"<a></div>";iw=new google.maps.InfoWindow({content:s}),iw.open(o,e),p(!0)}}),google.maps.event.addListener(iw,"closeclick",function(){p(!1)})}var o={center:new google.maps.LatLng(43.03981,-87.903257),zoom:10,zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.MEDIUM,position:google.maps.ControlPosition.RIGHT_TOP},disableDoubleClickZoom:!1,mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR},scaleControl:!0,scrollwheel:!0,panControl:!0,panControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP},streetViewControl:!0,draggable:!0,overviewMapControl:!0,overviewMapControlOptions:{opened:!1},mapTypeId:google.maps.MapTypeId.ROADMAP,styles:[{featureType:"water",stylers:[{visibility:"on"},{color:"#b5cbe4"}]},{featureType:"landscape",stylers:[{color:"#efefef"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#83a5b0"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#bdcdd3"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e3eed3"}]},{featureType:"administrative",stylers:[{visibility:"on"},{lightness:33}]},{featureType:"road"},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"on"},{lightness:20}]},{},{featureType:"road",stylers:[{lightness:20}]}]},t=document.getElementById("map"),n=new google.maps.Map(t,o),r=[["Northwestern Mutual Van Buren","undefined","555-555-5555","app@northwesternmutual.com","http://www.northwesternmutual.com",43.03981,-87.903257,"https://mapbuildr.com/assets/img/markers/default.png"]];for(i=0;i<r.length;i++)"undefined"==r[i][1]?description="":description=r[i][1],"undefined"==r[i][2]?telephone="":telephone=r[i][2],"undefined"==r[i][3]?email="":email=r[i][3],"undefined"==r[i][4]?web="":web=r[i][4],"undefined"==r[i][7]?markericon="":markericon=r[i][7],marker=new google.maps.Marker({icon:markericon,position:new google.maps.LatLng(r[i][5],r[i][6]),map:n,title:r[i][0],desc:description,tel:telephone,email:email,web:web}),"http://"!=web.substring(0,7)?link="http://"+web:link=web,e(marker,n,r[i][0],description,telephone,email,web,link)}google.maps.event.addDomListener(window,"load",init);var map;