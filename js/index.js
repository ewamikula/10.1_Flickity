'use strict';
 
(function() {
 
    var templateList = document.getElementById('template-list').innerHTML;
    var templateItem = document.getElementById('template-slide').innerHTML;
    Mustache.parse(templateItem);
 
    var listItems = '';
 
    for (var i = 0; i < slidesData.length; i++) {
        console.log(slidesData);
        listItems += Mustache.render(templateItem, slidesData[i]);
    }
 
    var fullProductList = Mustache.render(templateList, {slides: listItems });
    slider.insertAdjacentHTML('beforeend', fullProductList);
 
 
})();
 
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
 
}); 
 
var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray(buttons);
 
buttonGroup.addEventListener('click', function(event) {
    // filter for button clicks
    if (!matchesSelector(event.target, '.button')) {
        return;
    }
    var index = buttons.indexOf(event.target);
    flkty.selectCell(index);
});
 
 
 
var progressBar = document.querySelector('.progress-bar')
 
flkty.on('scroll', function(progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});

(function(){ 
    
    var infos = document.getElementById('infos');

    window.initMap = function() {
        
        var uluru = {lat: -25.363, lng: 131.044};
        var coords2 = {lat: -25.363, lng: 134.044};
        var coords3 = {lat: -25.363, lng: 137.044};
        
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        
            var markerOne = new google.maps.Marker({
            position: uluru,
            map: map
        });
        
        markerOne.addListener('click', function(){
            infos.innerHTML = 'You clicked markerOne';
        });     
                
        var markerTwo = new google.maps.Marker({
            position: coords2,
            map: map
        });

        markerTwo.addListener('click', function(){
            infos.innerHTML = 'You clicked markerTwo';
        });     
        
        var markerThree = new google.maps.Marker({
            position: coords3,
            map: map
        });
        
        markerThree.addListener('click', function(){
            infos.innerHTML = 'You clicked markerThree';
        });         
    };
})();  

initMap();