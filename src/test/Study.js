import { useState, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";

export default function Example() {
  // useState 사용
  const [count, setCount] = useState(0);

  // 일반 변수
  let normalVar = 0;

  // useRef 사용
  const refValue = useRef(0);

  const handleClick = () => {
    setCount(count + 1); // 상태 업데이트
    normalVar += 1; // 일반 변수 값 증가 (렌더링에 영향 없음)
    refValue.current += 1; // ref 값 증가 (렌더링에 영향 없음)
    console.log("State:", count, "NormalVar:", normalVar, "Ref:", refValue.current);
  };

  return (
    <div>
      <p>useState: {count}</p>
      <p>일반 변수: {normalVar} (렌더링 시 초기화됨)</p>
      <p>useRef: {refValue.current} (렌더링 영향 없음)</p>
      <button onClick={handleClick}>증가</button>
      <Link to="/search?key=kej">주소창을 확인해보세요</Link>
      <Routes>
        <Route path="/search" element={<p>출력되니?</p>}></Route>
        <Route path="*" element={<p>해당페이지가 없습니다.</p>}></Route>
      </Routes>
    </div>
  );
}
