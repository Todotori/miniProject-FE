import {useState} from 'react';

const CategoryFilter = () => {


    const [isChecked, setIsChecked] = useState(false); // 체크 여부
    const [checkedItems, setCheckedItems] = useState(new Set()); // 체크된 요소


    const checkedItemHandler = (box, id, isChecked) => {
        if (isChecked) {
            checkedItems.add(id);
            setCheckedItems(id)
        }
    }

    return (
        <>
            <div className='category-set'>ㅎㅎ</div>
        </>
    );
};


