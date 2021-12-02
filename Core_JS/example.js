var users = [
    {
        id:1,
        name:'Bach Phung'
    },
    {
        id:2,
        name:'Duc Thai'
    },
    {
        id:3,
        name:'Toan Tran'
    },
]

var comments = [
    {
        id:1,
        user_id:1,
        content:'Hello'
    },
    {
        id:2,
        user_id:2,
        content:'Hi. Nice to meet you!'
    },
    {
        id:3,
        user_id:1,
        content:'Nice to meet you, too'
    },
    {
        id:4,
        user_id:2,
        content:'Where are you from?'
    },
]

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments)
        },1000)
    })
}

function getUsersByIds(userIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        })
        setTimeout(function(){
            resolve(result)
        },1000)
    })
}

getComments().then(function(comments){
    var userIds = comments.map(function(comment){
        return comment.user_id
    })
    return getUsersByIds(userIds)
        .then(function(users){
            return {
                users: users,
                comments: comments
            }
        })
    })
    .then(function(data){
        var html=''
        var commentBlock = document.querySelector('#comment-block')
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        commentBlock.innerHTML = html
    })
