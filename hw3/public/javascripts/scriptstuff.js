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

					/* POST json object */
					$.post('/neworder', 
					 {quantity: num, topping: topping, notes: order}
					);
				}
			});

			

			//When a month button is clicked in the dropdown, change the month
			$("#monthDropdown button").click(function(){
				var currMonth = $(this).text().replace(/\s/g, '');
				document.getElementById("currMonth").innerHTML = currMonth;
				//Change the lists order through the JSON order object
				$.post('/orders', {month : currMonth}, function(data) {
					
					//Check the current month, and set the correct content to the listing based on it through the database
					switch(currMonth.toLowerCase()){
						case "jan": 
							document.getElementById("li1").innerHTML = data[0][0].order_count + " " + data[0][0].TOPPING;
							document.getElementById("li2").innerHTML = data[0][1].order_count + " " + data[0][1].TOPPING;
							document.getElementById("li3").innerHTML = data[0][2].order_count + " " + data[0][2].TOPPING;							
							break;
						case 'feb': 
							document.getElementById("li1").innerHTML = data[1][0].order_count + " " + data[1][0].TOPPING;
							document.getElementById("li2").innerHTML = data[1][1].order_count + " " + data[1][1].TOPPING;
							document.getElementById("li3").innerHTML = data[1][2].order_count + " " + data[1][2].TOPPING;								
							break;
						case 'mar': 
							document.getElementById("li1").innerHTML = data[2][0].order_count + " " + data[2][0].TOPPING;
							document.getElementById("li2").innerHTML = data[2][1].order_count + " " + data[2][1].TOPPING;
							document.getElementById("li3").innerHTML = data[2][2].order_count + " " + data[2][2].TOPPING;								
							break;						
						case 'apr': 
							document.getElementById("li1").innerHTML = data[3][0].order_count + " " + data[3][0].TOPPING;
							document.getElementById("li2").innerHTML = data[3][1].order_count + " " + data[3][1].TOPPING;
							document.getElementById("li3").innerHTML = data[3][2].order_count + " " + data[3][2].TOPPING;							
							break;
						case 'may': 
							document.getElementById("li1").innerHTML = data[4][0].order_count + " " + data[4][0].TOPPING;
							document.getElementById("li2").innerHTML = data[4][1].order_count + " " + data[4][1].TOPPING;
							document.getElementById("li3").innerHTML = data[4][2].order_count + " " + data[4][2].TOPPING;							
							break;						
						case 'jun': 
							document.getElementById("li1").innerHTML = data[5][0].order_count + " " + data[5][0].TOPPING;
							document.getElementById("li2").innerHTML = data[5][1].order_count + " " + data[5][1].TOPPING;
							document.getElementById("li3").innerHTML = data[5][2].order_count + " " + data[5][2].TOPPING;							
							break;						
						case 'jul':
							document.getElementById("li1").innerHTML = data[6][0].order_count + " " + data[6][0].TOPPING;
							document.getElementById("li2").innerHTML = data[6][1].order_count + " " + data[6][1].TOPPING;
							document.getElementById("li3").innerHTML = data[6][2].order_count + " " + data[6][2].TOPPING;								
							break;							 
						case 'aug':
							document.getElementById("li1").innerHTML = data[7][0].order_count + " " + data[7][0].TOPPING;
							document.getElementById("li2").innerHTML = data[7][1].order_count + " " + data[7][1].TOPPING;
							document.getElementById("li3").innerHTML = data[7][2].order_count + " " + data[7][2].TOPPING;							
							break;							 
						case 'sep':
							document.getElementById("li1").innerHTML = data[8][0].order_count + " " + data[8][0].TOPPING;
							document.getElementById("li2").innerHTML = data[8][1].order_count + " " + data[8][1].TOPPING;
							document.getElementById("li3").innerHTML = data[8][2].order_count + " " + data[8][2].TOPPING;								
							break;							 
						case 'oct':
							document.getElementById("li1").innerHTML = data[9][0].order_count + " " + data[9][0].TOPPING;
							document.getElementById("li2").innerHTML = data[9][1].order_count + " " + data[9][1].TOPPING;
							document.getElementById("li3").innerHTML = data[9][2].order_count + " " + data[9][2].TOPPING;								
							break;							 
						case 'nov': 
							document.getElementById("li1").innerHTML = data[10][0].order_count + " " + data[10][0].TOPPING;
							document.getElementById("li2").innerHTML = data[10][1].order_count + " " + data[10][1].TOPPING;
							document.getElementById("li3").innerHTML = data[10][2].order_count + " " + data[10][2].TOPPING;								
							break;						
						case 'dec':
							document.getElementById("li1").innerHTML = data[11][0].order_count + " " + data[11][0].TOPPING;
							document.getElementById("li2").innerHTML = data[11][1].order_count + " " + data[11][1].TOPPING;
							document.getElementById("li3").innerHTML = data[11][2].order_count + " " + data[11][2].TOPPING;								
							break;							
					}

				});
			});
		});

