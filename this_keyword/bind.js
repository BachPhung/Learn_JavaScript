/*this.firstName = 'Bach'
this.lastName  = 'Phung'

const student = {
    firstName: 'Taylor',
    lastName: 'Swift',
    getFullName(data1,data2){
        console.log(data1, data2);
        return `${this.firstName} ${this.lastName}`
    }
}

const teacher = {
    firstName: 'John',
    lastName: 'Wick',
}

console.log(student.getFullName())

const getStudentName = student.getFullName.bind(teacher, 'Test 1', 'Test 2')

console.log(getStudentName());*/
/*
const student = {
    firstName: 'Taylor',
    lastName: 'Swift',
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const button = document.querySelector('button')
button.onclick = student.getFullName.bind(student)*/

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = (()=>{
    const cars = ['BMW']
    const input = $('#input')
    const root = $('#root')
    const submit = $('#submit')
    return({
        add(car){
            cars.push(car)
        },
        delete(index){
            cars.splice(index,1)
        },
        handleDelete(e){
            const deleteBtn = e.target.closest('.delete')
            if(deleteBtn){
                const index = deleteBtn.dataset
                this.delete(index)
                this.render()
            }
        },
        render(){
            const html = cars.map((car,index)=>
            `<li>${car}<span class='delete' data-index=${index}>&times</span></li>`    
            ).join('')
            root.innerHTML = html
        },
        init(){
            submit.onclick = () => {
                const car = input.value
                this.add(car)
                this.render()
                input.value = null
                input.focus()
            }
            root.onclick = this.handleDelete.bind(this)
            this.render()
        }
    })
})()

app.init()

