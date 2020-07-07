var CafeDeli = [];

function takeANumber(CafeDeli,name) {
 CafeDeli.push(name);
return `Welcome, ${name}. You are number ${CafeDeli.length} in line.`;
}

function nowServing(CafeDeli) {
  if (cafeDeli.length > 0) {
    var serve = cafeDeli[0];
    cafeDeli.shift();
    return `Currently serving ${serve}.`;
  } else{
    return 'There is nobody waiting to be served!';
  }
}

  function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else {

    var array = [];
    for (var i = 0; i < line.length; i++) {
      array.push(` ${i+1}. ${line[i]}`);
    }
    return `The line is currently:` + array;
  }
}
