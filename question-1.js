
// start of assignment
function studentMarks(){
let mark= prompt("Enter your marks",);
//giving input a data type of number 
let input = Number(mark); 
    //conditions
if(mark >=0 &&  mark <=100){
    if (mark>=80) {
        return`A`;
    }
        else if(mark >=60){
        return`B`;
    }
        else if(mark >=50){
        return`C`;
    }  
        else if(mark>=40){
        return`D`;
    }
        else if (mark >=0){
        return`E`; 
    }else{
         return `Invalid Entry`  
         }}
         return alert(`Invalid Entry!`)
}
studentMarks();// calling out the function