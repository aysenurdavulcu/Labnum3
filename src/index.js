import React from 'react';
import ReactDOM from 'react-dom';
import BoardSwitcher from './BoardSwitcher';
import './index.css';

ReactDOM.render(
  <BoardSwitcher numBoards={20} />,
  document.getElementById('root')
);