import './app.scss';

import Header from '../header';
import Peaceful from '../peaceful';
import YearWarranty from '../year-warranty';
import ZenCare from '../zen-care';
import ZenShop from '../zen-shop';
import ShopWith from '../shop-with';
import OneApp from '../one-app';
import Quick from '../quick';
import Cashback from '../cashback';
import Partners from '../partners';
import Footer from '../footer';






function App() {
  return (
    <div className="app">
      <div style={{ boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.15)' }}>
        <Header />
      </div>
      <div className="container">
        <Peaceful />
        <YearWarranty />
        <ZenCare />
        <Cashback />
        <Partners />
        <ZenShop />
        <ShopWith />
        <OneApp />
        <Quick />
        <Footer />
      </div>
    </div>
  );
}

export default App;
