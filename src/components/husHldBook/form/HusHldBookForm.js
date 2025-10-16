import { useRef } from "react";
import './hushldbook-form.css';

export default function HusHldBookForm({onAddData}){
  const formRef = useRef(null);

  const submitHandler = (e)=>{
    e.preventDefault();

    const submitData = new FormData(formRef.current);
    const data = Object.fromEntries(submitData.entries());

    onAddData(data);
    formRef.current.reset();
  };

  return(
    <form className="hushldbook-form" ref={formRef} onSubmit={submitHandler}>
      <fieldset className="hushldbook-form__wrap">
        <legend className="hushldbook-form__title">지출 항목 입력</legend>

        <div className="hushldbook-form__row">
          <label htmlFor="name" className="hushldbook-form__label">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            className="hushldbook-form__input"
            placeholder="상품명을 입력하세요"
            required
          />
        </div>

        <div className="hushldbook-form__row">
          <label htmlFor="price" className="hushldbook-form__label">가격</label>
          <input
            type="number"
            id="price"
            name="price"
            className="hushldbook-form__input"
            placeholder="금액을 입력하세요"
            min="0"
            required
          />
        </div>

        <div className="hushldbook-form__row">
          <label htmlFor="category" className="hushldbook-form__label">유형</label>
          <select
            id="category"
            name="category"
            className="hushldbook-form__select"
            required
          >
            <option value="">선택하세요</option>
            <option value="food">식비</option>
            <option value="transport">교통비</option>
            <option value="shopping">쇼핑</option>
            <option value="etc">기타</option>
          </select>
        </div>

        <div className="hushldbook-form__row">
          <label htmlFor="date" className="hushldbook-form__label">구입 날짜</label>
          <input
            type="date"
            id="date"
            name="date"
            className="hushldbook-form__input"
            required
          />
        </div>

        <div className="hushldbook-form__row hushldbook-form__row--memo">
          <label className="hushldbook-form__label hushldbook-form__label--checkbox">
            <input
              type="checkbox"
              id="hasMemo"
              name="hasMemo"
              className="hushldbook-form__checkbox"
            />
            메모 추가
          </label>

          <textarea
            id="memo"
            name="memo"
            className="hushldbook-form__textarea"
            placeholder="메모를 입력하세요"
          ></textarea>
        </div>

        <div className="hushldbook-form__row hushldbook-form__row--radio">
          <span className="hushldbook-form__label">재구매 의사</span>
          <div className="hushldbook-form__radios">
            <label className="hushldbook-form__radio">
              <input
                type="radio"
                name="repurchase"
                value="yes"
                className="hushldbook-form__radio-input"
              />
              있음
            </label>
            <label className="hushldbook-form__radio">
              <input
                type="radio"
                name="repurchase"
                value="no"
                className="hushldbook-form__radio-input"
              />
              없음
            </label>
          </div>
        </div>

        <div className="hushldbook-form__actions">
          <button type="submit" className="hushldbook-form__submit">저장</button>
        </div>
      </fieldset>
    </form>
  );
};