function User(firstName,lastName, avatar){
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Bach', 'Phung', 'Image')
console.log(author.getName());
var user = new User('Hello','World','Image')
console.log(user.getName());