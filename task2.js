const color= document.getElementById("color")

function fun(){
    
 
    if(color.value == "red" || color.value == "blue" ||color.value == "green" ||color.value == "black" ||color.value == "white"){
            console.log(color.value)
            document.body.style="background:" + color.value + ";"
    }else{
        alert("enter valid input!")
    }
}