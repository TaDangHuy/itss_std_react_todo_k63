/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトすuseる
*/
import React, { useState } from 'react';

function TodoItem({item}) {
  const [grey, setGrey] = useState(false)
  return (
    <label className={!grey? "panel-block": "panel-block has-text-grey-light"}>
      <input type="checkbox" onClick={()=> setGrey(old => !old)}/>
      {item.text}
    </label>
  );
}

export default TodoItem;