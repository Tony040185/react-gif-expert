import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Puch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    // categories.push(newCategory)
    // setcategories( cat => [...cat, 'Valorant'])
    setCategories([...categories, newCategory]);
  };

  return (
    <>   
      <h1>GiftExpertApp</h1>

      <AddCategory      
        onNewCategory={onAddCategory}
      />
      
      
        {
          categories.map((category) => (
            <GifGrid 
              key={category} 
              category={ category } 
            />
          ))
        }
      
    </>
  );
};
