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
        //kilogram
    } else if(inputTypeValue==="kilogram" && resultTypeValue==="gram")
    {
        result.value=Number(input.value)*1000
    } else if( inputTypeValue==="kilogram" && resultTypeValue==="tonne") {
        result.value=Number(input.value)/1000 
    }else if( inputTypeValue==="kilogram" && resultTypeValue==="pound"){
        result.value=Number(input.value)*2.20462
    } else if(inputTypeValue==="kilogram" && resultTypeValue==="ounce")
    {result.value=Number(input.value)*35.274 
} else if(inputTypeValue==="kilogram" && resultTypeValue==="milligram"){
    result.value=Number(input.value)*1000000
} //tonne
  if(inputTypeValue==="tonne" && resultTypeValue==="kilogram"){
      result.value=Number(input.value)/1000
  } else if( inputTypeValue==="tonne" && resultTypeValue==="tonne"){
      result.value=input.value
  } else if(inputTypeValue==="tonne" && resultTypeValue==="pound"){
      result.value=Number(input.value)*2204.62
  }else if(inputTypeValue==="tonne" && resultTypeValue==="ounce"){
      result.value=Number(input.value)*35274
  } else if(inputTypeValue==="tonne" && resultTypeValue==="gram"){
      result.value=Number(input.value)*1000000
  }else if(inputTypeValue==="tonne" && resultTypeValue==="milligram"){
      result.value=Number(input.value)*1000000000
  }  //pound
  if(inputTypeValue==="pound" && resultTypeValue==="kilogram"){
    result.value=Number(input.value)/2.20462
} else if( inputTypeValue==="pound" && resultTypeValue==="pound"){
    result.value=input.value
} else if(inputTypeValue==="pound" && resultTypeValue==="tonne"){
    result.value=Number(input.value)/2204.62
}else if(inputTypeValue==="pound" && resultTypeValue==="ounce"){
    result.value=Number(input.value)*16
} else if(inputTypeValue==="pound" && resultTypeValue==="gram"){
    result.value=Number(input.value)*453.592
}else if(inputTypeValue==="pound" && resultTypeValue==="milligram"){
    result.value=Number(input.value)*453592  
  } //ounce
if(inputTypeValue==="ounce" && resultTypeValue==="kilogram"){
    result.value=Number(input.value)/35.274
} else if( inputTypeValue==="ounce" && resultTypeValue==="ounce"){
    result.value=input.value
} else if(inputTypeValue==="ounce" && resultTypeValue==="pound"){
    result.value=Number(input.value)/16
}else if(inputTypeValue==="ounce" && resultTypeValue==="tonne"){
    result.value=Number(input.value)/35274
} else if(inputTypeValue==="ounce" && resultTypeValue==="gram"){
    result.value=Number(input.value)*28.3495
}else if(inputTypeValue==="ounce" && resultTypeValue==="milligram"){
    result.value=Number(input.value)*28349.5
  
} //gram
if(inputTypeValue==="gram" && resultTypeValue==="kilogram"){
    result.value=Number(input.value)*1000
} else if( inputTypeValue==="gram" && resultTypeValue==="gram"){
    result.value=input.value
} else if(inputTypeValue==="gram" && resultTypeValue==="pound"){
    result.value=Number(input.value)/454
}else if(inputTypeValue==="gram" && resultTypeValue==="ounce"){
    result.value=Number(input.value)/28.35
} else if(inputTypeValue==="gram" && resultTypeValue==="tonne"){
    result.value=Number(input.value)/1000000
}else if(inputTypeValue==="gram" && resultTypeValue==="milligram"){
    result.value=Number(input.value)*1000
} //milligram
if(inputTypeValue==="milligram" && resultTypeValue==="kilogram"){
    result.value=Number(input.value)/1000000
} else if( inputTypeValue==="milligram" && resultTypeValue==="milligram"){
    result.value=input.value
} else if(inputTypeValue==="milligram" && resultTypeValue==="pound"){
    result.value=Number(input.value)/453592
}else if(inputTypeValue==="milligram" && resultTypeValue==="ounce"){
    result.value=Number(input.value)/28350
} else if(inputTypeValue==="milligram" && resultTypeValue==="gram"){
    result.value=Number(input.value)/1000
}else if(inputTypeValue==="milligram" && resultTypeValue==="tonne"){
    result.value=Number(input.value)/1000000000
}
}