import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  const [dday, setDday] = React.useState();

  const backStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background.jpg'})`
    , width: '80vw'
    , height: '100vh'
    , backgroundRepeat: 'no-repeat'
    , backgroundSize: 'cover'

  };

  const containerStyle = {
    display: 'grid'
    , width: '100%'
    , height: '100%'
    , gridTemplateColumns: '1fr 1fr 1fr'
    , gridTemplateRows: '1fr 1fr'
    , rowGap: '50px'
    , columnGap: '50px'
    , justifyItems: 'stretch'
    , alignItems: 'center'
  }

  const cardStyle = {
    backgroundColor: `rgba(133,88,111,0.7)`
    , color: `rgb(208, 184, 168)`
    , borderRadius: '10px'
    , border: '1px solid none'
    , margin: '10px'
  }

  const searchBarStyle = {
    gridColumn: '1 / 4'
    , justifySelf: 'center'

  }

  const titleStyle = {
    backgroundColor: 'rgba(248, 237, 227,0.5)'
    , color: 'rgb(133, 88, 111)'
    , width: '80vw'
    , height: '60px'
    , border: '1px solid none'
  }
  const inputStyle = {
    backgroundColor: `white`
    , width: '600px'
    , height: '60px'
    , borderRadius: '30px'
    , border: '1px solid none'
  }
  const linkStyle = {
    color: `white`
  }

  const target = new Date('2024-01-01');
  
  const calcDday = () => {
    const today = new Date();
    const diff = target - today;
    
    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const diffMin = Math.floor((diff / (1000 * 60)) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);
    
    const value = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초 남았습니다`;

    setDday(value);
  }

  useEffect(()=>{
    setInterval(calcDday,1500);
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <div style={backStyle} >
          <div style={containerStyle}>
            <div style={searchBarStyle}>
              <div>
                <p style={{ color: 'rgb(103, 58, 11)'}}>해외 Defi Side Project를 전문으로 하는 디지털 노마드</p>
              </div>
              <div>
                <h2 style={titleStyle}>{dday}</h2>
              </div>
              <div>
                <a href='http://google.com' style={linkStyle}>google </a>
              </div>
            </div>
            <div style={cardStyle}>
              <p>웹 or App 3개 오픈</p>
              <h1>0/3</h1>
            </div>
            <div style={cardStyle}>
              <p>개인 블로그 작성</p>
              <h1>0/36</h1>
            </div>
            <div style={cardStyle}>
              <p>원어민 대화 진행</p>
              <h1>0/12</h1>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
