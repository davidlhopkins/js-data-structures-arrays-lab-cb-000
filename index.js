const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
  drivers.push('Ralph');
}

function destructivelyPrependDriver() {
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const copyOfDrivers = [...drivers, name]
  return copyOfDrivers
}

function prependDriver(name) {
  const copyOfDrivers = [name, ...drivers]
  return copyOfDrivers
}

function removeLastDriver(name) {
  const copyOfDrivers = drivers.slice(-1)
  return copyOfDrivers
}

function removeFirstDriver(name) {
  const copyOfDrivers = drivers.slice(0)
  return copyOfDrivers
}
