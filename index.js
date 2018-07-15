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

function appendDriver() {
  const copyOfDrivers = [...drivers, 'Broom'];
  return copyOfDrivers
}

function appendDriver() {
  const copyOfDrivers = ['Broom', ...drivers];
  return copyOfDrivers
}
