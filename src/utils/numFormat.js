const numFormat = (num) => {
    if(num > 999999999){
        return (Math.floor(num/1000000000) + '.' + Math.floor((num%1000000000)/100000000) + 'B');
    }
    else if(num > 999999){
        return (Math.floor(num/1000000) + '.' + Math.floor((num%1000000)/100000) + 'M');
    }
    else if(num > 999){
        return (Math.floor(num/1000) + '.' + Math.floor((num%1000)/100) + 'K');
    }
    return num;
}

export default numFormat;