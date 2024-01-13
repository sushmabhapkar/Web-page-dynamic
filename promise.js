const posts = [
    { title:'Post One', body:'This is the post one'},
     { title:'Post Two', body:'This is the post two'}
];

function getpost()
{
    setTimeout(()=>{

        let output = '';
        posts.forEach((post,index)=>{
            
            output=output+`<li>${post.title}</li>`;
 });
 document.body.innerHTML=output;
    },1000);
}


function createpost(post)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            posts.push(post);
    
            
            const error=false;
            if(!error)
            {
                resolve();
            }else
            {
                reject('Error :something wents wrong');
            }
   
        },2000) ; 
    }); 
}
// createpost({ title:"Post Three" ,body:"This is the post Three"})
// .then(getpost);

//promise.all

const promise1=Promise.resolve("hello world");
const promise2=10;
const promide3=new Promise((resolve,reject)=>

setTimeout(resolve,2000,'goodbye')

);


const promise4 =fetch('https://jsonplaceholder.typicode.com/users').then(res=>

  res.json());


Promise.all([promise1,promise2,promide3,promise4]).then(values=> console.log(values));



















