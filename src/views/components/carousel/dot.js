import React from 'react';

const Dot = ({handlePick, color, id, selected}) => {
  const style = {
    backgroundColor: color,
  }

  let classes = ["carousel__dot"];

  if (selected)
    classes.push("carousel__dot--selected")

  return (
    <div className={classes.join(" ")} >
      <div style={style} id={id} onClick={handlePick}/>
    </div>
  );
};

export default Dot;
