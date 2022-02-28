
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['글 리스트1', '글 리스트2', '글 리스트3']);
  let [따봉, 따봉변경] = useState(0);

  // let posts = "강남 고기 맛집"

  function 제목바꾸기() {
    // 글제목변경(['글 리스트1 변경', '글 리스트2 변경', '글 리스트3 변경']);

    var newArray = [...글제목]; // deep copy
    newArray[0] = '글 리스트1만 변경'
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }> 글제목 변경 </button>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }> 👍 </span> {따봉} </h3>  
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>  
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>  
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
