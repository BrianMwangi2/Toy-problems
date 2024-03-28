//beginning
function speedLimit() {
    let speed = prompt(`enter speed` );
   //adding demerit into the function so as it can be expressed
    let demerits;
    if (speed <=70) {
        return `OK`;
    }
   //using demerit 
    else if (speed>=70 && speed<=130){
        demerits= Math.abs((speed - 70)/5)
        return `points ${demerits}` ;
    }
    // using demerit as a function so as to bring desired result 
    else 
        return `license suspended`
    
}
speedLimit()

