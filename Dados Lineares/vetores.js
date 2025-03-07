const nums = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function removeNumeroPosicao (a) {  
    nums.splice(a, 1)
};

function buscarNumero(b) {
    let cont = 0 
    for(let i=0; i<nums.length; i++){
        if(nums[i] === b) {
            cont = 1
        }
    }
    if(cont = 1) {
        return console.log("Esse número está no array!")
    } else {
        return console.log("Esse número não está no array!")
    }

}
console.log(removeNumeroPosicao(4));
console.log(nums);

console.log(buscarNumero(1));



// const animais = ['lobo', 'coruja', 'gaviao', 'tigre', 'morango', 'urso']
// const index = animais.indexOf('morango')
// if (index > -1) {
//     animais.splice(index, 1);
// }
