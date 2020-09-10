import React from 'react';
import Dot from "./dot";

const ModelPicker = ({models, handlePick, selectedModel}) => {
  return (
    <div className="carousel__model-picker">
      {models.map((model, index) => {
        return <Dot id={index}
                    key={index}
                    handlePick={handlePick}
                    color={model.color}
                    selected={selectedModel == index}
        />
      })}
    </div>
  );
};

export default ModelPicker;
