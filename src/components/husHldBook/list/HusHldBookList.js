import { useMemo, useState } from "react";
import "./hushldbook-list.css"

export default function HusHldBookList({ dataList }){
  const [sortConfig, setSortConfig] = useState({ key: null, order: "asc" });

  const sortedList = useMemo(() => {
    const sorted = [...dataList];
    const { key, order } = sortConfig;

    if(!key) return sorted;

    sorted.sort((a, b) => {
      if (key === "price") {
        return order === "asc"
          ? Number(a.price) - Number(b.price)
          : Number(b.price) - Number(a.price);
      } else if (key === "date") {
        return order === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      } else {
        return order === "asc"
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      }
    });

    return sorted;
  }, [dataList, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if(prev.key === key){
        return{
          key,
          order: prev.order === "asc" ? "desc" : "asc",
        };
      };
      return { key, order: "asc" };
    });
  };

  return (
    <section className="hushldbook-list">
      <h2 className="hushldbook-list__title">지출 내역</h2>
      <div className="hushldbook-list__table-wrap">
        <table className="hushldbook-list__table">
          <thead className="hushldbook-list__head">
            <tr className="hushldbook-list__head-row">
              <th className="hushldbook-list__th hushldbook-list__th--name">
                <button
                  type="button"
                  className={`hushldbook-list__sort-btn ${
                    sortConfig.key === "name" ? "is-active" : ""
                  }`}
                  data-order={
                    sortConfig.key === "name" ? sortConfig.order : undefined
                  }
                  onClick={() => handleSort("name")}
                >
                  이름
                </button>
              </th>

              <th className="hushldbook-list__th hushldbook-list__th--price">
                <button
                  type="button"
                  className={`hushldbook-list__sort-btn ${
                    sortConfig.key === "price" ? "is-active" : ""
                  }`}
                  data-order={
                    sortConfig.key === "price" ? sortConfig.order : undefined
                  }
                  onClick={() => handleSort("price")}
                >
                  가격
                </button>
              </th>

              <th className="hushldbook-list__th hushldbook-list__th--category">
                유형
              </th>

              <th className="hushldbook-list__th hushldbook-list__th--date">
                <button
                  type="button"
                  className={`hushldbook-list__sort-btn ${
                    sortConfig.key === "date" ? "is-active" : ""
                  }`}
                  data-order={
                    sortConfig.key === "date" ? sortConfig.order : undefined
                  }
                  onClick={() => handleSort("date")}
                >
                  날짜
                </button>
              </th>

              <th className="hushldbook-list__th hushldbook-list__th--memo">
                메모
              </th>
              <th className="hushldbook-list__th hushldbook-list__th--repurchase">
                재구매
              </th>
            </tr>
          </thead>

          <tbody className="hushldbook-list__body">
            {sortedList.length === 0 ? (
              <tr>
                <td colSpan="6" className="hushldbook-list__empty">
                  등록된 내역이 없습니다.
                </td>
              </tr>
            ) : (
              sortedList.map((item) => (
                <tr key={item.id} className="hushldbook-list__row">
                  <td>{item.name}</td>
                  <td className="hushldbook-list__td--price">
                    {Number(item.price).toLocaleString()}원
                  </td>
                  <td>{item.category}</td>
                  <td className="hushldbook-list__td--date">{item.date}</td>
                  <td className="hushldbook-list__td--memo">{item.memo}</td>
                  <td>
                    {item.repurchase === "yes" ? "있음" : "없음"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};