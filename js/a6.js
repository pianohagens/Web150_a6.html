  
 
function validNumber(subtotal, taxrate){ 
    
    var st = document.getElementById("subtotal").value;//get input value of subtotal     
    var tr = document.getElementById("taxRate").value; //get input value of taxRate 
       
    //set if statment for valided numbers for subtotal    
    if(isNaN(st)){
     document.getElementById('subtotal_error').innerHTML = "Please enter a number only";        
    }
    
    else if(st <= 0 || st > 1000 || st === null) {//if input is out of range
     document.getElementById('subtotal_error').innerHTML = "Please enter a positive number less than 10,000";     
         
        } 
    else {//if input correctly
        calculate(subtotal, taxrate);
        document.getElementById('subtotal_error').innerHTML = "";   
       }
    
    //set if valided number for taxRate
    if(isNaN(tr)){
     document.getElementById('taxRate_error').innerHTML = "Please enter a number only";        
    }
    
    else if(tr <= 0 || tr >= 25 || tr === null) {//if input is out of range
     document.getElementById('taxRate_error').innerHTML = "Please enter a positive number less than 25";     
         
        } 
    else {//if input correctly 
        calculate(subtotal, taxrate);
        document.getElementById('taxRate_error').innerHTML = "";   
       }
  return false;  
}

function calculate(subtotal, taxrate) {    
    var sub = document.getElementById(subtotal).value; //get salesTax element.
    var tax = document.getElementById(taxrate).value//get the total element.
    
   var saleTax = sub * (tax / 100);//calculate the saleTax
   var total = Number(sub) + Number(saleTax); //calculate the total
document.getElementById('salesTax').value = saleTax.toFixed(2); //toFixed(2) is for 2 decimals   
document.getElementById('total').value = total.toFixed(2);
    
return false;//submit event function must return false, and tell the browser not to load a new page.
   
}
 
function clear(){
 var clear;
clear.document.getElementById("subtotal").value = "";
clear.document.getElementById("taxRate").value = "";
clear.document.getElementById('salesTax').value = "";
clear.document.getElementById('total').value = "";
    
    //restore starting message
 clear.document.getElementById('subtotal_error').innerHTML = "Enter subtotal";
 clear.document.getElementById('taxRate_error').innerHTML = "Enter sales tax rate (e.g. 9.5)";
    //set focus to subtotal box
clear.document.getElementById("subtotal").focus();   
  return false;
}
/*
var clear = function()
{  
    document.getElementById("subtotal").value = "";
    document.getElementById("taxRate").value = "";
    document.getElementById('salesTax').value = "";
    document.getElementById('total').value = "";
    
    //restore starting message
   document.getElementById('subtotal_error').innerHTML = "Enter subtotal";
    document.getElementById('taxRate_error').innerHTML = "Enter sales tax rate (e.g. 9.5)";
    //set focus to subtotal box
   document.getElementById("subtotal").focus();
}
*/
