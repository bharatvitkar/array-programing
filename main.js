student_array=[];

function submit()
{
    var display_student_name=[];

    for(var j=1;j<=4;j++)
    {
        var student_name= document.getElementById("n"+j).value;
        console.log(student_name);
        student_array.push(student_name);
    }
    console.log(student_array);

  var length_array= student_array.length;
  console.log(length_array);
  for(var k=0;k<length_array;k++)
  {
     display_student_name. push("<h4>Name -"+ student_array[k]+ "</h4>");
     console.log(display_student_name);
  }

    console.log(display_student_name);


    document.getElementById("display_name_with_commas").innerHTML=display_student_name;
    var remove_commas=display_student_name.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("b1").style.display="none";
    document.getElementById("b2").style.display="inline-block"
}

function sorting()
{
student_array.sort();
console.log(student_array);

var display_sorting=[];

var length_array= student_array.length;
console.log(length_array);
for(var k=0;k<length_array;k++)
{
   display_sorting. push("<h4>Name -"+ student_array[k]+ "</h4>");
   console.log(display_sorting);
}
var remove_commas=display_sorting.join(" ");

  console.log(display_sorting);



  document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}