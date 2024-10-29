let arr5 = [1,3,-4,7,8,-9,11,12,-14,13,16,15,17,-18,20];
//console.log(arr);
let sumPositive = 0;
for (let i = 0; i<=arr5.length; i++){
    if (arr5[i]>0){
        sumPositive+=arr5[i];
    }  
}
console.log(`Sum of Positive Number is  ${sumPositive}`)