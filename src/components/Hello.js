import React from 'react';
import './Hello.css';

const Hello = (props) => {
  const nama = props.nama;
  return (
    <div className="hello">
      <p>Perkenalkan Nama saya <span className="nama">{nama}</span></p>
    </div>
  );
}

export default Hello;
