import Rating from "./Rating";

//review: 보여질 리뷰 객체
// handleDelete: 인자없는 함수, 삭제 버튼 클릭시에 호출을 합니다.

function Review({ review, handleDelete, handleEdit }) {
  const { content, score } = review;

  // TODO: handleEdit/handleDelete 호출에 대한 방어적 코드를 작성해주세요.

  return (
    <div className="bg-yellow-100 border border-red-400 my-1 p-1">
      <div>
        <span
          onClick={() => handleEdit()}
          className="hover:text-blue-400 curser-pointer mr-1"
        >
          수정
        </span>
        <span
          onClick={() => handleDelete()}
          className="hover:text-red-400 curser-pointer mr-1"
        >
          삭제
        </span>
      </div>
      {content}
      <Rating score={score} />
    </div>
  );
}
export default Review;
