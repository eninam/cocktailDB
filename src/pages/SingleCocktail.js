import React from "react";
import {useParams} from 'react-router-dom'
export default function SingleCocktail() {
  const {id} = useParams();
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
  setLoading(true);
  async function getCocktail() {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await response.json();
    if(data.drinks) {
      const {
        strDrink: name, strDrinkThumb: img, 
        strAlcoholic: info,
        StrCategory: category, strGlass: glass, StrInstructions: instructions,
        strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5
      } = data.drinks[0];
      const ingredients = [strIngredient1, strIngredient2,strIngredient3, strIngredient4
      ,strIngredient5];
      const newCocktail =
      {name, img, info, category, glass, instructions, ingredients}
      setCocktail(newCocktail)
    } else {
      setCocktail(null)
    }
    
  } catch(error) {
    
  }
  setLoading(true);
}
  getCocktail()
  }, [id])
if(loading){
  return <h2 className="section-title">Loading ...</h2>
} 
if(!cocktail) {
  return <h2 className="section-title">no cocktail to display</h2>
}

  return( 
  <h1>
  single cocktail page</h1>
  );
}
