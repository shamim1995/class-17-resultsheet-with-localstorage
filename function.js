/**
 * data send function for localstorage
 * @param {*} key 
 * @param {*} arr 
 */

function dataSend(key, arr){

   let data = JSON.stringify(arr)
   localStorage.setItem(key, data ) 

}

/**
 * data get function for localstorage
 * @param {*} key 
 */

function dataGet(key){
    
    let data = localStorage.getItem(key);

     data ? JSON.parse(data) : false;

}

function msg(msg, type ='danger'){
   return `<p class ="alert alert-${type}">${msg}</p>`
}