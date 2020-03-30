var rect = { x: 0, y: 10, width: 15, height: 20 };

var {x, y, width, height} = rect;
console.log(x, y, width, height);

var {w, x, ...remaining} = {w: 1, x: 2, y: 3, z: 4};
console.log(w, x, remaining);