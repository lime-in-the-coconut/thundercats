/*Place all the behaviors and hooks related to the matching controller here.*/
// All this logic will automatically be available in application.js.
$(document).ready(function() {
	//$('.quantity').val('How many?')

	$(document).on('click', '#toggle_cart_button',function () {
		
		var display = $('#cart_detail_panel').css('display');
		if (display =="none") {
			$('#cart_detail_panel').slideDown();
		} 
		else {
			$('#cart_detail_panel').slideUp();
		}
	});

	$('.add-to-cart-button').click(function () {
		var quantity_text_box = $(this).siblings('.quantity');
		var value = quantity_text_box.val();

		//change value to an integer
		var value_int = parseInt(value);

		var product_id = $(this).data('product-id');

		var product_name = $(this).data('product-name');

		var price = $(this).data('price');


		//Make an AJAX request
		if (value_int > 0) {
			$.post('/store/add_cart', {
				quantity : value_int,
				product_id : product_id,
				product_name : product_name,
				price : price
			});
		} else {
			alert(value_int + 'is not a valid entry');
		}
	});
});

		//quantity_text_box.val(1);

		//alert('Oooo your kitties will be so happy! You ordered '+ value);
		

/*$('.add-to-cart-button').mouseover(function () {
	alert('Please buy me for your kitties!');
	}); */