document.addEventListener("DOMContentLoaded",function(){
    var mybtn=document.getElementById("btn");
    mybtn.addEventListener("click",convert);
    });
    function convert(){
        var initial=document.getElementById("ini_temp").value;
        var final=document.getElementById("final_temp").value;


    if("Celsius"===initial){
        var temp_cel=parseFloat(document.getElementById("get_temp").value);
        if("Celsius"===final){
            document.getElementById("set_temp").value=temp_cel.toFixed(2);
        }
        else if("Fahrenheit"===final){
            var temp_fah=(temp_cel*9/5)+32;
            document.getElementById("set_temp").value=temp_fah.toFixed(2);
        }
        else{
            var temp_kel=(temp_cel+273);
            document.getElementById("set_temp").value=temp_kel.toFixed(2);
        }
    }
    else if("Fahrenheit"==initial){
        
        var temp_fah=parseFloat(document.getElementById("get_temp").value);
        if("Celsius"===final){
            var temp_cel=(temp_fah-32)*5/9;
            document.getElementById("set_temp").value=temp_cel.toFixed(2);
        }
        else if("Fahrenheit"===final){
            document.getElementById("set_temp").value=temp_fah.toFixed(2);
        }
        else{
            var temp_cel=(temp_fah-32)*5/9;
            var temp_kel=(temp_cel+273);
            document.getElementById("set_temp").value=temp_kel.toFixed(2);
        }
    }
    else{
        var temp_kel=parseFloat(document.getElementById("get_temp").value);
        if("Celsius"===final){
            var temp_cel=temp_kel-273;
            document.getElementById("set_temp").value=temp_cel.toFixed(2);
        }
        else if("Fahrenheit"===final){
            var temp_cel=temp_kel-273;
            var temp_fah=(temp_cel*9/5)+32;
            document.getElementById("set_temp").value=temp_fah.toFixed(2);
        }
        else{
            document.getElementById("set_temp").value=temp_kel.toFixed(2);
        }
    }
}
