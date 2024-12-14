import React, { useState } from 'react';

const RecipeDisplay = ({ recipes }) => {
  const [comments, setComments] = useState({}); // 각 요리별 코멘트 상태
  const [activeRecipe, setActiveRecipe] = useState(null); // 현재 코멘트를 작성 중인 요리
  const [rating, setRating] = useState(0); // 별점
  const [comment, setComment] = useState(''); // 작성 중인 코멘트

  // 코멘트 추가 핸들러
  const handleAddComment = (recipeName) => {
    if (rating === 0 || comment.trim() === '') {
      alert('별점과 코멘트를 모두 입력해주세요.');
      return;
    }

    // 새로운 코멘트를 해당 요리의 코멘트 리스트에 추가
    setComments((prevComments) => ({
      ...prevComments,
      [recipeName]: [...(prevComments[recipeName] || []), { rating, comment }],
    }));

    setRating(0);
    setComment('');
    setActiveRecipe(null); // 입력창 닫기
  };

  // 코멘트 삭제 핸들러
  const handleDeleteComment = (recipeName, commentIndex) => {
    setComments((prevComments) => ({
      ...prevComments,
      [recipeName]: prevComments[recipeName].filter((_, index) => index !== commentIndex),
    }));
  };

  return (
    <div>
      <h2>추천 요리</h2>
      {recipes.length === 0 ? (
        <p>조건에 맞는 요리가 없습니다.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.name} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>{recipe.name}</h3>
            <img
              src={recipe.image}
              alt={recipe.name}
              style={{ width: '200px', borderRadius: '10px' }}
            />

            <button
              onClick={() => setActiveRecipe(recipe.name)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              Comment
            </button>

            {/* 코멘트 입력 창 */}
            {activeRecipe === recipe.name && (
              <div style={{ marginTop: '10px' }}>
                <h4>별점 선택</h4>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    style={{
                      fontSize: '20px',
                      color: star <= rating ? '#FFD700' : '#ccc',
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </button>
                ))}

                <h4>코멘트 입력</h4>
                <textarea
                  maxLength="100"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="100자 이내로 입력하세요"
                  style={{
                    width: '100%',
                    height: '50px',
                    marginTop: '10px',
                    padding: '5px',
                    fontSize: '14px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                  }}
                />

                <button
                  onClick={() => handleAddComment(recipe.name)}
                  style={{
                    marginTop: '10px',
                    padding: '10px 15px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  저장
                </button>
              </div>
            )}

            {/* 저장된 코멘트 목록 */}
            {(comments[recipe.name] || []).length > 0 ? (
              comments[recipe.name].map((item, index) => (
                <div
                  key={index}
                  style={{
                    marginTop: '10px',
                    padding: '10px',
                    backgroundColor: '#f9f9f9',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                  }}
                >
                  <p>⭐ {item.rating} / 5</p>
                  <p>{item.comment}</p>
                  <button
                    onClick={() => handleDeleteComment(recipe.name, index)}
                    style={{
                      backgroundColor: '#FF6347',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      marginTop: '5px',
                    }}
                  >
                    삭제
                  </button>
                </div>
              ))
            ) : (
              <p style={{ marginTop: '10px' }}>작성된 코멘트가 없습니다.</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeDisplay;
