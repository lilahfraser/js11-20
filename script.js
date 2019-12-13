//problem 1
function firstLast6(arr){
var num= "";
    if(arr[0]==6 || arr[arr.length-1]==6){
        var num = true;
    }else{
        var num = false;
    }
    return num;
}

//problem 2
function  has23(arr){
    var numb;
        if(arr[0]==2 || arr[1]==3){
            numb = true;
        }else if(arr[0]==3 || arr[1]==2){
            numb = true;
        }else{
            numb = false;
        }
    return numb;
}

//problem 3
function fix23 (arr){

    if(arr[0]==2 && arr[1] == 3) {
        arr[1] = 0;
    }
    if(arr [1]==2 && arr [2] ==3) {
        arr[2] = 0;
    }
    return arr;
}

//problem 4
function countYZ(string){
    string = string.toLowerCase();
    var nums = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            if (string[i - 1] == "y" || string[i - 1] == "z") {
                nums = nums + 1;
            }
        }
    }
    if (string[string.length - 1] == "y" || string[string.length - 1] == "z") {
        nums = nums + 1;
    }

    return nums;
}

//problem 5
function endOther(string1,string2){
    var abc= string1.toLowerCase();
    var hey= string2.toLowerCase();
    var resulta= abc.endsWith(hey);
    var resulth= hey.endsWith(abc);

      return resulta || resulth;
}

//problem 6
function starOut(string){
var newStr = "";

    for (var i=0; i<string.length; i++){
        if (string[i] != "*" && string[i+1] !="*" && string[i - 1] != "*") {
            newStr = newStr + string[i]
    }
}

    return newStr;

}

//problem 7
function getSandwich(str){
    var newStr = "";
    var x = str.indexOf("bread");
    var y = str.lastIndexOf("bread");
    newStr= str.substring(x+5,y);

    if(x==y){
        newStr="";

    }
    return newStr;
}

//problem 8
function canBalance(arr){
    var insideSum =0;
    var outsideSum=0;

    for(var i=0; i<arr.length; i++){
        outsideSum += arr[i];
        for(var j= i+1; j<arr.length;j++){
            insideSum+= arr[j];
        }
        if(insideSum==outsideSum){
            return true;
        }
        insideSum=0;
    }
    return false;
}

//problem 9
function countClumps(arr){
    var count =0;
    for(var i=0; i<arr.length;i++){
        if(arr[i-1]== arr[i] && arr[i]!==arr[i+1]){
            count += 1
        }
    }
    return count;
}


//problem 10
function evenlySpaced(a,b,c){
    var rando="";
    if(a-b == b-c || b-a == b-c || a-b == c-b|| c-a == a-c ||a-c == c-b || b-a == a-c){
        rando=true;
    }else{
        rando=false;
    }
    return rando;
}


function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times("lilah", 5);
    document.getElementById("output").innerHTML += front_times("whale");
    document.getElementById("output").innerHTML += string_bits("hello", 3);
    document.getElementById("output").innerHTML += caughtSpeeding(60, true);
    document.getElementById("output").innerHTML += fizz_buzz(8);
    document.getElementById("output").innerHTML += teaParty(5, 7);
    document.getElementById("output").innerHTML += blackjack(6, 14);
    document.getElementById("output").innerHTML += loneSum(3, 2, 3);
    document.getElementById("output").innerHTML += firstLast6(6,4,4);
    document.getElementById("output").innerHTML += has23(6,4,4);
    document.getElementById("output").innerHTML += fix23(2,3,5);
    document.getElementById("output").innerHTML += countYZ("hey you");
    document.getElementById("output").innerHTML += endOther("hello", "goodbye");
    document.getElementById("output").innerHTML += starOut("hi**iohp");
    document.getElementById("output").innerHTML += getSandwich("breadsjdbfjfhdbread");
    document.getElementById("output").innerHTML += canBalance(10,10);
    document.getElementById("output").innerHTML += countClumps(1,1,2,3,4,5);
    document.getElementById("output").innerHTML += evenlySpaced(2,4,6);
}