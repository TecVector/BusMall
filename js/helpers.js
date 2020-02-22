var groupBy = function(xs, key) {
    return startFromZero(xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {}));
};

function startFromZero(arr) {
    var newArr = [];
    var count = 0;
    for (var i in arr) {
        newArr[count++] = arr[i];
    }
    return newArr;
}