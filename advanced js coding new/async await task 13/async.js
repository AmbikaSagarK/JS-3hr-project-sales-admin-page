console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTickets = new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve('ticket')
    },3000)
});

const getPopcorn = promiseWifeBringingTickets.then((t) => {
    console.log('wife: i got the tickets');
    console.log('husband: lets go in');
    console.log('wife: no iam hungry');
    return new Promise((resolve, reject) => resolve('ticket popcorn'));   
});
const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband: lets go in');
    console.log('wife: i need butter on popcorn');
    return new Promise((resolve, reject) => resolve('ticket Butter'));   
});
getButter.then((t) => 
    console.log(t));
console.log('person4: shows ticket');
console.log('person5: shows ticket');