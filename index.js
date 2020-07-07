var CafeDeli = [];

function takeANumber(CafeDeli,name) {
 CafeDeli.push(name);
return `Welcome, ${name}. You are number ${CafeDeli.length} in line.`;
}

function nowServing(CafeDeli) {
    let i = 0;
    while(i < cafeDeli.length) {
      i++;
    }
   if (cafeDeli === 0){
      return 'There is nobody waiting to be served!';
   }else{
    return `Currently serving ${serve}.`;
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
