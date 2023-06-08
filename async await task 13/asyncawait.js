console.log('person1: shows ticket');
console.log('person2: shows ticket');
const preMovie = async () => {

const promiseWifeBringingTickets = new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve('ticket')
        },3000)
    });
    const getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));
    const addButter = new Promise((resolve,reject) => resolve('butter'));
    const getColdDrinks = new Promise((resolve,reject) => resolve('colddrinks'));
    
    let ticket = await promiseWifeBringingTickets;

        console.log('wife: i got the tickets');
        console.log('husband: lets go in');
        console.log('wife: no iam hungry');
        
        let popcorn = await getPopcorn;

        console.log('husband: i got some popcorn');
        console.log('husband: lets go in');
        console.log('wife: i need butter on popcorn');

        let butter = await addButter;

        console.log('husband: i got some butter on popcorn');
        console.log('husband: anything else?');
        console.log('wife: lets go we are late');
        console.log('husband: thank you');

        let ColdDrinks = await getColdDrinks;
        console.log('husband: i got colddrinks');
        console.log('husband: anything else?');
        console.log('wife: lets go we are already late');


    
    return ticket;
}
 preMovie().then((m) => console.log('person3: shows ticket'));

console.log('person4: shows ticket');
console.log('person5: shows ticket');