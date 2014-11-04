var squareoneAPI = (function () {

	var public = {};
	var navStatus = true;

	// MOBILE NAV FUNCTION
	function mobileNav() {

		// HAMBURGER CLICK EVENT
		$("#nav-icon").click(function() {

			// HAMBURGER CSS ANIMATION TOGGLE
			$(this).toggleClass("open");

			// NAV DROP DOWN ANIMATION
			if(navStatus) {
					TweenMax.to("#mobileNav", 0.5, {top:"45px", ease: Power4.easeInOut});
					navStatus = false;
				} else {
					TweenMax.to("#mobileNav", 0.5, {top:"-100%", ease: Power4.easeInOut});
					navStatus = true;
				}

		});

	}

	// POPULATE TABLE FUNCTION
	function populateTable() {

		// AJAX CALL
		$.ajax({
			url: "http://community.ally.com/svc/api/",
			success:  function(data) {
				updateDOM(data);
			},
			dataType: 'jsonp'
		});

		// APPEND DATA
		function updateDOM(data) {

			$("#row1 td:nth-child(1)").html(data.records[1].name);
			$("#row1 td:nth-child(2)").html(data.records[1].apy+" %");
			$("#row1 td:nth-child(3)").html("$"+data.records[1].earnings);

			$("#row2 td:nth-child(1)").html(data.records[0].name);
			$("#row2 td:nth-child(2)").html(data.records[0].apy+" %");
			$("#row2 td:nth-child(3)").html("$"+data.records[0].earnings);

			$("#row3 td:nth-child(1)").html(data.records[2].name);
			$("#row3 td:nth-child(2)").html(data.records[2].apy+" %");
			$("#row3 td:nth-child(3)").html("$"+data.records[2].earnings);

			$("#row4 td:nth-child(1)").html(data.records[3].name);
			$("#row4 td:nth-child(2)").html(data.records[3].apy+" %");
			$("#row4 td:nth-child(3)").html("$"+data.records[3].earnings);

			$("#row5 td:nth-child(1)").html(data.records[4].name);
			$("#row5 td:nth-child(2)").html(data.records[4].apy+" %");
			$("#row5 td:nth-child(3)").html("$"+data.records[4].earnings);

		}

	}

	// MODAL FUNCTION
	function modal() {

		// DESKTOP LOGIN
		$("#login").on("click", function() {

			TweenLite.to(["#overlay", "#modal"] , 0.15, {autoAlpha: 1, display: "block"}, Strong.easeInOut);

		});

		// HEADER LOGIN
		$("#mobileLogin1").on("click", function(e) {

			e.preventDefault();
			TweenLite.to(["#overlay", "#modal"] , 0.15, {autoAlpha: 1, display: "block"}, Strong.easeInOut);

		});

		// FOOTER LOGIN
		$("#mobileLogin2").on("click", function(e) {

			e.preventDefault();
			window.scrollTo(0,0);
			TweenLite.to(["#overlay", "#modal"] , 0.15, {autoAlpha: 1, display: "block"}, Strong.easeInOut);

		});

		// CLICK OVERLAY CLOSE
		$("#overlay").on("click", function() {

			TweenLite.to(["#overlay", "#modal"] , 0.15, {autoAlpha: 0, display: "none"}, Strong.easeInOut);

		});

		// BUTTON CLOSE
		$("#button-close").on("click", function() {

			TweenLite.to(["#overlay", "#modal"] , 0.15, {autoAlpha: 0, display: "none"}, Strong.easeInOut);

		});

		// ESCAPE CLOSE
		$(document).on("keyup", function(e) {
				if (e.keyCode == 27) {
					TweenLite.to(["#overlay", "#modal"] , 0.15, {autoAlpha: 0, display: "none"}, Strong.easeInOut);
				}
		});

	}

	// TABS FUNCTION

	function tabs() {

		$(".tab-group > div").hide();
		$(".tab-group > div:first-of-type").show();

		$(".tabs li a").on("click", function(e) {

			e.preventDefault();

			// CURRENT TAB
			var currentTab = $(this).attr("href");
			 
			// TOGGLE TABS
			$(".tab-group div" + currentTab).show().siblings().hide();

			// TOGGLE ACTIVE CLASS
			$(this).parent("li").addClass("active").siblings().removeClass("active");

		});

	}

	// INIT FUNCTION
	function init() {

		// CALL INIT FUNCTIONS
		console.log("squareoneAPI loaded...");
		mobileNav();
		populateTable();
		modal();
		tabs();
		
	}

	// PUBLIC FUNCTIONS
	public.init = init;


	// RETURN PUBLIC FUNCTIONS
	return public;

}());

$(document).on("ready", squareoneAPI.init);
