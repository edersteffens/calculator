function add(num){
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').classList.remove('active');
    document.getElementById('result').innerHTML = number + num;
}

function clean(){
    document.getElementById('result').innerHTML = "";
    document.getElementById('result').classList.add('active');
}
 
function val(){
    var value = document.getElementById('result').innerHTML;
    
    if(value){
        document.getElementById('result').innerHTML = eval(value);
    }else{
        document.getElementById('result').innerHTML = "";
        document.getElementById('result').classList.add('active');
    }
}

const mapKeyboard = {
   'Escape' : 'key_c',
   'c'      : 'key_c',
   '/'      : 'key_d',
   '7'      : 'key_7',
   '8'      : 'key_8',
   '9'      : 'key_9',
   '*'      : 'key_x',
   'x'      : 'key_x',
   '4'      : 'key_4',
   '5'      : 'key_5',
   '6'      : 'key_6',
   '-'      : 'key_s',
   '1'      : 'key_1',
   '2'      : 'key_2',
   '3'      : 'key_3',
   '+'      : 'key_a',
   '0'      : 'key_0',
   'Enter'  : 'key_v',
   '='      : 'key_v'
}

const mapKey = (e) => {
    const key  = e.key;
    const keyTrue = () => Object.keys(mapKeyboard).indexOf(key) !== -1;
    if(keyTrue()) document.getElementById(mapKeyboard[key]).click();
}

document.addEventListener('keydown', mapKey);