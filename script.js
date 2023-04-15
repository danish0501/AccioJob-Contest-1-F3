let dataArr = [];

let divData = document.getElementById("arrData");

function generateList(arg) {
    let items = "";
    for (let i = 0; i < arg.length; i++) {
        items += `
        <li id="li${arg[i].id}" >Name: ${arg[i].name} &nbsp;&nbsp;&nbsp;&nbsp;Profession:${arg[i].profession}
        &nbsp;&nbsp;&nbsp;&nbsp;Age:${arg[i].age}
        <button id="btn2" type="button" onclick="deleteUser('${arg[i].id}')">Delete User</button>`;
    }
    return items;
}

document.getElementById("arrData").innerHTML = `<ol>${generateList(dataArr)}</ol>`;

let input = document.getElementsByTagName("input");

let form2 = document.forms["forAdd"];

let button1 = document.getElementById("btn1");
button1.addEventListener("click", (e) => {
    if (
        input.name.value === "" ||
        input.profession.value === "" ||
        input.age.value === ""
    ) {
        document.getElementById("red").innerHTML =
            `<p>Error : Please Make sure All the fields are filled before adding in an employee !</p> `;
    }
    else {
        document.getElementById("employees").style.display = "none";
        document.getElementById("btn2").style.display = "block";
    }
});

form2.onsubmit = function (e) {
    e.preventDefault();

    dataArr.push({
        id: dataArr.length + 1,
        name: input.name.value,
        profession: input.profession.value,
        age: input.age.value,
    });
    console.log(dataArr);
    input.name.value = "";
    input.profession.value = "";
    input.age.value = "";

    document.getElementById("red").innerHTML = `<p></p>`;

    document.getElementById("green").innerHTML = `<p>Success : Employee Added !</p>`;

    document.getElementById("arrData").innerHTML = `<ol>${generateList(dataArr)}</ol>`;
};

function deleteUser(id) {

    var idx = -1;
    for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i].id == id) {
            idx = i;
            break;
        }
    }

    dataArr.splice(idx, 1);

    document.getElementById("arrData").innerHTML = `<ol>${generateList(dataArr)}</ol>`;
}