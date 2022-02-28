
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['다) 글 리스트1', '가) 글 리스트2', '나) 글 리스트3']);
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

      <Modal />
    </div>
  );
}

function Modal() { // Modal 이라는 컴포넌트 생성
  return (
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
