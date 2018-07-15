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
  const copyOfDrivers = [...drivers, name];
  return copyOfDrivers
}

function appendDriver(name) {
  const copyOfDrivers = [name, ...drivers];
  return copyOfDrivers
}
