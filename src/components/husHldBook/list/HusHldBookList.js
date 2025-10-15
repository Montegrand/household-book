export default function HusHldBookList(){
  const data = localStorage.getItem('household-book');
  console.log(data)
  return (
    <section className="hushldbook-list">
      <h2 className="hushldbook-list__title">지출 내역</h2>

      {/* 🔍 필터 및 기간 선택 */}
      <div className="hushldbook-list__controls">
        <div className="hushldbook-list__filter">
          <label htmlFor="categoryFilter" className="hushldbook-list__label">유형</label>
          <select id="categoryFilter" name="categoryFilter" className="hushldbook-list__select">
            <option value="all">전체</option>
            <option value="food">식비</option>
            <option value="transport">교통비</option>
            <option value="shopping">쇼핑</option>
            <option value="etc">기타</option>
          </select>
        </div>

        <div className="hushldbook-list__period">
          <label htmlFor="startDate" className="hushldbook-list__label">시작일</label>
          <input type="date" id="startDate" name="startDate" className="hushldbook-list__input" />

          <span className="hushldbook-list__dash">~</span>

          <label htmlFor="endDate" className="hushldbook-list__label">종료일</label>
          <input type="date" id="endDate" name="endDate" className="hushldbook-list__input" />

          <button type="button" className="hushldbook-list__btn hushldbook-list__btn--filter">
            조회
          </button>
        </div>
      </div>

      {/* 📊 리스트 테이블 */}
      <div className="hushldbook-list__table-wrap">
        <table className="hushldbook-list__table">
          <thead className="hushldbook-list__head">
            <tr className="hushldbook-list__head-row">
              <th className="hushldbook-list__th hushldbook-list__th--name">이름</th>
              <th className="hushldbook-list__th hushldbook-list__th--price">
                가격
                <button
                  type="button"
                  className="hushldbook-list__sort-btn"
                  data-sort="price"
                >
                  정렬
                </button>
              </th>
              <th className="hushldbook-list__th hushldbook-list__th--category">유형</th>
              <th className="hushldbook-list__th hushldbook-list__th--date">
                날짜
                <button
                  type="button"
                  className="hushldbook-list__sort-btn"
                  data-sort="date"
                >
                  정렬
                </button>
              </th>
              <th className="hushldbook-list__th hushldbook-list__th--memo">메모</th>
              <th className="hushldbook-list__th hushldbook-list__th--repurchase">재구매 의사</th>
            </tr>
          </thead>

          <tbody className="hushldbook-list__body">
            {/* 리스트 아이템 예시 */}
            <tr className="hushldbook-list__row">
              <td className="hushldbook-list__td hushldbook-list__td--name">커피</td>
              <td className="hushldbook-list__td hushldbook-list__td--price">4,500원</td>
              <td className="hushldbook-list__td hushldbook-list__td--category">식비</td>
              <td className="hushldbook-list__td hushldbook-list__td--date">2025-10-15</td>
              <td className="hushldbook-list__td hushldbook-list__td--memo">아침에 구매</td>
              <td className="hushldbook-list__td hushldbook-list__td--repurchase">있음</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 📄 결과 없음 메시지 (조건부 표시 예정) */}
      <p className="hushldbook-list__empty">표시할 내역이 없습니다.</p>
    </section>
  );
}
