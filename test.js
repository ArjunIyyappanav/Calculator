
function dis(val) { 
    document.getElementById("result").value += val ;
} 

function clr(){
    document.getElementById("result").value = " ";
}

function solve(){
    let x = document.getElementById("result").value;
    let y = math.evaluate(x);
    if(y == Infinity || y == NaN){
        alert("Math Error");
    }else{
        document.getElementById("result").value = y;
    }
    
}  