student_array=[];

function submit()
{
    var name_1= document.getElementById("n1").value;
    var name_2= document.getElementById("n2").value;
    var name_3= document.getElementById("n3").value;
    var name_4= document.getElementById("n4").value;

    student_array.push(name_1);
    student_array.push(name_2);
    student_array.push(name_3);
    student_array.push(name_4);

    console.log(student_array);

    document.getElementById("displayname").innerHTML=student_array;
    document.getElementById("b1").style.display="none";
    document.getElementById("b2").style.display="inline-block"
}

function sorting()
{
student_array.sort();
console.log(student_array);
document.getElementById("displayname").innerHTML=student_array;
}