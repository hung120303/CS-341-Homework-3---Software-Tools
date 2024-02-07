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

			//For every month button under the dropdown menu, change the name of the dropdown to the month
			$("#jan").click(function(){
				document.getElementById("currMonth").innerHTML = "Jan";
			});
			$("#feb").click(function(){
				document.getElementById("currMonth").innerHTML = "Feb";
			});
			$("#mar").click(function(){
				document.getElementById("currMonth").innerHTML = "Mar";
			});
			$("#apr").click(function(){
				document.getElementById("currMonth").innerHTML = "Apr";
			});
			$("#may").click(function(){
				document.getElementById("currMonth").innerHTML = "May";
			});
			$("#jun").click(function(){
				document.getElementById("currMonth").innerHTML = "Jun";
			});
			$("#jul").click(function(){
				document.getElementById("currMonth").innerHTML = "Jul";
			});
			$("#aug").click(function(){
				document.getElementById("currMonth").innerHTML = "Aug";
			});
			$("#sep").click(function(){
				document.getElementById("currMonth").innerHTML = "Sep";
			});
			$("#oct").click(function(){
				document.getElementById("currMonth").innerHTML = "Oct";
			});
			$("#nov").click(function(){
				document.getElementById("currMonth").innerHTML = "Nov";
			});
			$("#dec").click(function(){
				document.getElementById("currMonth").innerHTML = "Dec";
			});
		});

