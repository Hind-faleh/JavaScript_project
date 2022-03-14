const quotes = [
 {
     quote: " I was never afraid of failure; for I would sooner fail than not be among the greatest.",
     author:"John Keats"


 },
 {
 quote:'It is what you read when you dont have to that determines what you will be when you cant help it',
 author:'OSCAR WILDE'
 },
  {
    quote:'Tomorrow we will run faster, stretch out our arms farther….',
    author:'F. SCOTT FITZGERALD'
  },
  {
      quote:' If you are always trying to be normal you will never know how amazing you can be.',
      author:'MAYA ANGELOU'
  },
  {
      quote:'All we have to decide is what to do with the time that is given us. ',
      author:'J. R. R. TOLKIEN'
  }
]
const btn = document.getElementById('generateQuote')
const quote=document.getElementById('quote')   
const author=document.getElementById('author')

btn.addEventListener('click',() =>{
    let random = Math.floor(Math.random() *quotes.length)
    console.log(random)
    let generate =  quotes[random]
    quote.innerHTML=generate.quote
    author.innerHTML= generate.author
})         