var database = [
    {
        username: 'stas',
        password: 'supersecret'
    },
    {
        username: 'sally',
        password: '123'
    },   
    {
        username: 'ingrid',
        password: '777'
    },
];

var newsFeed = [
    {
        username: 'Bobby',
        timeline: 'so tired from all the learnung'
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return(true)
        } 
    }
    return (false)
}
function signIn (username,password) {
if (isUserValid(username,password)) {
        console.log(newsFeed);
    } else {
    alert('Sorry')
}


var userNamePrompt = prompt('What is your username');
var passwordPrompt = prompt('What is your password');

signIn(userNamePrompt, passwordPrompt);