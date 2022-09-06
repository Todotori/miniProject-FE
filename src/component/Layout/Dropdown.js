import Multiselect from 'multiselect-react-dropdown';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTag, deleteTag } from '../../redux/modules/checkSlice';

const Dropdown = () => {
  const [tagArray, setTagArray] = React.useState([
    {
      title: '전체보기',
      value: 'all',
    },
  ]);
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

  const dispatch = useDispatch();

  // 상태조회
  const Tag = useSelector(state => state.check);

  const onSelect = (_, selectedItem) => {
    dispatch(addTag(selectedItem.title));
  };

  const onDelete = (_, selectedItem) => {
    dispatch(deleteTag(selectedItem.title))
  }


  return (
    <Multiselect
      items={items}
      displayValue='title'
      onSelect={onSelect}
      onRemove={onDelete}
      options={items.categories}
      showCheckbox
      showArrow
      selectedValues={items.initial}
      placeholder=''
      style={{
        searchBox: {
          border: '1px solid teal',
          maxWidth: '350px',
          minWidth: '200px',
          height: 'auto',
        },
      }}
    />
  );
};

export default Dropdown;
