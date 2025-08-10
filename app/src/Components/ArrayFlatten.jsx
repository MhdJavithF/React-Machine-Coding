import React, { useEffect, useState } from 'react'

const categoryTree = [
  {
    id: "electronics",
    name: "Electronics",
    children: [
      {
        id: "computers",
        name: "Computers",
        children: [
          { id: "laptops", name: "Laptops" },
          { id: "desktops", name: "Desktops" },
          {
            id: "components",
            name: "Components",
            children: [
              { id: "processors", name: "Processors" },
              { id: "graphics-cards", name: "Graphics Cards" },
              { id: "memory", name: "Memory" },
            ],
          },
        ],
      },
      {
        id: "phones",
        name: "Phones & Tablets",
        children: [
          { id: "smartphones", name: "Smartphones" },
          { id: "tablets", name: "Tablets" },
          { id: "accessories-phn", name: "Accessories-phn" },
        ],
      },
    ],
  },
  {
    id: "clothing",
    name: "Clothing",
    children: [
      { id: "mens", name: "Men's Clothing" },
      { id: "womens", name: "Women's Clothing" },
      {
        id: "accessories",
        name: "Accessories",
        children: [
          { id: "watches", name: "Watches" },
          { id: "bags", name: "Bags" },
          { id: "jewelry", name: "Jewelry" },
        ],
      },
    ],
  },
];

const ArrayFlatten = () => {
    const [flattenArray, setFlattenArray] = useState([]);

    const flatteningFunc = (categories) => {
        const result = [];

        const processFlattenArray = (category) => {
            const {children, ...categoryWithoutChildern} = category;
            result.push(categoryWithoutChildern);
            
            if(children && children.length > 0){
                for(const child of children){
                    processFlattenArray(child);
                }
            }
        }

        for(const category of categories){
            processFlattenArray(category);
        }

        return result;
    }

    useEffect(() => {
        const result = flatteningFunc(categoryTree);
        setFlattenArray(result);
        console.log(result);
        
    },[])
  return (
    <div className='animated-bg'>
        <h3 className="text-center mb-4 gradient-title">Array flattening without Array.flat()</h3>
        <select style={{width:"200px", height:"40px", fontSize:"20px", fontWeight:"600"}}>
        {
            flattenArray.map(item => (
                <option key={item.id}>{item.name}</option>
            ))
        }
        </select>
    </div>
  )
}

export default ArrayFlatten