/* 
 * Komal Kapoor
 * Student ID : 991539309
 * SYST10199 - Web Programming
 */

function cel_to_farh(num)
{
    var result = (num * 9 / 5) + 32;
    var resultfnl = result.toFixed(2);
    document.getElementById("output").innerHTML = num_input.value + " °C is equal to " + resultfnl + " °F";
}

function farh_to_cel(num)
{
    var result = (num - 32) / 1.8;
    var resultfnl = result.toFixed(2);
    document.getElementById("output").innerHTML = num_input.value + " °F is equal to " + resultfnl + " °C";

}

function feet_to_mtr(num)
{
    var result = num * 0.3048;
    var resultfnl = result.toFixed(2);
    document.getElementById("output").innerHTML = num_input.value + " feet is equal to " + resultfnl + " metres";

}

function mtr_to_feet(num)
{
    var result = num * (1 / 0.3048);
    var resultfnl = result.toFixed(2);
    document.getElementById("output").innerHTML = num_input.value + " metres is equal to " + resultfnl + " feet";

}

function inch_to_cm(num)
{
    var result = num * 2.54;
    var resultfnl = result.toFixed(2);
    document.getElementById("output").innerHTML = num_input.value + " inches is equal to " + resultfnl + " cm";

}
function cm_to_inch(num)
{
    var result = num / 2.54;
    var resultfnl = result.toFixed(2);
    document.getElementById("output").innerHTML = num_input.value + " cm is equal to " + resultfnl + "inches";
}

function pound_to_kg(num)
{
    var result = num * 0.45359237;
    var resultfnl = result.toFixed(2);
    document.getElementById("output").innerHTML = num_input.value + " pounds is equal to " + resultfnl + " kg";
}

function kg_to_pound(num)
{
    var result = num * 2.20462;
    var resultfnl = result.toFixed(2);
    document.getElementById("output").innerHTML = num_input.value + " kg is equal to " + resultfnl + " pounds";
}

function Clear() {

    document.getElementById("num_input").value = "";
    document.getElementById("num_input").focus();
    document.getElementById("output").innerHTML = "";

}
