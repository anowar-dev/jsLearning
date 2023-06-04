

{/* <div class="card-inner"> */}
    {/* <h2 class="card-title">Card Title 1</h2> */}
    {/* <p class="card-body">Card details one</p> */}
{/* </div> */}

let postsElements = document.querySelector('.cards');

// let posts = [
    // {
        // title: 'This is title 1',
        // body: 'This is body one'
    // },
    // {
        // title: 'This is title 2',
        // body: 'This is body two'
    // },
    // {
        // title: 'This is title 3',
        // body: 'This is body three'
    // },
    // {
        // title: 'This is title 4',
        // body: 'This is body four'
    // },
// 
    // {
        // title: 'This is title 5',
        // body: 'This is body five'
    // },
    // {
        // title: 'This is title 6',
        // body: 'This is body six'
    // },
    // {
        // title: 'This is title 7',
        // body: 'This is body seven'
    // },
    // {
        // title: 'This is title 8',
        // body: 'This is body eight'
    // },
    // {
        // title: 'This is title 9',
        // body: 'This is body nine'
    // },
    // {
        // title: 'This is title 10',
        // body: 'This is body ten'
    // },
    // {
        // title: 'This is title 11',
        // body: 'This is body eleven'
    // },
    // {
        // title: 'This is title 12',
        // body: 'This is body twoalve'
    // },
    // {
        // title: 'This is title 13',
        // body: 'This is body thirteen'
    // },
    // {
        // title: 'This is title 14',
        // body: 'This is body fourteen'
    // },
    // {
        // title: 'This is title 15',
        // body: 'This is body fifteen'
    // },
    // {
        // title: 'This is title 16',
        // body: 'This is body sixteen'
    // },
    // {
        // title: 'This is title 17',
        // body: 'This is body seventeen'
    // },
    // {
        // title: 'This is title 18',
        // body: 'This is body eighteen'
    // }
// 
// ];
// 


const fetchData = async (config) =>{
    try{
        let res = await axios(config);
        return res.data;
    }
    catch (Error){
        throw Error ('Data not fatched');
    }
}

const uploadData = async () =>
{
    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
    posts.map((post) =>{
        const cards = document.createElement('div');
        cards.classList.add('card-inner');
        cards.innerHTML = `
        <h2 class="card-title">${post.title}</h2> 
        <p class="card-body">${post.body}</p>`;
        postsElements.appendChild(cards);
    });
    
};
uploadData();