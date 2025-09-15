export const  populationReader = (number) => {

    if(number > 1000000){
        return `${(number/1000000).toPrecision(4)} M`
    }
    if(number > 1000){
        return `${(number/1000).toPrecision(4)} K`;
    }
    return `${number}`;
}