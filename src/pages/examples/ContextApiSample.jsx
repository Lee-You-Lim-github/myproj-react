import { createContext, useContext, useReducer, useState } from "react";

// 인자 : context에서 다룰 값의 디폴트 값
const MessageContext = createContext();

// reducer 함수
function reducer(prevCount, action) {
  const { type } = action;
  if (type === "PLUS") return prevCount + 1;
  return prevCount;
}

function ContextApiSample() {
  //   const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    // useState()
    // <div>
    //   <h2>ContextApiSample</h2>
    //   <button onClick={() => setCount((prev) => prev + 1)}>1씩 증가</button>
    //   <MessageContext.Provider value={{ count, setCount }}>
    //     <Level1 />
    //   </MessageContext.Provider>
    // </div>

    // useReducer()
    <div>
      <h2>ContextApiSample</h2>
      <button onClick={() => dispatch({ type: "PLUS" })}>1씩 증가</button>
      <MessageContext.Provider value={{ count, dispatch }}>
        <Level1 />
      </MessageContext.Provider>
    </div>
  );
}

function Level1() {
  return (
    <div>
      <h2>Level1</h2>
      <Level2 />
    </div>
  );
}

function Level2() {
  return (
    <div>
      <h2>Level2</h2>
      <Level3 />
    </div>
  );
}

function Level3() {
  return (
    <div>
      <h2>Level3</h2>
      <MessageContext.Consumer>{({ count }) => count}</MessageContext.Consumer>
      <Level4 />
    </div>
  );
}

// useState()
// function Level4() {
//   const { count, setCount } = useContext(MessageContext);
//   return (
//     <div>
//       <h2>Level4</h2>
//       <div>{count}</div>
//       <button onClick={() => setCount((prev) => prev + 1)}>1씩 증가</button>
//     </div>
//   );
// }

// useReducer()
function Level4() {
  const { count, dispatch } = useContext(MessageContext);
  return (
    <div>
      <h2>Level4</h2>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: "PLUS" })}>1씩 증가</button>
    </div>
  );
}

export default ContextApiSample;
