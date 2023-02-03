import Appslider from "../../Compnents/Appslider/Slider";
import Header from "../../Compnents/Header/Header";
import "./Home.css"
function Home() {
   
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <div className="Slider">
                    <Appslider />
                </div>
                <div className="main-section">
                    
                </div>
            </div>
        </>

    );
}

export default Home;