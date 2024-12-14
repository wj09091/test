const recipes = [
    {
      name: '치즈 토스트',
      ingredients: ['치즈', '빵', '계란'],
      category: '양식',
      image: require('../image/cheese-toast.jpg'),
    },
    {
      name: '계란 토마토 볶음',
      ingredients: ['계란', '토마토'],
      category: '양식',
      image: require('../image/tomato-egg.jpg'),
    },
    {
      name: '감자튀김',
      ingredients: ['감자', '양파'],
      category: '양식',
      image: require('../image/potato-fries.jpg'),
    },

    //한식
    {
      name: '비빔밥',
      category: '한식',
      ingredients: ['밥', '고추장', '야채'],
      image: require('../image/비빔밥.jpg'),
    },
    {
        name: '김치찌개',
        category: '한식',
        ingredients: ['김치', '돼지고기', '두부'],
        image: require('../image/김치찌개.jpg'),
    }
  ];
  
  export default recipes;
  