function foo(x,y,z,w,u,v){
    console.log(x,y,z,w,u,v);
}

var otherlangs = ['JavaScript', 'Vala', 'C#'];
var args = [...otherlangs, 'Java', 'Scala', 'Kotlin'];
foo(...args);
