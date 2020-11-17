// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    //const otherdriver = [...drivers, name];
   // const otherdriver = drivers.slice(name)
    const otherdriver = drivers.slice()
    otherdriver.push(name)
}

function prependDriver(name) {
    const otherdriver = [name, ...drivers];
}

function removeLastDriver() {
    drivers.splice(-1)
}

function removeFirstDriver() {
    drivers.splice(0)
}