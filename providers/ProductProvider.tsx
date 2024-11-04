// context/ProductContext.ts
"use client"
import { PRODUCTS } from '@/data/Products';
import { Product } from '@/types/types';
import { createContext, useContext, useState, ReactNode } from 'react';

type ProductContextType = {
  availableProducts: Product[];
  setAvailableProducts: (availableProducts: Product[]) => void;
  addedProducts: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [availableProducts, setAvailableProducts] = useState<Product[]>(PRODUCTS);

  const [addedProducts, setAddedProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setAddedProducts([...addedProducts, product]);
  }
  const deleteProduct = (product: Product) => {
    let newAddedProducts = structuredClone(addedProducts);
    newAddedProducts = newAddedProducts.filter((item) => item.id !== product.id)
    setAddedProducts(newAddedProducts);
  }

  return (
    <ProductContext.Provider value={{ availableProducts, setAvailableProducts, addedProducts, addProduct, deleteProduct }}>
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
