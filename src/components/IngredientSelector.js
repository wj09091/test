import React, {useState} from 'react';

const ingredientsByCategory = {
양식 : ['치즈', '토마토', '빵', '계란', '양파', '감자'],
한식 : ['밥', '고추장', '야채', '김치', '돼지고기', '두부'],
};

const IngredientSelector = ({ selectedIngredients, onChange, category }) => {
  const availableIngredients = ingredientsByCategory[category] || [];

  return (
    <div>
      <h2>{category}재료 선택</h2>
      {availableIngredients.map((ingredient) => (
        <label key={ingredient} style={{ marginRight: '10px' }}>
          <input
            type="checkbox"
            checked={selectedIngredients.includes(ingredient)}
            onChange={() => onChange(ingredient)}
          />
          {ingredient}
        </label>
      ))}
    </div>
  );
};

export default IngredientSelector;
