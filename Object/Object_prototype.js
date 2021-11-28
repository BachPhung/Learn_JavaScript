function User(firstName,lastName,avatar){
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

User.prototype.className = 'FullStack'
User.prototype.getClass = function(){
    return this.className
}

var user = new User('Bach','Phung','avatar')
console.log(user.getClass());