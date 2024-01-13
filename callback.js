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



function createpost(post,callback)
{

setTimeout(()=>{

posts.push(post);
callback();
},2000) ;   
}
createpost({ title:"Post Three" ,body:"This is the post Three"},getpost);