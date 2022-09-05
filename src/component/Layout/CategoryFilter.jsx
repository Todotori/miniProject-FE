import { useState } from 'react';

const CategoryFilter = () => {
  const items = {
    initial: [
      {
        title: '전체보기',
        value: 'all',
      },
    ],
    categories: [
      {
        title: '전체보기',
        value: 'all',
      },
      {
        title: '일상',
        value: 'daily',
      },
      {
        title: '업무',
        value: 'work',
      },
      {
        title: '여가',
        value: 'leisure',
      },
      {
        title: '자기계발',
        value: 'development',
      },
      {
        title: '기타',
        value: 'etc',
      },
    ],
  };
  const [category, setCategory] = useState('all');
  const [isChecked, setIsChecked] = useState(false); // 체크 여부
  const [checkedItems, setCheckedItems] = useState(new Set()); // 체크된 요소

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(target.parentNode, target.value, target.checked);
  };

  return (
    <>
      <div className='category-set'>ㅎㅎ</div>
    </>
  );
};

export default CategoryFilter;
