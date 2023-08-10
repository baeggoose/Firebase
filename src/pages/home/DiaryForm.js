export default function DiaryForm() {
  return (
    <>
      <form>
        <fieldset>
          <legend>일기 쓰기</legend>
          <label htmlFor="tit">일기 제목 : </label>
          <input id="tit" type="text" required />

          <label htmlFor="tit">일기 내용 : </label>
          <textarea id="tit" type="text" required></textarea>

          <button type="submit">저장하기</button>
        </fieldset>
      </form>
    </>
  );
}
