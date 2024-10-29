let arr6 = [1,3,-4,7,8,-9,11,12,-14,13,16,15,17,-18,20];
//console.log(arr);
let sumNegative = 0;
for (let i = 0; i<=arr6.length; i++){
    if (arr6[i]<0){
        sumNegative+=arr6[i];
    }  
}
console.log(`Sum of Negative Number is  ${sumNegative}`)