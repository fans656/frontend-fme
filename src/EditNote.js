import React from 'react';

export default class EditNote extends React.Component {
  render() {
    const note = this.props.note;
    if (note.editable === false) {
      return (
        <div className="center">
          <h1>Not editable</h1>
        </div>
      );
    }
    return (
      <div className="edit-note" style={style}>
        <textarea
          style={textareaStyle}
          defaultValue={JSON.stringify(note, null, 2)}
        />
      </div>
    );
  }
}

const style = {
  display: 'flex',
  justifyContent: 'center',
  margin: '2em 0',
};

const textareaStyle = {
  width: '50rem',
  height: '35rem',
  fontFamily: 'Consolas',
  color: '#333',
};
