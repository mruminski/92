'use strict';
(function(){ 
	var removeClass = function(selector, remove) {
		var array = document.querySelectorAll(selector);
		array.forEach(function(item) {
			item.classList.remove(remove);
		})
	}

	var addClass = function(selector, append) {
		var attribute = selector.getAttribute("href");
		document.querySelector(attribute).classList.add(append);
	};
	
	var showModal = function(event){
		event.preventDefault();

		removeClass('.modal','show')
		addClass(event.target, "show");

		document.querySelector('#modal-overlay').classList.add('show');
	};
	
	var modalLinks = document.querySelectorAll('.show-modal');
	
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}
	
	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
		
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
	var modals = document.querySelectorAll('.modal');
	var modalLen = modals.length;

	for(var i = 0; i < modalLen; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
})(); 