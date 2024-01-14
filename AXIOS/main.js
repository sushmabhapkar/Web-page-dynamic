//AXIOS GLOBAL
axios.defaults.headers.common['X-Auth-Token']="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// GET REQUEST
// function getTodos() {
//     axios({
//         methods:"GET",
//         url:"https://jsonplaceholder.typicode.com/todos",
//         params:
//         {
//             _limit:5
//         }
//     })
//     .then(res => showOutput(res))
//     .catch(err => console.error(err));
//   }
 function getTodos() {
       axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then(res => showOutput(res))
            .catch(err => console.error(err));
      }
    

  
  // POST REQUEST
  function addTodo() {
    
    axios
         .post("https://jsonplaceholder.typicode.com/todos",{title:"todos",completed:false})
         .then(res => showOutput(res))
         .catch(err => console.error(err));
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
   axios
         .put("https://jsonplaceholder.typicode.com/todos/1",{title:"update todos",completed:true})
         .then(res => showOutput(res))
         .catch(err => console.error(err));
  }
  
  
  // DELETE REQUEST
  function removeTodo() {
    axios
    .delete("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => showOutput(res))
    .catch(err => console.error(err));
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
        
    ])
    .then(axios.spread((todos,posts)=>showOutput(posts)))
        .catch(err=>console.error(err));
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    const config={
        headers:
        {
            "content-type":"application/json",
            authorization:"sometoken"
}
    };
    axios
    .post("https://jsonplaceholder.typicode.com/todos",{title:"todos",completed:false},config)
    .then(res => showOutput(res))
    .catch(err => console.error(err));

}
  
  
  
// Define the function
function transformResponse() {
    const options = {
        method: "post", // Corrected the typo in 'methods'
        url: "https://jsonplaceholder.typicode.com/todos",
        data: {
            title: "hello world"
        },
        transformResponse: axios.defaults.transformResponse.concat(data => {
            // Transform the response by converting the title to uppercase
            data.title = data.title.toUpperCase();
            return data;
        })
    };

    // Use Axios to make the request
    axios(options)
        .then(res => showOutput(res))
        .catch(error => console.error(error)); // Handle errors, if any
}


  
  // ERROR HANDLING
  function errorHandling() {
    
    axios
            .get("https://jsonplaceholder.typicode.com/todoss")
            .then(res => showOutput(res))
            .catch(error => {
              if (error.response)
              {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);

                if(error.response.status===404)
                {
                  alert("Error:the error page not found");
                }
                else if(error.request)
                {
                  console.error(error.request);
                }else
                {
                  console.error(error.message);
                }
              }
            });
            }
          
  
  
  // CANCEL TOKEN
  function cancelToken() {
    const source=axios.CancelToken.source();
    axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=5",
    {cancelToken:source.token})
    .then(res => showOutput(res))
    .catch(thrown=>{
      if(axios.isCancel(thrown))
      {
        console.log("Request Canceled",thrown.message);
      }
    });
    if(true)
    {
      source.cancel("Request canceled!");
    }
  }

  //Axios Instance

  const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
  });
  
  axiosInstance.get('/comments')
    .then(res => showOutput(res))
    .catch(error => {
      // Handle the error here
      console.error('Error:', error);
    });
  
  
  // INTERCEPTING REQUESTS & RESPONSES
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);