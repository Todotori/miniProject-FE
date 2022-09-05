import { NoEncryption } from '@material-ui/icons';
import Multiselect from 'multiselect-react-dropdown';

const Dropdown = () => {
  const items = {
    initial: [
      {
        title: '전체보기',
        value: 'al',
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
  const onChange = (selectedList, selectedItem) => {
    console.log(selectedList, selectedItem);
  };
  return (
    <Multiselect
      displayValue='title'
      onSelect={onChange}
      selectedValues={items.initial}
      options={items.categories}
      showCheckbox
      showArrow
      placeholder={items.title}
      style={{
        searchBox: {
          maxWidth: '350px',
          minWidth: '200px',
          height: 'auto',
        },
      }}
    />
  );
};

export default Dropdown;
