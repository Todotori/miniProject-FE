import Multiselect from "multiselect-react-dropdown";
import React from "react";
import {useDispatch} from "react-redux";
import {addTag, deleteTag} from "../../redux/modules/tagSlice";

const Dropdown = () => {
  const dispatch = useDispatch();

  const items = {
    initial: [
      {
        title: "전체보기",
        value: "all",
      },
    ],
    categories: [
      {
        title: "전체보기",
        value: "all",
      },
      {
        title: "일상",
        value: "daily",
      },
      {
        title: "취미",
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
  const onSelect = (_, selectedItem) => {
    dispatch(addTag(selectedItem.title));
  };
  const onRemove = (_, selectedItem) => {
    dispatch(deleteTag(selectedItem.title));
  };
  return (
    <Multiselect
      displayValue="title"
      onSelect={onSelect}
      onRemove={onRemove}
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
