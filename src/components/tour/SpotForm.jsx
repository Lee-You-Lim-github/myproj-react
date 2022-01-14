import { useApiAxios } from "api/base";
import Button from "components/Button";
import DebugStates from "components/DebugStates";
import useFieldValues from "hooks/useFieldValues";
import { useNavigate } from "react-router-dom";

const INITAIL_AREA = ["지역", "대전광역시", "세종특별자치시", "제주특별자치시"];

const INITAIL_SPOT_VALUE = {
  area: "지역",
  destination: "",
  content: "",
};

function SpotForm() {
  const { fieldValues, handleFieldChange } = useFieldValues(INITAIL_SPOT_VALUE);
  const navigate = useNavigate();

  const [{ loading: postLoading, error: postError }, saveSpot] = useApiAxios(
    {
      url: `/tour/api/spots/`,
      method: "POST",
    },
    { manual: true }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("저장!!!");

    saveSpot({
      data: fieldValues,
    }).then((response) => {
      // 저장이 완료되었다면 detail 페이지로 가도록.
      const savedSpotId = response.data.id;
      navigate(`/tour/${savedSpotId}`);
    });
  };

  return (
    <div>
      <h2>새 Sopt 작성</h2>

      <form
        onSubmit={handleSubmit}
        className="rounded border-2 border-gray-300 p-3 my-3"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            지역
          </label>
          <select
            name="area"
            value={fieldValues.area}
            onChange={handleFieldChange}
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
            value={fieldValues.destination}
            onChange={handleFieldChange}
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
            value={fieldValues.content}
            onChange={handleFieldChange}
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            사진 업로드
          </label>
          <input type="file" name="photo" accept=".png, .jpg, .jpeg" multiple />
        </div> */}
        <div>
          <Button>저장하기</Button>
        </div>
      </form>

      <DebugStates
        fieldValues={fieldValues}
        postLoading={postLoading}
        postError={postError}
      />
    </div>
  );
}

export default SpotForm;
