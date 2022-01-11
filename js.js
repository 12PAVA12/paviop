name_of_student_array = [];
function submit(){
  var display_student_array=[]; 
  for(var j = 1 ; j<=4 ; j++ )
  {
      var name_of_student = document.getElementById("student"+j).value;
      console.log(name_of_student);
      name_of_student_array.push(name_of_student);
  }
    console.log(name_of_student_array);
    console.log(name_of_student_array.length);

    for( var p=0 ; p < name_of_student_array.length ; p++)
    {
        display_student_array.push("<h4> Name-"+ name_of_student_array[p] + "</h4>");
        console.log(display_student_array);
    }

    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("sumbit").style.display = "none";
   // document.getElementById("sort").style.display = "inline-block";
}
    
    function sort(){
        name_of_student_array.sort();
        console.log(name_of_student_array);
        var display_student_array_sorting = [];
        console.log(name_of_student_array.length);

        for( var p=0 ; p < name_of_student_array.length ; p++)
    {
        display_student_array_sorting.push("<h4> Name-"+ name_of_student_array[p] + "</h4>");
        console.log(display_student_array_sorting);
    }

        var remove_commas = display_student_array_sorting.join(" ");
        console.log(remove_commas);
        document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    }




    
