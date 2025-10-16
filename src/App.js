import { useEffect, useState } from 'react';
import './App.css';
import HusHldBookForm from './components/husHldBook/form/HusHldBookForm';
import HusHldBookList from './components/husHldBook/list/HusHldBookList';

function App(){
  const [data, setData] = useState(JSON.parse(localStorage.getItem('household-book')) || []);
  const addDataHandler = (addItem)=>{
    setData(prev => {
      return [...prev, addItem];
    });
  };

  useEffect(()=>{
    localStorage.setItem('household-book', JSON.stringify(data));
  },[data]);

  return (
    <div className="App">
      <div className="hushldbook-layout">
        <section className="hushldbook-layout__form">
          <h2 className="hushldbook-layout__title">가계부 입력</h2>
          <HusHldBookForm onAddData={addDataHandler}/>
        </section>

        <section className="hushldbook-layout__list">
          <h2 className="hushldbook-layout__title">지출 내역</h2>
          <HusHldBookList dataList={data}/>
        </section>
      </div>
    </div>
  );
}

export default App;
