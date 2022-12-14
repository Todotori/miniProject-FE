import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import MyTodo from './MyTodo';
import Dropdown from '../Layout/Dropdown';
import {__getMyTodos, __getTodos} from '../../redux/modules/todos';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Mytodos = ({title, mine}) => {
    const {todos, isLoading} = useSelector(state => state.todos);
    const [status, setStatus] = React.useState('WHOLE');
    const tags = useSelector(state => state.tags);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!mine) dispatch(__getTodos());
        else dispatch(__getMyTodos(status));
    }, [status]);

    const handleChange = e => {
        setStatus(e.target.value);
    };

    const filtering = arr => {
        if (arr.includes('전체보기')) return todos;
        return todos.filter(todo => {
            let isInclude = false;
            const tags = todo.tag.split(',');
            for (let i = 0; i < tags.length; i++) {
                if (arr.includes(tags[i])) {
                    isInclude = true;
                    break;
                }
            }
            return isInclude;
        });
    };

    const todoList = filtering(tags);
    return (
        <>
            <MyTodosHeader>
                <Title>{title}</Title>
                {mine ? (
                    <Box>
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label'>STATUS</InputLabel>
                            <Select labelId='demo-simple-select-label' value={status} label='STATUS'
                                    onChange={handleChange}>
                                <MenuItem value={'WHOLE'}>Whole</MenuItem>
                                <MenuItem value={'DONE'}>Done</MenuItem>
                                <MenuItem value={'TODO'}>TODO</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                ) : null}
                <Dropdown/>
            </MyTodosHeader>
            <Wrapper>
                <>
                    {todoList.map((todo, idx) => (
                        <MyTodo key={idx} todo={todo}/>
                    ))}
                </>
            </Wrapper>
        </>
    );
};

export default Mytodos;

const MyTodosHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px auto 50px auto;
`;

const Title = styled.div`
  font-size: calc(1.5rem + 1vw);
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 0px;
  row-gap: 40px;

  padding-bottom: 30px;
`;
