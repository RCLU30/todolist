const APIURL = "https://todolistapi-rlu.herokuapp.com/api/todos";

export async function getTodos(){
   return fetch(APIURL)
    .then(data => {
      if(!data.ok){
        if(data.status >= 400 && data.status < 500){
          return data.json().then(data => {
            let err = {errorMessage: data.message}
            throw err;
          })
        } // end if
        else {
          let err = {errorMessage: "Try again later."}
          throw err;
        } // end else
      }
      return data.json()
    })
};

export async function createTodo(val){
  return fetch(APIURL, {
    method: 'post',
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({name: val})
    })
    .then(data => {
      if(!data.ok){
        if(data.status >= 400 && data.status < 500){
          return data.json().then(data => {
            let err = {errorMessage: data.message}
            throw err;
          })
        } // end if
        else {
          let err = {errorMessage: "Try again later."}
          throw err;
        } // end else
      }
      return data.json()
    })
}

export async function removeTodo(id){
  const deleteURL = APIURL + id;
  return fetch(deleteURL, {
    method: 'delete',
  })
    .then(data => {
      if(!data.ok){
        if(data.status >= 400 && data.status < 500){
          return data.json().then(data => {
            let err = {errorMessage: data.message}
            throw err;
          })
        } // end if
        else {
          let err = {errorMessage: "Try again later."}
          throw err;
        } // end else
      }
    })
}

export async function updatedTodo(todo){
  const updateURL = APIURL + todo._id;
  return fetch(updateURL, {
      method: 'put',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({completed: !todo.completed})
    })
    .then(data => {
      if(!data.ok){
        if(data.status >= 400 && data.status < 500){
          return data.json().then(data => {
            let err = {errorMessage: data.message}
            throw err;
          })
        } // end if
        else {
          let err = {errorMessage: "Try again later."}
          throw err;
        } // end else
      }
      return data.json();
    })
}