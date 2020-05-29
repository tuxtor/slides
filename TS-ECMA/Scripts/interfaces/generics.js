function reverse(items) {
    var response = [];
    for (var i = items.length - 1; i >= 0; i--) {
        response.push(items[i]);
    }
    return response;
}
var languages = reverse(['Java', 'Scala', 'Kotlin']);
var year = reverse([1996, 2001, 2007]);
console.log(languages);
console.log(year);
