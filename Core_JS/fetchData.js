//API -> Application programming interface
// is a software intermediary that allows two applications to talk to each other


//Backend -> API -> Fetch -> JSON/XML
//-> JSON.parse -> Javascript types
//-> Render interface with HTML
const fetchApi = 'https://jsonplaceholder.typicode.com/todos/1'
axios.get(fetchApi).then(response=>{ 
    var html = `<h1>${response.data.title}</h1>`;
    document.querySelector('#log').innerHTML = html
})
                   
                   