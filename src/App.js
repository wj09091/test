import React, { useState } from 'react';
import IngredientSelector from './components/IngredientSelector';
import RecipeDisplay from './components/RecipeDisplay';
import recipes from './data/recipes';

const App = () => {
  const [category, setCategory] = useState(''); // 선택된 카테고리 (한식/양식)
  const [selectedIngredients, setSelectedIngredients] = useState([]); // 선택된 재료
  const [matchedRecipes, setMatchedRecipes] = useState([]); // 추천된 요리
  const [comments, setComments] = useState({}); // 요리별 코멘트 상태

  // 카테고리 선택 핸들러
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setSelectedIngredients([]); // 카테고리 변경 시 재료 초기화
    setMatchedRecipes([]); // 추천 요리 초기화
  };

  // 재료 선택 핸들러
  const handleIngredientChange = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  // 추천 요리 찾기 핸들러
  const findRecipes = () => {
    const matches = recipes.filter(
      (recipe) =>
        recipe.category === category && // 선택된 카테고리에 맞는 요리 필터링
        recipe.ingredients.every((ing) => selectedIngredients.includes(ing))
    );
    setMatchedRecipes(matches);
  };

  // 코멘트 추가 핸들러
  const handleAddComment = (recipeName, commentData) => {
    setComments((prevComments) => ({
      ...prevComments,
      [recipeName]: commentData,
    }));
  };

  const handleDeleteComment = (recipeName, commentIndex) => {
    setComments((prevComments) => ({
      ...prevComments,
      [recipeName]: prevComments[recipeName].filter((_, index) => index !== commentIndex),
    }));
  };

  return (

    <div>
      <h1>음식 만들기 앱</h1>

      {/* 한식/양식 카테고리 선택 */}
      {category === '' ? (
        <div>
          <button
            onClick={() => handleCategoryChange('한식')}
            style={{ margin: '5px', backgroundColor: '#DDD', padding: '10px 20px' }}
          >
            한식
          </button>
          <button
            onClick={() => handleCategoryChange('양식')}
            style={{ margin: '5px', backgroundColor: '#DDD', padding: '10px 20px' }}
          >
            양식
          </button>
        </div>
      ) : (
        // 한식 또는 양식 선택 시 재료 선택 및 요리 추천 화면 표시
        <>
          <button
            onClick={() => setCategory('')} // 뒤로가기 버튼
            style={{
              marginBottom: '20px',
              padding: '10px 20px',
              backgroundColor: '#FF6347',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            뒤로가기
          </button>
          <IngredientSelector
            selectedIngredients={selectedIngredients}
            onChange={handleIngredientChange}
            category={category} // 현재 카테고리 전달
          />
          <button onClick={findRecipes}>요리 찾기</button>
          <RecipeDisplay
            recipes={matchedRecipes}
            comments={comments}
            onAddComment={handleAddComment}
            onDeleteComment={handleDeleteComment}
          />
        </>
      )}
    </div>
  );
};

export default App;
