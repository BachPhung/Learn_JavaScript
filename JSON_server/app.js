
axios.get('http://localhost:3000/courses')
    .then(response=>{
        console.log(response);
        document.querySelector('#json').innerText = JSON.stringify(response.data[0])
    })