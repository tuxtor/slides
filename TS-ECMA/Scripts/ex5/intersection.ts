function extend<T, U>(first: T, second: U): T & U {
    return { ...first, ...second };
}

const x = extend({ a: "hello" }, { b: 42 });
console.log(x)