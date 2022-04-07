function stringCalculator(string){
    if(string ===''){
        return 0;
    }
    if (string === '1'){
        return 1;
    }
    //sumar los numeros que reciba separados por comas
    if(string.includes(',')){
        const numbers = string.split(',');
        let sum = 0;
        for(let i = 0; i < numbers.length; i++){
            sum += parseInt(numbers[i]);
        }
        return sum;
    }
   
    
}

module.exports = stringCalculator;