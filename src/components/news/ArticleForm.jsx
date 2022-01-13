import Button from "components/Button";
import DebugStates from "components/DebugStates";
import H2 from "components/H2";
import LoadingIndicator from "components/LoadingIndicator";
import useFieldValues from "hooks/useFieldValues";
import { useApiAxios } from "api/base";

// !articleId : 생성
// articleId : 수정

const INIT_FIELD_VALUES = { title: "", content: "" };

function ArticleForm({ articleId, handleDidSave }) {
  // aritcleId 값이 있을 때에만 조회
  // article => manual=false
  // !article => manual=true
  const [{ data: article, loading: getLoading, error: getError }] = useApiAxios(
    `/news/api/articles/${articleId}/`,
    { manual: !articleId }
  );

  const [
    {
      loading: saveLoading,
      error: saveError,
      errorMessages: saveErrorMessages,
    },
    saveRequest,
  ] = useApiAxios(
    {
      url: !articleId
        ? "/news/api/articles/"
        : `/news/api/articles/${articleId}/`,
      method: !articleId ? "POST" : "PUT",
    },
    { manual: true }
  );

  const { fieldValues, handleFieldChange } = useFieldValues(
    article || INIT_FIELD_VALUES
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited !!!");

    // fieldValues : 객체 (except 파일)
    // 파일을 업로드하려면, FormDate 인스터스를 써야합니다.
    const formData = new FormData();
    Object.entries(fieldValues).forEach(([name, value]) => {
      if (Array.isArray(value)) {
        const fileList = value;
        fileList.forEach((file) => formData.append(name, file));
      } else {
        formData.append(name, value);
      }
    });

    saveRequest({
      data: formData,
    }).then((response) => {
      const savedPost = response.data;
      if (handleDidSave) {
        return handleDidSave(savedPost);
      }
    });
  };

  return (
    <div>
      <H2>Article Form</H2>

      {saveLoading && <LoadingIndicator>저장 중...</LoadingIndicator>}
      {saveError &&
        `저장 중 에러가 발생했습니다. (${saveError.response.statusText})`}

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            name="title"
            value={fieldValues.title}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.title?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div className="my-3">
          <textarea
            name="content"
            value={fieldValues.content}
            onChange={handleFieldChange}
            className="p-1 bg-gray-100 w-full h-80 outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.content?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            multiple
            name="photo"
            onChange={handleFieldChange}
          />
          {saveErrorMessages.photo?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div className="my-3">
          <Button>저장하기</Button>
        </div>
      </form>
      <DebugStates
        article={article}
        getLoading={getLoading}
        getError={getError}
        saveErrorMessages={saveErrorMessages}
        fieldValues={fieldValues}
      />
    </div>
  );
}

export default ArticleForm;
