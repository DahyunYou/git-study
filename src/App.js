/* eslint-disabled */
import './App.css';
import { useState } from 'react';

function App() {
	let post = '강남 우동 맛집'
	let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
	let [like, setLike] = useState(0);
	let [modal, setModal] = useState(false); // useState(형식은 자유)


	return (
		<div className="App">
			<div className='black-nav'>
				<h4>ReactBlog</h4>
			</div>

			<span className='btn' onClick={ () => {
				let copy = [...title]; // 괄호를 새로 바꿔주세요.(괄호 벗겨주고 괄호를 다시 씌워주세요. => 완전히 독립적인 array사본이 생성됨. 화살표가 달라짐.)
				copy[0] = '여자 코트 추천';
				setTitle(copy);

				// 기존state == 신규state의 경우(화살표가 같은 경우) 변경 안 해줌.(한번 검사를 거침. 에너지 절약 차원)
				// array/object 특징
				// let arr = [1,2,3]; array/object에 담은 변수엔 데이터를 저장하고 있는 메모리의 주소(화살표)만 저장됨. reference data type 참고
			} }>글 수정</span>

			<button className='btn_sort' onClick={() => {
				let copy = [...title];
				copy.sort();
				setTitle(copy);
			}}>정렬 버튼</button>

			<div className='list'>
				<h4>{title[0]} <span onClick={ () => {setLike(like + 1)} }>👍</span> {like} </h4>
				<p>2월 17일 발행</p>
			</div>
			<div className='list'>
				<h4>{title[1]}</h4>
				<p>2월 17일 발행</p>
			</div>
			<div className='list'>
				<h4 onClick={()=>{ setModal(!modal) }}>{title[2]}</h4>
				<p>2월 17일 발행</p>
			</div>

			{/* 동적인 UI 만드는 step
			1. UI의 현재 상태를 state로 저장
			2. state에 따라 UI가 어떻게 보일지 작성
			*/}
			{
				// 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
				modal == true ? <Modal/> : null
			}
		</div>
	);
}

function Modal() {
	return (
		// fragment div(의미 없는 div로 감싸도 됨)
		<>
		<div className='modal'>
			<h4>제목</h4>
			<p>날짜</p>
			<p>상세 내용</p>
		</div>
		</>
	)
}

// 어떤 걸 컴포넌트로 만들면 좋은가
// 1. 반복적인 html축약할 때
// 2. 큰 페이지들 컴포넌트로 만들어서 씀.
// 3. 자주 변경되는 UI들
// 단점 : state 가져다 쓸 때 문제가 생김. A함수에 있던 변수는 B함수에서 가져다 쓸 수 없음.

export default App;
