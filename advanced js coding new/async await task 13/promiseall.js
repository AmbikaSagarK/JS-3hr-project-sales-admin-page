console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie = async () => {

const promiseWifeBringingTickets = new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve('ticket')
        },3000)
    });
    const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));
    const getCandy = new Promise((resolve,reject) => resolve('candy'));
    const getColdDrinks = new Promise((resolve,reject) => resolve('colddrinks'));
    
    let ticket = await promiseWifeBringingTickets;
    let[popcorn,candy,getcolddrinks] = await Promise.all([getPopcorn, getCandy, getColdDrinks ]);

        console.log('popcorn,candy,getcolddrinks');

    
    return ticket;
}
 preMovie().then((m) => console.log('person3: shows ticket'));

console.log('person4: shows ticket');
console.log('person5: shows ticket');