		$(document).ready(function(){
			$("#orderButton").click(function(){
				var order = $("#order").val();
				var num = $("#number").val();
				var topping;	
		
				if(document.getElementById("plain").checked == true){
					topping = "plain";
				}
				else if(document.getElementById("cherry").checked == true){
					topping = "cherry";
				}
				else if(document.getElementById("chocolate").checked == true){
					topping = "chocolate";
				}

				if(order.includes("vegan")){
					alert("WARNING: cheesecakes contain dairy");
				}
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

