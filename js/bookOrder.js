function bookOrder(total){

		var total = 0;
		var bookValue = 12.99;
		var orderQty = document.getElementById("qtyOrdered").value;
		if (orderQty <1){
			alert("Order quanity must be at least 1");
		}
		else if(orderQty > 25){
			alert("Apologies, there is an order limit of 25 in place")
		}
		else{

		total = bookValue * orderQty
		alert("Thank you for ordering, your total is €" +total);
		}

	/*	document.getElementById("userTotal").style.display="block";
		document.getElementById("userTotal").innerHTML =total; */

}
