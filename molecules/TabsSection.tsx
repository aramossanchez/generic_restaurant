import Tab from '@/atoms/Tab'
import { PRODUCT_TYPES } from '@/data/ProductTypes'
import { useProductContext } from '@/providers/ProductProvider';
import React from 'react'

export default function TabsSection() {

  const { tabSelected, setTabSelected } = useProductContext();

  const tabStyle = (tab: string) => {
    return tabSelected === tab ? "border-primaryColor" : "border-borderColor"
  }

  return (
    <div className='flex items-center gap-x-2 flex-nowrap overflow-x-auto pb-2'>
      <Tab
        text='Todo'
        onClick={() => setTabSelected("")}
        className={tabStyle("")}
      />
      {PRODUCT_TYPES.map((type) => {
        return (
          <Tab
            key={`${type}-tipo-pestaña`}
            text={type}
            onClick={() => setTabSelected(type)}
            className={tabStyle(type)}
          />
        )
      })}
    </div>
  )
}
