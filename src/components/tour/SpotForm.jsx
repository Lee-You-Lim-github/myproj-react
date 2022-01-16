import { useApiAxios } from "api/base";
import Button from "components/Button";
import DebugStates from "components/DebugStates";
import LoadingIndicator from "components/LoadingIndicator";
import useFieldValues from "hooks/useFieldValues";
import produce from "immer";
import { useEffect } from "react";

const INITAIL_AREA = ["지역", "대전광역시", "세종특별자치시", "제주특별자치시"];

const INITAIL_SPOT_VALUE = {
  area: "지역",
  destination: "",
  content: "",
};

// !spotId : 생성
// spotId : 수정

function SpotForm({ spotId, handleDidSave }) {
  // 수정 : 초기값 채우기
  const [{ data: getspot, loading: getLoading, error: getError }, refetch] =
    useApiAxios(`/tour/api/spots/${spotId}/`, { manual: !spotId });

  useEffect(() => {
    refetch();
  }, []);

  const { fieldValues, handleFieldChange, setFieldValues, formData } =
    useFieldValues(getspot || INITAIL_SPOT_VALUE);

  const [
    {
      loading: postLoading,
      error: postError,
      errorMessages: saveErrorMessages,
    },
    saveSpot,
  ] = useApiAxios(
    {
      url: !spotId ? "/tour/api/spots/" : `/tour/api/spots/${spotId}/`,
      method: !spotId ? "POST" : "PUT",
    },
    { manual: true }
  );

  useEffect(() => {
    setFieldValues(
      produce((draft) => {
        draft.photo = "";
      })
    );
  }, [getspot]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("저장!!!");

    saveSpot({
      data: formData,
    }).then((response) => {
      // 저장이 완료되었다면 detail 페이지로 가도록.
      const savedSpot = response.data;
      if (handleDidSave) handleDidSave(savedSpot);
    });
  };

  return (
    <div>
      {spotId ? <h2>Spot 수정</h2> : <h2>New Sopt 작성</h2>}

      {postLoading && <LoadingIndicator>저장 중...</LoadingIndicator>}
      {postError && "에러가 났어요!"}

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
          {saveErrorMessages.destination?.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
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
          {saveErrorMessages.content?.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            사진 업로드
          </label>
          <input
            type="file"
            name="photo"
            accept=".png, .jpg, .jpeg"
            multiple
            onChange={handleFieldChange}
          />
          {saveErrorMessages.photo?.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
        <div>
          <Button>저장하기</Button>
        </div>
      </form>

      <DebugStates
        fieldValues={fieldValues}
        postLoading={postLoading}
        postError={postError}
        getLoading={getLoading}
        getError={getError}
      />
    </div>
  );
}

export default SpotForm;
