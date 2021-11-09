// Question 1 

// var arr = [];
//     arr [0] = "raza"
//     console.log(arr[0])


// Question 3 

// var stringarr = ["raza" , "taha" , "ali"]
// console.log(stringarr)


// Question 4

// var numarr = ["1" , "30" , "46"]
// console.log(numarr)


// Question 6

// var mixarr = [1, "modern", 2, "raza"]

// console.log(mixarr)


// QUestion 7

// var qualification0 = "Qualification"
// document.write(qualification0+ "<br>" );
// var qualificationarr = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
// for(i=0;i<qualificationarr.length;i++){
//     document.write("<br>" +[i]+")"+qualificationarr[i] ); 
// }


// QUestion 8

// var studentarr = ["Michael" , "John" , "Tony"];
// var scorearr = [320 , 230 , 480];
// var mark = 500;
// for (i=0;i<3;i++){
// var percentage = (scorearr[i]/mark)*100;

// document.write("<br>scorearr" + "" + studentarr[i]+""+ "is"+ ""+ scorearr[i]+""+"percentage:"+ percentage +"%" +"<br>")
//  }


// Question 9 

// var colarr = ["red", "yellow", "green"]
// alert(colarr)


// Question 9 a

// var colarr = ["red", "yellow", "green"]
// var want = prompt("R U interest in adding the color ?")
// if(want==='yes'){
//     var c1 = prompt("which color U need to add ");
//     colarr.unshift(c1);
//     document.write(colarr);
// }
// else if (want==='no' ) { 
//      var c2 = [colarr]
//     document.write(c2) }
// else {document.write ("enter correct color name")}


// Question 9 b

// var colarr = ["red", "yellow", "green"]
// var redarr = prompt ("add your color")
// document.write( colarr + "," + redarr) 


// Question 9 c

// var colarr = ["red", "yellow", "green"]
// var redarr = prompt ("add your color")
// var redsarr = prompt ("add your color")

// colarr.unshift(redarr +"," + redsarr);
//     document.write(colarr);


// Question 9 d

// var colarr = ["red", "yellow", "green"]
// var redarr = prompt ("add your color")
// var bluarr = ["blue","brown","pink"]
//  colarr.shift(redarr +"," + blusarr)
// document.write(colarr)


// Question 9 e

// var colarr = ["red", "yellow", "green"]
// var redarr = prompt ("add your color")
// var bluarr = ["blue","brown","pink"]
//  colarr.pop(redarr +"," + blusarr)
// document.write(colarr)


// Question 9  f  

// var colarr = ["red", "yellow", "green"]
// var index = prompt ("which color U add in your index");
// var colorname = prompt("which color U add ");
//  colarr.spilce(index,0,colorname);
// document.write("<br>"+colarr);

// Question 9  g

// var colarr = ["red", "yellow", "green"]
// var index = prompt ("which index position ");
// var num = prompt ("how many number of color delete");
//  colarr.spilce(index,num);
// document.write("<br>"+colarr);


// QUestion 10

// var arr = ["Score of student:" + 320,230,480,120  ]
// var stuarr = ["Ordered Score of student:" + 120,230,320,480 ]


// document.write(arr + "<br>")
// document.write(stuarr)


// question 11

// var cities = ["karachi","lahore","islamabad","quetta","peshawar"]
// var activities = cities.slice(2,4)
// document.write("cities list:" + cities)
// document.write("<br><br> select cities list:"  + activities)


// question 12
// var array = "Array:"
// document.write(array+ "<br>" )
// var stdarr = ["This" , "is" , "my" , "cat"]
// document.write(stdarr + "<br>")

// var string = "String:"
// document.write(string + "<br>"  )

// var byarr = ["This is my cat"]
// document.write(byarr )


// Question 15

// var dropBox = document.getElementById("drop_box");
// var array = [0,1,2,3,4,5];
// for(var i=0; i<array.length; i++){
//     // alert (arr[i])
//     dropBox.options.add(new options(array[i]));
// }
// function getValue(){
//     var drop_Val = dropBox.options[dropBox.selectedIndex].value;
//     alert(drop_Val);
// }

// function random(){
//     var a=document.getElementById('input').value;
//     document.getElementById('output').innerHTML=a;
// }


// function getSelectValue()
// {
//     var selectedValue = document.getElementById("list").value;
//     console.log(selectedValue)
// }
// getSelectValue();