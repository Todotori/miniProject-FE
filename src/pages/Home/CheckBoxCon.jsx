import styled from 'styled-components';

const CheckBoxCon = ({ tags, onCheck, onUnCheck }) => {
  // 체크햇을때 나가게
  const onChecked = e => {
    if (e.target.checked === true) {
      onCheck(e.target.name);
    } else {
      onUnCheck(e.target.name);
    }
    // if (checked) {
    //   setChecked([...checked, item]);
    // } else if (!checked) {
    //   setChecked(checked.filter(el => el !== item));
    // }
  };

  return (
    <CheckBox>
      <StyledLabel>
        <StyledInput type='checkbox' name={tags} onChange={onChecked} checked />
        <StyledP>{tags}</StyledP>
      </StyledLabel>
    </CheckBox>
  );
};

const CheckBox = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #6d6158;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledP = styled.p`
  margin-left: 0.25rem;
`;

export default CheckBoxCon;
