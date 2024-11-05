// context/ProductContext.ts
"use client"
import { PRODUCTS } from '@/data/Products';
import { Product } from '@/types/types';
import { createContext, useContext, useState, ReactNode, useEffect, useCallback, useMemo } from 'react';

type ProductContextType = {
  filteredProducts : Product[];
  setAvailableProducts: (availableProducts: Product[]) => void;
  addedProducts: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
  deleteAllProduct: () => void;
  totalPrice: number;
  sendInfo: () => void;
  FILTER_OPTIONS: string[];
  setfilterSelected: (filterSelected: string) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {

  const [availableProducts, setAvailableProducts] = useState<Product[]>(PRODUCTS);
  const [addedProducts, setAddedProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const FILTER_OPTIONS = [
    "Tipo 1",
    "Tipo 2",
    "Tipo 3",
    "Tipo 4",
    "Tipo 5",
    "Tipo 6",
    "Tipo 7",
    "Tipo 8",
  ]
  const [filterSelected, setfilterSelected] = useState<string>("");

  const addProduct = (product: Product) => {
    const newProduct = { ...product, id: addedProducts.length + "-added-product" };
    setAddedProducts([...addedProducts, newProduct]);
  }

  const deleteProduct = (product: Product) => {
    let newAddedProducts = structuredClone(addedProducts);
    newAddedProducts = newAddedProducts.filter((item) => item.id !== product.id);
    setAddedProducts(newAddedProducts);
  }

  const deleteAllProduct = () => {
    setAddedProducts([]);
  }

  const getTotalPrice = useCallback(() => {
    let price = 0;
    addedProducts.forEach((product) => {
      price += product.price;
    });
    setTotalPrice(price);
  }, [addedProducts]);

  const filteredProducts = useMemo(() => {
    if (filterSelected) {
      return availableProducts.filter((product) => product.type === filterSelected);
    }
    return availableProducts;
  }, [availableProducts, filterSelected]);

  const sendInfo = () => {
    console.log(addedProducts);
  }

  useEffect(() => {
    getTotalPrice();
  }, [addedProducts, getTotalPrice]);

  return (
    <ProductContext.Provider value={{
      filteredProducts ,
      setAvailableProducts,
      addedProducts,
      addProduct,
      deleteProduct,
      deleteAllProduct,
      totalPrice,
      sendInfo,
      FILTER_OPTIONS,
      setfilterSelected
    }}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook para acceder al contexto de productos
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext debe ser usado dentro de ProductProvider');
  }
  return context;
};
