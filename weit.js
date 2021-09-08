var input=document.getElementById('input')
var result=document.getElementById('result');
var inputType=document.getElementById('inputType')
var resultType=document.getElementById('resultType')

var inputTypeValue;
var resultTypeValue;
inputTypeValue=inputType.value
resultTypeValue=resultType.value
input.addEventListener('keyup',weightConverter)
inputType.addEventListener('change',weightConverter)
resultType.addEventListener('change',weightConverter)
function weightConverter(){
    inputTypeValue=inputType.value
    resultTypeValue=resultType.value
    if( inputTypeValue==='kilogram' && resultTypeValue==='kilogram'){
        result.value=input.value
        console.log(result.value)
    }
  
}


