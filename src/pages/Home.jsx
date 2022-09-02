import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Layout from '../component/Layout/Layout';
import { BsPencilSquare } from 'react-icons/bs';
import { BsCheckCircleFill } from 'react-icons/bs';

const Home = () => {
  return (
    <div className='wrap'>
      <nav></nav>

      {/* ANCHOR : Header */}
      <header>
        <h1>어서오세요, 김도토리님</h1>
        <h3>해야할일이 30개 남았어요</h3>
      </header>

      {/* SECTION : 투두리스트 전체 */}
      <section className='wrap_todo'>
        <div className='add_todo'>
          <BsPencilSquare />
          <span>할 일을 추가하세요</span>
        </div>
        {/* ANCHOR : 드롭다운 */}
        <select action='dropdown'>
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

      {/* ANCHOR : 투두 목록 */}
      <div className='todo_list'>
        
        <div className='todo_title'>
          <BsCheckCircleFill />
          <h3>밥먹기</h3>
          <span>소고기 궈먹어야지~</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
