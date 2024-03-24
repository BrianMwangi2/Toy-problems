
// start of assignment
function studentMarks(){
let mark= prompt("Enter your marks",);
//giving input a data type of number 
let input = Number(mark); 
    //conditions
    if (mark>=79) {
        return`A`;
    }
        else if(mark >=69){
        return`B`;
    }
        else if(mark >=59){
        return`C`;
    }  
        else if(mark>=49){
        return`D`;
    }
    //else condition 
        else
        return`E`; 

}
studentMarks();// calling out the function