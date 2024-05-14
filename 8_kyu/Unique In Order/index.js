let uniqueInOrder = function (iterable) {
    if (iterable.length === 0) {
        return [];
    }
    if (typeof iterable == "string") {
        iterable = iterable.split("");
    }

    let result = [];
    for (let i = 0; i < iterable.length; i++) {
        if (i === 0) {
            result.push(iterable[0]);
        } else if (iterable[i] != iterable[i - 1]) {
            result.push(iterable[i]);
        }
    }
    return result;
};
