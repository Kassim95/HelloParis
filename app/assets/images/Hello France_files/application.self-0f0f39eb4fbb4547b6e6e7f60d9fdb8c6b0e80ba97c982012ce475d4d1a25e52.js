// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//









$(document).ready(function(){
	  $( "#tabs" ).tabs();
	  $('#tabs .ui-tabs-nav a[href="#tabs-1"], #tabs-1').addClass('status1');
	  $('#tabs .ui-tabs-nav a[href="#tabs-2"], #tabs-2').addClass('status2');
	  $('#tabs .ui-tabs-nav a[href="#tabs-3"], #tabs-3').addClass('status3');


})

