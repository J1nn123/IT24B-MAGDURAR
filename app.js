
let num =5 ;
let name;

if (num == 5){
    name = "Jino"; 
    console.log (name);
}

else if (name=="jino"){    
    console.log("not registered");
}

switch (name){
    case "Jino":
    console.log ("24");
    break;
        
        default:

}
while(name=="Jino"){
console.log("you are"+name);
name++;

}

if (num%2==0){
console.log("even");


}else{
console.log("Odd");
}
if (num%2==1){
    console.log("is Prime Number");
    
    
    }else{
    console.log("not A Prime number");

    }
    function isPalindrome(name) {
        let j = name.length - 1
        for (let i = 0; i < name.length / 2; i++) {
            if (name[i] != name[j]) {
                return false;
            }
            j--;
        }
        return true;
    }
    
    let name1 = "jinjin";
    
    
    console.log(isPalindrome(name));
   