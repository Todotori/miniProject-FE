import React from 'react';
import Layout from '../component/Layout/Layout';
import { BsPencilSquare } from 'react-icons/bs';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdTag } from 'react-icons/md';
import './styles/home.css';

const Home = () => {
  return (
    <div className='wrap'>
      {/* ANCHOR : 01. nav */}
      <nav>바보</nav>

      {/* ANCHOR : 02. mainWRap */}
      <div className='main_wrap'>
        {/* 02-1. Header */}
        <header className='todo_header'>
          <h1>어서오세요, 김도토리님</h1>
          <span>할 일이 30개 남았어요</span>
        </header>

        {/* SECTION : 02-2. wrapTodo */}
        <section className='wrap_todo'>

          <div className='add_todo'>
            <BsPencilSquare />
            <span>할 일을 추가하세요</span>
          </div>

          {/* ANCHOR : 02-2[1] : 드롭다운 */}
          <select className='tag_dropdown' action='dropdown'>
            <option>
              <input type='checkbox' id='all' name='all' />
              <label for='all'>전체보기</label>
            </option>
            <option>
              <input type='checkbox' id='tag_01' name='tag_01' />
              <label for='tag_01'>상수리나무_디자인팀</label>
            </option>
            <option>
              <input type='checkbox' id='tag_02' name='tag_02' />
              <label for='tag_02'>프론트엔드 스터디</label>
            </option>
            <option>
              <input type='checkbox' id='tag_03' name='tag_03' />
              <label for='tag_03'>우리가좍</label>
            </option>
          </select>
          
        </section>

        {/* ANCHOR : 02-3 : todoList */}
        <div className='todo_list'>

          <div class='todo_desc'>
            <BsCheckCircleFill />
            <div className='todo_title'>
              <h3>밥먹기</h3>
              <span>소고기 궈먹어야지~</span>
            </div>
          </div>

          <div className='todo_tag'>
            <MdTag />
            <span>상수리나무_디자인팀</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
