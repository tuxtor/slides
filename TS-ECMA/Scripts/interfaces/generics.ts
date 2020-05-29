function reverse<T>(items: T[]): T[]{
    let response = [];
    for(let i=items.length-1;i>=0;i--){
        response.push(items[i]);
    }
    return response;
}

let languages = reverse<string>(['Java','Scala','Kotlin']);
let year = reverse<number>([1996,2001,2007]);
console.log(languages);
console.log(year);