let arr2 = [1,3,-4,7,8,-9,11,12,-14,13,16,15,17,-18,20];
//console.log(arr);
let even2 = [];
let odd = [];
console.log("Odd Numbers are")
for (let i = 0; i<arr2.length; i++){
    if (arr2[i]%2==0){
        even2[i]= arr2[i]
        //console.log(even[i]);
    }
    else {
        odd[i]=arr2[i];
        console.log(odd[i])
    }
}
