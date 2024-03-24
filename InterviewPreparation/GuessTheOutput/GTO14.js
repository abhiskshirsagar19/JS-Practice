var i = 0;
function test() {
    console.log(i);
    i++;
    console.log(i);
    i++;
}
test()//0 1
test()//2 3
test()//4 5 
test()//6 7
test()//8 9

console.log(i);//10