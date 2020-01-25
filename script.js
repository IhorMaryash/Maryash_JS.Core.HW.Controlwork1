function elem(e) {
    return document.querySelector(e);
}

elem(".buttonedit").onclick = function () {
    elem(".block1").style.display = "block";
    elem(".block2").style.display = "none";
    elem(".area").value = elem(".box").innerHTML;
};
elem(".buttonstyle").onclick = function () {
    elem(".block2").style.display = "flex";
    elem(".block1").style.display = "none";
};

function fontSize() {
    elem(".box").style.fontSize = event.target.value;
}
elem("select").onchange = function () {
    for (let i = 0; i < elem("select").length; i++) {
        if (elem("select")[i].selected) {
            let font = elem("select")[i].value;
            elem(".box").style.fontFamily = `${font}`;
        }
    }
};
let arr = [
    "blue",
    "green",
    "yellow",
    "black",
    "white",
    "red",
    "orange",
    "gray",
    "pink"
];

let blockcolnum = document.getElementsByClassName("blockcolnum");
for (let i = 0; i < blockcolnum.length; i++) {
    blockcolnum[i].style.background = arr[i];
}
let userform2 = document.forms["userform2"].children;
userform2[0].onclick = function () {
    elem(".blockcolor").style.display = "flex";
    for (let i = 0; i < blockcolnum.length; i++) {
        blockcolnum[i].onclick = function () {
            elem(".box").style.color = arr[i];
            elem(".blockcolor").style.display = "none";
        };
    }
};
userform2[1].onclick = function () {
    elem(".blockcolor").style.display = "flex";
    for (let i = 0; i < blockcolnum.length; i++) {
        blockcolnum[i].onclick = function () {
            elem(".box").style.background = arr[i];
            elem(".blockcolor").style.display = "none";
        };
    }
};

let userform3 = document.forms["userform3"].children;

userform3[0].onclick = function () {
    if (userform3[0].checked) {
        elem(".box").style.fontWeight = "bold";
    } else {
        elem(".box").style.fontWeight = "normal";
    }
};

userform3[2].onclick = function () {
    if (userform3[2].checked) {
        elem(".box").style.fontStyle = "italic";
    } else {
        elem(".box").style.fontStyle = "normal";
    }
};

elem(".buttonadd").onclick = function () {
    elem(".container").style.display = "none";
    elem(".box2").style.display = "block";
};
elem(".buttonsave").onclick = function () {
    elem(".box").innerHTML = elem(".area").value;
    elem(".block1").style.display = "none";
};

let userform4 = document.forms["userform4"].elements;
userform4[0].onclick = function () {
    elem(".table").style.display = "block";
    elem(".list").style.display = "none";
};
userform4[1].onclick = function () {
    elem(".list").style.display = "block";
    elem(".table").style.display = "none";
};

let userform5 = document.forms["userform5"].elements;
for (let i = 0; i < 4; i++) {
    userform5[i].style.width = "450px";
}
userform5[4].style.width = "60px";
for (let i = 0; i < userform5[6].length; i++) {
    userform5[6][i].value = arr[i];
    userform5[6][i].textContent = arr[i];
}

userform5[7].onclick = function () {
    let table = document.createElement("table");
    table.classList.add("remove");
    elem(".none").appendChild(table);
    for (let i = 0; i < userform5[0].value; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for (let i = 0; i < userform5[1].value; i++) {
            let td = document.createElement("td");
            td.textContent = "TD";
            td.style.width = userform5[2].value + "px";
            td.style.height = userform5[3].value + "px";
            tr.appendChild(td);
            for (let i = 0; i < userform5[5].length; i++) {
                if (userform5[5][i].selected) {
                    td.style.border = userform5[4].value + "px " + userform5[5][i].value;
                }
            }
            for (let i = 0; i < userform5[6].length; i++) {
                if (userform5[6][i].selected) {
                    td.style.borderColor = userform5[6][i].value;
                }
            }
        }
    }
    elem(".area").value += elem(".none").innerHTML;
    elem(".container").style.display = "block";
    elem(".box2").style.display = "none";
    elem("table").remove();
};

let userform6 = document.forms["userform6"].elements;
console.log(userform6);
userform6[2].onclick = function () {
    let ul = document.createElement("ul");
    elem(".none").appendChild(ul);
    for (let i = 0; i < userform6[0].value; i++) {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = `item ${i + 1}`;
    }
    for (let i = 0; i < userform6[1].length; i++) {
        if (userform6[i].selected) {
            ul.style.listStyle = userform6[i].value;
        }
    }
    elem(".area").value += elem(".none").innerHTML;
    elem(".container").style.display = "block";
    elem(".box2").style.display = "none";
    elem("ul").remove();
};