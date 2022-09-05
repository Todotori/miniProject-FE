import Multiselect from 'multiselect-react-dropdown';

const Dropdown = () => {
  const items = {
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
  return (
    <Multiselect
      displayValue='title'
      onKeyPressFn={function noRefCheck() {}}
      onRemove={function noRefCheck() {}}
      onSelect={function noRefCheck() {}}
      options={items.categories}
      showCheckbox
      showArrow
      placeholder=''
      style={{
        searchBox: {
          border: '1px solid teal',
          'min-width': '200px',
          'max-width': '350px',
          height: 'auto',
        },
      }}
    />
  );
};

export default Dropdown;
