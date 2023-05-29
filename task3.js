const nums= document.getElementById("nums")
const avg= document.getElementsByClassName("aveg")


function average(){
    
 
    inputNums= nums.value.split(":");
    console.log(inputNums)
    sum=0;
    counter=0;
    let average=0;

    for( let i of inputNums){
        
        i= parseInt(i)
        sum+=i
        counter+=1
        average= sum/counter;
 

    }


   avg[0].textContent="Average is: " + average

    

}