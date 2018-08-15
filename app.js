(function () {
	"use strict";

	var log = function(data){
		console.log(data);
	};

	var parent = document.getElementById("root");

	parent.addEventListener("mouseenter", function(){
		add();
	});

	parent.addEventListener("mouseleave", function(){
		remove();
	});

	var add = function(){
		parent.classList.add("revealed");
	};

	var remove = function(){
		parent.classList.remove("revealed");

	};

	var checkfunction = function(){

		var check = document.getElementById("check");
		
		check.addEventListener("click", function(){
			if (check.checked == true){
				add();
				log('ajout');
			}
			else {
				remove();
				log('remove');
			};
		});
	};


	checkfunction();



	var rangeDiv = function(){
	var i, divSelect = document.getElementsByClassName("child");
	log(divSelect);
	var rangeSelect = document.getElementById("range");
	for (let i=0; i < divSelect.length; i++){
		rangeSelect.addEventListener("input", function(){
			divSelect[i].style.height = rangeSelect.value + "px";
		})
		};

	};
	rangeDiv();


}());