import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextContainer from './textContainer';

const List = (props) => {

  return (
    <div>
      <div className="container">
        {props.lists.map(p => <TextContainer text={p.text} idList={p.id} visible={p.visible} />)}</div>
    </div>
  )
}

export default List;