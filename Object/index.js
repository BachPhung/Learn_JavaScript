var emailKey = 'email'

var myInfo = {
    name: 'Bach Phung',
    age: 21,
    address:'Hanoi, VietNam',
    [emailKey]: 'quangbach19112000@gmail.com',
    getName: function(){
        console.log(this.name);
    }
}

var myKey = 'address'

console.log(myInfo);
console.log(myInfo[myKey]);
myInfo.getName();

//A key is null -> return undefined value