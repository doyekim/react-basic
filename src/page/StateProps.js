import React from 'react'

function StateProps({data, name}) {
  console.log(data, name)
  return (
    <>
      <h2>props</h2>
      * 부모 컨포넌트에서 자식 컨포넌트로 값을 보내줄때 사용
      * 부모안에 있는 &#60; 자식컨포넌트 속성 ='값' / &#62;
      * function 자식(props){ 
      console.log(props)    // {속성: '값'}
      }


      <h2>state</h2>
      <button> {count} </button>
    </>
  )
}

export default StateProps