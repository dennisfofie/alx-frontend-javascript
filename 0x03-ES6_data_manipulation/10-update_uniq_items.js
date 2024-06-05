const updateUniqueItems = (map) => {

    if (!map instanceof Map) {
        throw new Error("Cannot process");
    }

    for (const [key, value] of map.entries()) {
        if (map.get(key) == 1) {
            map.set(key, 100);
        }
    }
    return map;
}

export default updateUniqueItems;
