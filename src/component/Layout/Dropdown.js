import Multiselect from "multiselect-react-dropdown";
import React from "react";
const Dropdown = () => {
  const [tagArray, setTagArray] = React.useState([
    {
      title: "전체보기",
      value: "all",
    },
  ]);
  const items = {
    initial: [
      {
        title: "전체보기",
        value: "all",
      },
    ],
    categories: [
      {
        title: "일상",
        value: "daily",
      },
      {
        title: "업무",
        value: "work",
      },
      {
        title: "여가",
        value: "leisure",
      },
      {
        title: "자기계발",
        value: "development",
      },
      {
        title: "기타",
        value: "etc",
      },
    ],
  };
  const onChange = (selectedList) => {
    setTagArray(selectedList);
    console.log(tagArray);
  };
  return (
    <Multiselect
      displayValue="title"
      onSelect={onChange}
      onRemove={onChange}
      options={items.categories}
      showCheckbox
      showArrow
      selectedValues={items.initial}
      placeholder=""
      style={{
        searchBox: {
          border: "1px solid teal",
          maxWidth: "350px",
          minWidth: "200px",
          height: "auto",
        },
      }}
    />
  );
};

export default Dropdown;
