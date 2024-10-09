import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ImageCard from './components/ImageCard';

function App() {
  return (
    
    <div>
    <Header />
    <div className="container mt-4">
      <h1>Tours</h1>
      <div className="row">
        <div className="col-md-3">
          <ImageCard
            title="London"
            text="London Royal Palace Tour"
            imgSrc="./img/London.jpg"
            buttonLabel="Info"
          />
        </div>
        <div className="col-md-3">
          <ImageCard
            title="Newyork"
            text="Newyork Statue of Liberty Tour"
            imgSrc="./img/Newyork.jpg"
            buttonLabel="Info"
          />
        </div>
        <div className="col-md-3">
          <ImageCard
            title="Paris"
            text="Paris Efil Tower Tour"
            imgSrc="./img/Paris.jpg"
            buttonLabel="Info"
          />
        </div>
        <div className="col-md-3">
          <ImageCard
            title="Tokyo"
            text="Tokyo Sushi Tour"
            imgSrc="./img/Tokyo.jpg"
            buttonLabel="Info"
          />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
