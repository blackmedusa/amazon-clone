import "./Home.css"
import Product from "./Product"
function Home() {
    return (
      <div className="home">
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            <div className="home__row">
                
                <Product id="1234567" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={119.82} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>
                <Product id="7654321" title="Cuisinart SM-35R Precision Master 3.5 Quart (Ruby Red) stand mixer" price={1438.49} image="https://images-na.ssl-images-amazon.com/images/I/71ZxHNnsBNL.__AC_SX300_SY300_QL70_FMwebp_.jpg" rating={5}/>
            </div>

            <div className="home__row">
              <Product id="1357924" title="SAMSUNG Galaxy Z Flip 3 5G Factory Unlocked Android Cell Phone US Version Smartphone Flex Mode Intuitive Camera Compact 128GB Storage US Warranty, Green" price={5987.98} image="https://m.media-amazon.com/images/I/6157PJlSn7S._AC_UY218_.jpg" rating={5} />
              <Product id="4297531" title="Apple iPhone 12 Pro Max, 256GB, Pacific Blue - Fully Unlocked (Renewed)" price={8691.26} image="https://m.media-amazon.com/images/I/71OO+WDhyFL._AC_UY218_.jpg" rating={5}/>
              <Product id="2468013" title="Speaqua - Functionally Waterproof, Floatable, Bluetooth Speaker with Built in Internal Storage (Up to 2,000 Songs) - Dual Pairing - Removable Suction Barnacle Pro Series - Sea Palm" price={389.55} image="https://m.media-amazon.com/images/I/41J2ajw9alL._AC_UY218_.jpg" rating={5}/>
            </div>

            <div className="home__row">
            <Product id="3108642" title="INSIGNIA NS-70DF710NA21 70-inch Smart 4K UHD - FireTV, Released 2020" price={4495.42} image="https://m.media-amazon.com/images/I/61+OhM4LEUL._AC_UY218_.jpg" rating={5}/>
            </div>
        </div>
      </div>
    );
}

export default Home
