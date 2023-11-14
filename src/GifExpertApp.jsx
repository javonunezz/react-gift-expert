import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball Z']);


    const onAddCategory = ( newCategory ) => {
        const lowCaseCategories = categories.map( category => category.toLowerCase() );
        const lowCaseNewCategory = newCategory.toLowerCase();
        if( lowCaseCategories.includes(lowCaseNewCategory)) return;

        setCategories( [ newCategory, ...categories ] )        
    };


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory={ value => onAddCategory(value) }
            />
            {
                categories.map( (category) => (
                    <GifGrid key={ category } category={ category }/>
                ))
            }
        </>
  )
}