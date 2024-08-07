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
let havedot = false;

numberel.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !havedot) {
            havedot = true;
        } else if (e.target.innerText === "." && havedot) {
            return;
        }
        dis2num += e.target.innerText;
        displaye2.innerText = dis2num;
    });
});

operationel.forEach((operation) => {
    operation.addEventListener("click", (e) => {
        if (!dis2num) {
            return;
        }
        havedot = false;
        const operationname = e.target.innerText;
        if (dis1num && dis2num && lastoperation) {
            mathoperation();
        } else {
            result = parseFloat(dis2num);
        }
        clearVar(operationname);
        lastoperation = operationname;
        console.log(result);
    });
});

equalel.addEventListener("click", () => {
    if (!dis2num || !dis1num) return;
    havedot = false;
    mathoperation();
    clearVar();
    displaye2.innerText = result;
    tempresult.innerText = "";
    dis2num = result;
    dis1num = "";
});

allclearel.addEventListener("click", () => {
    displaye1.innerText = "";
    displaye2.innerText = "";
    tempresult.innerText = "";
    dis1num = "";
    dis2num = "";
    result = null;
    lastoperation = "";
    havedot = false;
});

lastclearel.addEventListener("click", (e) => {
    displaye2.innerText = "";
    dis2num = "";
});

window.addEventListener("keydown", (e) => {
    if ("0123456789.".includes(e.key)) {
        clickbuttonel(e.key);
    } else if ("+-/%".includes(e.key)) {
        clickoperation(e.key);
    } else if (e.key === "*") {
        clickoperation("X");
    } else if (e.key === "Enter" || e.key === "=") {
        clickequal();
    }
});

function clearVar(name = " ") {
    dis1num += dis2num + " " + name + " ";
    displaye1.innerText = dis1num;
    displaye2.innerText = "";
    dis2num = "";
    tempresult.innerText = result;
}

function mathoperation() {
    if (lastoperation === "X") {
        result = parseFloat(result) * parseFloat(dis2num);
    } else if (lastoperation === "+") {
        result = parseFloat(result) + parseFloat(dis2num);
    } else if (lastoperation === "-") {
        result = parseFloat(result) - parseFloat(dis2num);
    } else if (lastoperation === "/") {
        result = parseFloat(result) / parseFloat(dis2num);
    } else if (lastoperation === "%") {
        result = parseFloat(result) % parseFloat(dis2num);
    }
}

function clickbuttonel(key) {
    numberel.forEach((button) => {
        if (button.innerText === key) {
            button.click();
        }
    });
}

function clickoperation(key) {
    operationel.forEach((operation) => {
        if (operation.innerText === key) {
            operation.click();
        }
    });
}

function clickequal() {
    equalel.click();
}
