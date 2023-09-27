import "./app.css";
import Carousel from "./Carousel";
import photos from "./photos.js";

/** App component, renders Carousel
 * 
 * props: none
 * state: none
 * 
 * App --> Carousel
 */

function App() {

    const carouselPhotos = photos;
    const carouselTitle = "Shells from the beach";

    return (
        <div.className="app">
          <Carousel photos={carouselPhotos} title={carouselTitle} />  
        </div>
    );
}

export default App;