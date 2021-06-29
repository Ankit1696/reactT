import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {data} from './books';
// import Book from './Book';
import SpecificBook from './Book';
// in default export we can change name but
// in export function name should match as    1`

function BookList(){

  return (
    <section className='booklist'>
     {data.map((book)=>{
       return (
         <SpecificBook key={book.id} {...book}></SpecificBook>
       );
     })}
      
    </section>
  ) 
}



ReactDOM.render(<BookList/>, document.getElementById('root'));