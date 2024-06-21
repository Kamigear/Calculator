const displaye1 = document.querySelector(".Display-1");
const displaye2 = document.querySelector(".Display-2");
const tempresult = document.querySelector(".Temp-result");
const numberel = document.querySelectorAll(".Number");
const operationel = document.querySelectorAll(".Operation");
const equalel = document.querySelector(".Equal");
const allclearel = document.querySelector(".All-Clear");
const lastclearel = document.querySelector(".Last-Entity-Clear");

let dis1num = "";
let dis2num = "";
let result = null;
let lastoperation = "";
let havedot = "";

numberel.foreach((number) => {
	number.addEventListener("click", (e) => 
	{
		if (e.target.innerText === "." && !havedot)
		{
			havedot = true;
		}
		else if (e.target.innerText === "." && havedot) {
			return = true;
		}
		dis2num += e.target.innerText;
		displaye2el.innerText = dis2num;


	});
});

operationel.foreach((operation) => {
	operation.addEventListener("click", (e) =>
	{
		if (!dis2num) {
			return;
		}
		havedot = false;
		const operationname = e.target.innerText;
		if (dis1num && dis2num && lastoperation) {
			mathoperation(); 
		}
		else{
			result = parseFloat(dis2num);
		}
		clearVar(operationname);
		lastoperation = operationname;
		console.log(result);
	});
});

function clearVar(name = " ") {
	dis1num += dis2num + " " + name + " ";
	displaye1.innerText = dis1num;
	displaye2.innerText = "";
	dis2num = "";
	tempresult.innerText = result;
}

function mathoperation(){
	if (lastoperation === "x") {
		result = parseFloat(result) * parseFloat(dis2num);
	}
	else if(lastoperation === "+") {
		result = parseFloat(result) + parseFloat(dis2num);
	}
	else if(lastoperation === "-") {
		result = parseFloat(result) - parseFloat(dis2num);
	}
	else if(lastoperation === "/") {
		result = parseFloat(result) / parseFloat(dis2num);
	}
	else if(lastoperation === "%") {
		result = parseFloat(result) % parseFloat(dis2num);
	}
}