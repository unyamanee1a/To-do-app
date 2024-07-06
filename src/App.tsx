import photo from "./personlogo.jpg";
import gear from "./gear.png";
import "./App.css";
import { datetimeFormat } from "./utils/date";

function App() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100..900&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100..900&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Mitr:wght@200;300;400;500;600;700&family=Noto+Sans+Thai:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
      </style>
      <div className="container">
        <div className="content">
          <div className="left-bar">
            <div className="left-top-bar">
              <div className="user">
                <div className="menu-bar">
                  <img className="photo" src={photo} />
                  <div className="personal">
                    <div className="profile"> Anyamanee </div>
                    <div className="status"> Student </div>
                  </div>
                </div>
                <div className="line"></div>
              </div>
              <div className="nevigation-bar">
                <div className="main">Main</div>
                <div className="lesson">Lesson</div>
                <div className="homework">Home work</div>
              </div>
            </div>
            <div className="bottom">
              <img className="gear" src={gear} />
              <div className="setting">Setting</div>
            </div>
          </div>
          <div className="right-bar">
            <div className="date">{datetimeFormat(new Date())}</div>
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function Main() {
  return (
    <div className="reminder-bar">
      <div className="reminder">Today main focus</div>
      <div className="assign">Home work : Design to ao app</div>
    </div>
  );
}
