function appendToDisplay(value){
    document.getElementById("display").value+=value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function deleteLast() {
    const display = document.getElementById('display');
    console.log("Current display value:", display.value); 
    display.value = display.value.slice(0, -1); 
    console.log("Updated display value:", display.value); 
}


function calculateResult(){
    const display = document.getElementById("display");
    try{
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    }
     catch (error) {
        document.getElementById("display").value = "Error";
    }
    }

