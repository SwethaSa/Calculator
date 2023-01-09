


    let outputValue = document.getElementById("input")
    
    function display(num){
        outputValue.value += num;

        
    }

    function Clear(){
        outputValue.value = " ";
    }

    function Delete(){
        outputValue.value = outputValue.value.slice(0 , -1);
    }

    function Calculate(){

        try{
        outputValue.value = eval(outputValue.value);
        }
        catch(err){
            alert("Entered Values are Invalid to Calculate")
        }
    }

  



    




