import bosuLogo from '../assets/bosu.png'
import Contents from './Contents';

function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2">
          <img src={bosuLogo} alt="icon" />
        </div>
        <div className="col-sm-10">
          <Contents />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
