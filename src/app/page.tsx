'use client'
import { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar';
import InputArea from './components/InputArea';
import OutputArea from './components/OutputArea';
import { IDtype } from './type';

// 型定義
// type Producttype = {PRD_ID: string;};

export default function Home() {
  const [productid, setProductid] = useState("");
  const message: string = "welcome"

  const handleProductChange = (newProductId) => {
    const newProduct: IDtype = {
      PRD_ID: newProductId
    };
    setProductid(newProduct);
  };
  

  return (
    <>
    <TitleBar/>
    <div className="flex justify-center items-center my-10">
      <h1 className="text-4xl font-bold">{message}</h1>
    </div>
    <InputArea onProductChange={handleProductChange}/>
    <OutputArea productid={productid}/>
    </>
  );
}
