console.log('person1:shows ticket');
console.log('person2:show ticket');

const preMovie = async () => {

    const promisewifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popCorn`));

    const addButter = new Promise((resolve, reject) => resolve(`butter`));

    const getColdDrinks = new Promise((resolve, reject) => resolve(`colddrinks`));

    let ticket = await promisewifeBringingTicket;

    let[popCorn,butter,colddrinks]=await Promise.all([getPopcorn,addButter,getColdDrinks]);
     
    console.log(`${popCorn},${butter},${colddrinks}`);
    
    return ticket;
}

preMovie().then((m) => console.log(`person3:shows ${m}`));

console.log('person4:shows ticket');
console.log('person5:shows ticket');
// Assume there is a 'posts' array defined somewhere
const posts=[
    {id: 1, title: 'New Post1', content: 'This is the content first'},
    {id: 2, title: 'New Post2', content: 'This is the content second'}
];
const createPost = async (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve('Post created successfully');
        }, 2000);
    });
};

const deletePost = async (postId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = posts.findIndex((post) => post.id === postId);
            if (index !== -1) {
                posts.splice(index, 1);
                resolve('Post deleted successfully');
            } else {
                reject('Post not found');
            }
        }, 2000);
    });
};

// Example usage of createPost and deletePost with async/await
const exampleUsage = async () => {
    try {
        await createPost({ id: 1, title: 'New Post', content: 'This is the content' });
        console.log('Post created');

        await deletePost(1);
        console.log('Post deleted');
    } catch (error) {
        console.error(error);
    }
};

// Running the example
exampleUsage();
