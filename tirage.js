var myArr = [];
var student = [];
var sujet = ["yh","rr","io","rtt"];

var sujetval = "";

for(i = 0; i < sujet.length; i++)
{
    sujetval = sujetval + sujet[i] + '</br>';
}


document.getElementById('sujet').innerHTML = sujetval;

function pushData()
{
    var inputText = document.getElementById('inputText').value;

    if( inputText){
        myArr.push(inputText);
    }

    var pval = "";

    for(i = 0; i < myArr.length; i++)
    {
        pval = pval + myArr[i] + '</br>';
    }

    document.getElementById('pText').innerHTML = myArr;

    document.getElementById('inputText').value = "";
    console.log(myArr);
}

function randomData()
{
    console.log(myArr);
    var randomItem = myArr[Math.floor(Math.random() * myArr.length)];
    document.getElementById('randName').innerHTML = randomItem;
    var inTable = myArr.indexOf(randomItem);
    myArr.splice(inTable, 1);
    this.pushData();

    student.push(randomItem);

    var stList = "";

    for(i = 0; i < student.length; i++)
    {
        stList = stList + student[i] + '</br>';
    }
    document.getElementById('sujetList').innerHTML = stList;

}

// function studenList()
// {
//     student.push(randomItem);
//     document.getElementById('sujetList').innerHTML = student;
// }



