
import sayHello from "./helloworld.js";
import assert from 'assert';

it ("Should say SayHello", ()=>{
    const hi = sayHello();
    assert.equal(hi, "Hello");
});