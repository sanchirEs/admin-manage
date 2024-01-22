import React from 'react';
//import css from './style.module.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage';
import ProductList from '../ProductList';
import StockManagement from '../StockManagement';
import AddNewProduct from '../AddNewProduct';
import ShopParameterConfig from '../ShopParameterConfig';
import OrderEmailContentConfig from '../OrderEmailContentConfig';
import PlatformMessage from '../PlatformMessage';
import HotKeywords from '../HotKeywords';
import AdvertisingManagement from '../AdvertisingManagement';
import ProductCategoryConfig from '../ProductCategoryConfig';
import SlidePicConfig from '../SlidePicConfig';
import MenuManagement from '../MenuManagement';
import ShowCategoryConfig from '../ShowCategoryConfig';
import StoreDetails from '../StoreDetails';
import DecorationDrawing from '../DecorationDrawing';
import BrowseCategoryManagement from '../BrowseCategoryManagement';
import GlobalSystemParameters from '../GlobalSystemParameters';
import SalesCatalogManagement from '../SalesCatalogManagement';
import CustomerSurvey from '../CustomerSurvey';
import CustomerManagement from '../CustomerManagement';
import CustomerService from '../CustomerService';
import CommodityInformation from '../CommodityInformation';
import PaymentTerm from '../PaymentTerm';
import AfterSaleOrder from '../AfterSaleOrder';
import DirectOrder from '../DirectOrder';
import OrderList from '../OrderList';
import InvoiceAudit from '../InvoiceAudit';
import TaxBillingManagement from '../TaxBillingManagement';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/stock-management" element={<StockManagement />} />
        <Route path="/add-new-product" element={<AddNewProduct />} />
        <Route path="/shop-parameter-config" element={<ShopParameterConfig />} />
        <Route path="/order-email-content-config" element={<OrderEmailContentConfig />} />
        <Route path="/platform-message" element={<PlatformMessage />} />
        <Route path="/hot-keywords" element={<HotKeywords />} />
        <Route path="/advertising-management" element={<AdvertisingManagement />} />
        <Route path="/product-category-config" element={<ProductCategoryConfig />} />
        <Route path="/slide-pic-config" element={<SlidePicConfig />} />
        <Route path="/menu-management" element={<MenuManagement />} />
        <Route path="/show-category-config" element={<ShowCategoryConfig />} />
        <Route path="/store-details" element={<StoreDetails />} />
        <Route path="/decoration-drawing" element={<DecorationDrawing />} />
        <Route path="/browse-category-management" element={<BrowseCategoryManagement />} />
        <Route path="/global-system-parameters" element={<GlobalSystemParameters />} />
        <Route path="/sales-catalog-management" element={<SalesCatalogManagement />} />
        <Route path="/customer-survey" element={<CustomerSurvey />} />
        <Route path="/customer-management" element={<CustomerManagement />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/commodity-information" element={<CommodityInformation />} />
        <Route path="/payment-term" element={<PaymentTerm />} />
        <Route path="/after-sale-order" element={<AfterSaleOrder />} />
        <Route path="/direct-order" element={<DirectOrder />} />
        <Route path="/order-list" element={<OrderList />} />
        <Route path="/invoice-audit" element={<InvoiceAudit />} />
        <Route path="/tax-billing-management" element={<TaxBillingManagement />} />
      
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
