import React from 'react'


const Book =(properties) =>
{ 

  // attributes, eventHandler
  // onClick, onMouseOver

  const {img, title, author} = properties;

  const ClickHandler = (e)=>{
    console.log(e);
    console.log(e.target); 
    alert("Hello world!");
  }

  const complextExample = (author)=>{ 
    console.log(author);
  }
  return( <article className='book' onMouseOver={
    ()=>{

      console.log(title);
    }
  }>
  <img src={img} alt="" />
  <h1 onClick={()=> console.log(title)}>{title}</h1>
  <h4>{author}</h4>
  <button type="button" onClick={
    ClickHandler
  }>Alert</button>
  <button type="button" onClick={()=>complextExample(author)}>More complex example</button>
  </article>
  );
}

export default Book
