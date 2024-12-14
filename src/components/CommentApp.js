import React, { useState } from 'react';

const CommentApp = () => {
  const [comments, setComments] = useState([]); // 코멘트 리스트
  const [newComment, setNewComment] = useState(''); // 작성 중인 코멘트

  // 코멘트 추가 핸들러
  const handleAddComment = () => {
    if (newComment.trim() === '') {
      alert('코멘트를 입력하세요!');
      return;
    }

    // 새로운 코멘트를 기존 리스트에 추가
    setComments([...comments, newComment]);
    setNewComment(''); // 입력 필드 초기화
  };

  // 코멘트 삭제 핸들러
  const handleDeleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index)); // 해당 인덱스의 코멘트를 제외
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>코멘트 앱</h1>

      {/* 코멘트 입력 */}
      <textarea
        placeholder="코멘트를 입력하세요"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        style={{
          width: '100%',
          height: '60px',
          marginBottom: '10px',
          padding: '10px',
          fontSize: '14px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <button
        onClick={handleAddComment}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        코멘트 추가
      </button>

      {/* 코멘트 리스트 */}
      <div style={{ marginTop: '20px' }}>
        <h2>작성된 코멘트</h2>
        {comments.length === 0 ? (
          <p>작성된 코멘트가 없습니다.</p>
        ) : (
          comments.map((comment, index) => (
            <div
              key={index}
              style={{
                marginBottom: '10px',
                padding: '10px',
                backgroundColor: '#f9f9f9',
                border: '1px solid #ccc',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>{comment}</span>
              <button
                onClick={() => handleDeleteComment(index)}
                style={{
                  backgroundColor: '#FF6347',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                삭제
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentApp;
