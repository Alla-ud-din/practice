let arr4 = [1,3,-4,7,8,-9,11,12,-14,13,16,15,17,-18,20];
//console.log(arr);
let large = 0;
for (let i = 0; i<=arr4.length; i++){
    if (arr4[i]>large){
        large = arr4[i];
    }
    
}
console.log(`Largest number is  ${large}`)
