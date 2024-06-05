const cleanSet = (set, startString) => {
    if (startString === '') {
        return '';
    }

    let result = '';

    for(const element of set){
        
        if (element.substring(0, startString.length) === startString) {
            const remainder = element.substr(startString.length)
            result = result.concat(remainder, "-");
            
        }
    }
    return result.slice(0, -1);
}

export default cleanSet;
