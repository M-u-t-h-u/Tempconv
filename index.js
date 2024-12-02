const input=document.getElementById("textbox");
const c2f=document.getElementById("toFahrenheit");
const f2c=document.getElementById("toCelcius");
const p=document.getElementById("result");

function convert(){
    let temp=input.value;
    temp=Number(temp);
    if(c2f.checked){
        temp=temp * 9/5 + 32;
        temp=temp.toFixed(1);
        p.textContent=`${temp}°F`;

    }
    else if(f2c.checked){
        temp=5/9 *(temp-32);
        temp=temp.toFixed(1);
        p.textContent=`${temp}°C`
    }
    else{
        p.textContent="Select a unit nigga!!";
    }
}