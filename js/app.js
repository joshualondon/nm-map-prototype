$(document).ready(function() { 

	$('#map').delay(99000).fadeIn();
	
	//////////////////////////////////////
	
	var $nameSearchLabel = $('.name-search-label');
	var $locationSearchLabel = $('.location-search-label');
	
	var $nameSearch = $('.name-search');
	var $locationSearch = $('.location-search');
	
	var $searchButton = $('.search-submit');
	
	
	/**
	*	change name search widths on focus & blur
	*/
	$nameSearch.on('focus', function() {
		$nameSearchLabel.addClass('input-active');
		$locationSearchLabel.addClass('input-inactive');
		
	}).on('blur', function() {
		if ( !$nameSearch.val() ) {
			$nameSearchLabel.removeClass('input-active');
			$locationSearchLabel.removeClass('input-inactive');
		}
	});
	
	
	/**
	*	change location search widths on focus & blur
	*/
	$locationSearch.on('focus', function() {
		$locationSearchLabel.addClass('input-active');
		$nameSearchLabel.addClass('input-inactive');
		
	}).on('blur', function() {		
		if ( !$locationSearch.val() ) {
			$locationSearchLabel.removeClass('input-active');
			$nameSearchLabel.removeClass('input-inactive');
		}
	});
	
	
	//////////////////////////////////////
	
	/**
	*	search intent (medium - large screen):
	*		makes the button larger
	*		hides the inactive input
	*/	
	function searchIntent() {
		
		/**
		*	make the button bigger after/while typing
		*/
		if ( (!!$nameSearch.val()) || (!!$locationSearch.val()) ) {
			$('.search-input-wrap').addClass('search-intent');
			$searchButton.addClass('search-intent');
		} else {
			$('.search-input-wrap').removeClass('search-intent');
			$searchButton.removeClass('search-intent');
		}
		
	}
	
	
	//////////////////////////////////////
	
	/**
	*	clear the input & remove search intent
	*/
	$('.clear-search-field').on('click', function() {
		$(this).prev('input').val('');
		$('.search-input-wrap').removeClass('search-intent');
		$searchButton.removeClass('search-intent');
	});
	
	
	
/*
	$nameSearch.on('blur', function() {

		if ( !$nameSearch.val() ) {
			$nameSearch.removeClass('is-focussed');
			$nameSearch.closest('label').removeClass('is-focussed');
			$('.location-search').removeClass('is-unfocussed');
		}
		
		
	}).on('focus', function(){
		
		$(this).addClass('is-focussed');
		$(this).closest('label').addClass('is-focussed');
		$('.location-search').addClass('is-unfocussed');

// need to make tab work		
		$nameSearch.bind('keypress', function(e) {
			if (e.which === 13) {
				$(this).find('.search-submit').focus;
			}
		});
		
	})
	
	$('.location-search').on('blur', function() {
		
		var $locationSearch = $(this);
		
		if ( !$locationSearch.val() ) {	
			$(this).removeClass('is-focussed');
			$(this).closest('label').removeClass('is-focussed');
			$('.name-search').removeClass('is-unfocussed');
		}
		
	}).on('focus', function(){
		
		$(this).addClass('is-focussed');
		$(this).closest('label').addClass('is-focussed');
		$('.name-search').addClass('is-unfocussed');
		
	});
*/
	
	
	
	
	
	function resetSearch() {
		$nameSearch.removeClass('.is-focussed is-unfocussed');
		$locationSearch.removeClass('.is-focussed is-unfocussed');
		$searchButton.removeClass('is-focussed');
	}
	
	$('.clear-search-field').on('click', function() {
		resetSearch();
	});
	
	
	$('.name-search, .location-search').on('keyup focusout', function() {
		searchIntent();
	});
	
	
	
	$('.filters-trigger').on('click', function() {
		$(this).toggleClass('filters-open');	
	});
	
	$('.toggle-single-filter').on('click', function() {
		$(this).toggleClass('is-expanded');
		$(this).closest('li').toggleClass('is-expanded');
	});
	
	$('.search-submit').on('click', function() {
		$('.search-results').toggleClass('is-active');
		//$('#map').toggleClass('results-open');
	});
	
	$('.faux-filter').on('click', function() {
		$('.toggle-single-filter').toggleClass('is-filtered');
	});
	
});