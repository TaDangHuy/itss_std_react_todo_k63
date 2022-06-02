import React from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({addHandler}) {
  const [text, setText] = React.useState('');
 
  return (
    <div className="panel-block">
      <input
        class="input"
        type="text"
        placeholder="Todoを入力してください"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => {
            if (e.keyCode === 13) {
              addHandler(text);
              setText('');
            }
          }
        }
      />
    </div>
  );
}

export default Input;


