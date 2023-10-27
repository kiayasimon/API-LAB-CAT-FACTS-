async function fact(req, res, next) {
   await fetch('https://catfact.ninja/fact')
   .then(res => res.json())
   .then(data => {
    res.render('cats/fact', {
        fact: data.fact});
   })
}

async function facts(req, res, next) {
    await fetch('https://catfact.ninja/facts')
    .then(res => res.json())
    .then(data => {
     res.render('cats/facts', {
         facts: data.data});
    })
 }

module.exports = {
    fact, 
    facts
}