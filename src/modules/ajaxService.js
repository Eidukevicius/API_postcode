const ajaxservice =(term)=>{
    const url= "https://api.postit.lt/?term=";
    const key ="iko7tt1HNDl6x4zoaiEq";
    return fetch(`${url}${term}&key=${key}`)
    .then(respone=>respone.json())
    
}
 
export default ajaxservice