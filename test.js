
function display(val) { 
    if(val == "c"){
        document.getElementById("result").value = " " ;
    }
    else{
        document.getElementById("result").value += val ;
    }
} 


function solve(){
    let x = document.getElementById("result").value;
    let y = math.evaluate(x);
    if(y == Infinity || y == NaN || y == -Infinity){
        alert("Math Error Boss!!!");
    }else{
        document.getElementById("result").value = y;
    }
    
}  

