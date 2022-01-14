const INITAIL_AREA = ["대전광역시", "세종특별자치시", "제주특별자치시"];

function SpotForm() {
  return (
    <div>
      <h2>새 Sopt 작성</h2>

      <div className="rounded border-2 border-gray-300 p-3 my-3">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            지역
          </label>
          <select
            name="area"
            className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            {INITAIL_AREA.map((area, index) => (
              <option key={index}>{area}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            여행지
          </label>
          <input
            type="text"
            name="destination"
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            소개
          </label>
          <textarea
            type="text"
            name="content"
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            사진 업로드
          </label>
          <input type="file" name="photo" accept=".png, .jpg, .jpeg" multiple />
        </div>
      </div>
    </div>
  );
}

export default SpotForm;
