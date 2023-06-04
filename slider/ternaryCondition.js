
var user= prompt('Enter user name');
var pass = prompt('Enter password');

var uLength = user.length;
var pLength = pass.length;

var uCheck = uLength >10 && uLength <3 ? 'The user name should be four to ten' : 'Ideal user name';
var pCheck = pLength >3 && pLength <15 ? 'Perfect password' : pLength >= 15 ? 'Password not allow to more than 15 Charector': 'Minimum three cherector allow';

var result = user == 'Anower' && pass =='123456789' ? "Welcome" : "The password and user name not matched";

document.write(uCheck + '<br>');
document.write(pCheck + '<br>');
document.write(result);