import { createContext, useState, useContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [product, setProduct] = useState(false);

  return (
    <ProductContext.Provider
      value={{
        productDetails,
        setProductDetails,
        isPopupVisible,
        setIsPopupVisible,
        product, setProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
