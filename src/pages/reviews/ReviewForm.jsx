function ReviewForm() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h2>Review Form</h2>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          평점
        </label>
        <select
          onChange={(e) => handleChange(e)}
          name="score"
          className="mb-4 block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          리뷰
        </label>
        <textarea
          className="shadow appe`arance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="text"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="mb-4">
        <button
          className="shadow border bg-blue-100 hover:bg-blue-300 border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
          onClick={() => {}}
        >
          저장하기
        </button>
      </div>
    </div>
  );
}

export default ReviewForm;
