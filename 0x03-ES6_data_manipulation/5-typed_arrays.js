const createInt8TypedArray = (length, position, value) => {
    let buffer = new ArrayBuffer(length);

    let intArray = new DataView(buffer);

    if (position >= intArray.length || position < 0) {
        
        throw new Error("Position outside range");
    }
    intArray.setInt8(position, value);

    return intArray;

}

export default createInt8TypedArray;
