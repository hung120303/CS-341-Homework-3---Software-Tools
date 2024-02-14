		//Hung-Nghi Vu
		//Script to run on document load time
		$(document).ready(function(){
			//Order button
			$("#orderButton").click(function(){
				//Record the quantity, topping, and order text
				var order = $("#order").val();
				var num = $("#number").val();
				var topping;	
		
				//Set the topping in message to topping selected
				if(document.getElementById("plain").checked == true){
					topping = "plain";
				}
				else if(document.getElementById("cherry").checked == true){
					topping = "cherry";
				}
				else if(document.getElementById("chocolate").checked == true){
					topping = "chocolate";
				}

				//Alert warning if order contains vegan
				if(order.includes("vegan")){
					alert("WARNING: cheesecakes contain dairy");
				}
				//Otherwise, reveal the order message with details
				else{
					$("table").hide();
					$("#notes").hide();
					$("#order").hide();
					$("#orderButton").hide();
					$("orderText").show();
					document.getElementById("orderQuantity").innerHTML = "Quantity: " + num;
					document.getElementById("orderTopping").innerHTML = "Topping: " + topping;
					document.getElementById("orderNotes").innerHTML = "Notes: " + order;
				}
			});

			

			//When a month button is clicked in the dropdown, change the month
			$("#monthDropdown button").click(function(){
				var currMonth = $(this).text();
				document.getElementById("currMonth").innerHTML = currMonth;
				//Change the lists order through the JSON order object
				$.post('/orders', {month : currMonth}, function(data) {
					document.getElementById("li1").innerHTML = data[0].quantity + " " + data[0].topping;
					document.getElementById("li2").innerHTML = data[1].quantity + " " + data[1].topping;
					document.getElementById("li3").innerHTML = data[2].quantity + " " + data[2].topping;
				});
			});
		});

