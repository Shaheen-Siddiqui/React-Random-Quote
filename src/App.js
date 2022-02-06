import React, {useState } from 'react'
const App = () => {
  let [text,setText]=useState();
  let [author,seTauthor]=useState();
  let [link,seTlink]=useState();

  var getting = [
    {
      "quote": "Be the change you wish to see.",
      "author": "Mahatma Gandhi",
      "link": "https://en.wikipedia.org/wiki/Mahatma_Gandhi"
    },
    {
      "quote": "Social progress can be measured by the social position of the female sex.",
      "author": "Karl Marx",
      "link": "https://en.wikipedia.org/wiki/Karl_Marx"
    },
    {
      "quote": "I like the religion that teaches liberty, equality and fraternity.",
      "author": "B. R. Ambedkar",
      "link": "https://en.wikipedia.org/wiki/B._R._Ambedkar"
    },
    {
      "quote": "If you tremble with indignation at every injustice then you are a comrade of mine.",
      "author": "Ernesto Che Guevara",
      "link": "https://en.wikipedia.org/wiki/Che_Guevara"
    },
    {
      "quote": "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me.",
      "author": "Abdul Kalam",
      "link": "https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam"
    }
  ];
  

const Changing=()=>{
const Result = Math.floor(Math.random()*getting.length);
  const  value1=getting[Result].quote;
  const  value2=getting[Result].author;
  const  value3=getting[Result].link;
    setText(value1)
    seTauthor(value2)
    seTlink(value3)}

  return (
    <>
      
<div className='outerDiv'>
<p className='Quotes'> {text} </p>
<p className='Author_Name second'> {author}</p>

<a className='links'>{link} </a>

<div className='container'>
<a href="#"><button onClick={Changing}>Button</button></a>
</div>

</div>
    </>
  )
}

export default App
