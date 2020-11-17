// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name) {
    //const otherdriver = [...drivers, name];
   // const otherdriver = drivers.slice(name)
    const otherdriver = drivers.slice();
    otherdriver.push(name);
    return otherdriver;
}

function prependDriver(name) {
    const otherdriver = [name, ...drivers];
    return otherdriver;
}

function removeLastDriver() {
    drivers.splice(-1);
    return drivers;
}

function removeFirstDriver() {
    drivers.splice(0);
    return drivers;
}