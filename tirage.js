let studentSelected;
var student =[] ;
let data;
let submit = document.querySelector(".add");
let ArrSujet = ["React", "React Native", "NodeJs", "ExpressJs", "MongoDb", "Fltter", "MERN Stack", "JavaScript"];
let arrAddSujet = [];
let slectedStudent = [];


get_random_students()
get_random_sujets()
get_students()

function pushData()
{
    let student_name = document.getElementById('inputText').value;
    if(student_name)
    {
        fetch("http://localhost:3000/students",{
            method:"POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({student_name})
        }).then(res => this.get_students())
    }

    document.getElementById('inputText').value = "";
}

async function get_students() {

    await fetch("http://localhost:3000/students")
    .then(res => res.json())
    .then(data => student = JSON.stringify(data));
    data = JSON.parse(student)

    document.getElementById('pText').innerHTML= ""
    for (let iterator of data) {
        document.getElementById('pText').innerHTML += iterator.student_name +' <button id="delete_student" onclick="deleteStudent('+iterator.id+')"> Delete </button>' + '<br>';
    }
}

// Delete Names

function deleteStudent(id_student) {
    fetch("http://localhost:3000/students/"+id_student,{
        method: "DELETE",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ id:id_student })
    }).then(res=>this.get_students())
    .catch(e => console.error(e));
}

function randomData() 
{
    let randomItem = data[Math.floor(Math.random() * data.length)];
    console.log("randomItem",randomItem);
    document.getElementById('randName').innerHTML = randomItem.student_name + '<br>';
    deleteStudent(randomItem.id);

    // slectedStudent.push(randomItem.student_name);
    pushRandomName(randomItem.student_name);

}

function pushRandomName(slectedStudent)
{
    if(slectedStudent)
    {
        fetch("http://localhost:3000/selectednames",{
            method:"POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({slectedStudent})
        }).then(res => this.get_students())
    }
}

async function get_random_students() {

    await fetch("http://localhost:3000/selectednames")
    .then(res => res.json())
    .then(data => student = JSON.stringify(data));
    data = JSON.parse(student)

    document.getElementById('nomsList').innerHTML= ""
    for (let iterator of data) {
        document.getElementById('nomsList').innerHTML += iterator.slectedStudent + '<br>';
    }
    
}


let j = 0 ;
function addSujet()
{
    ArrSujet[j]
    pushRandomSujets(ArrSujet[j]);

    j++;

    if( j >= ArrSujet.length){
        j = 0;
      }
}

function pushRandomSujets(arrAddSujet)
{
    console.log("selectedSujets",slectedStudent);
    if(arrAddSujet)
    {
        fetch("http://localhost:3000/selectedSujets",{
            method:"POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({arrAddSujet})
        }).then(res => this.get_students())
    }

}

async function get_random_sujets() {

    await fetch("http://localhost:3000/selectedSujets")
    .then(res => res.json())
    .then(data => student = JSON.stringify(data));
    data = JSON.parse(student)

    document.getElementById('sujets').innerHTML= ""
    for (let iterator of data) {
        console.log(iterator.arrAddSujet);
        document.getElementById('sujets').innerHTML += iterator.arrAddSujet + '<br>';
    }
}



