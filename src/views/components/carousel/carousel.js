import React, {Component} from 'react';
import ModelPicker from "./modelPicker";

class Carousel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedModel: 0,
      models: this.props.models
    }
  }

  handlePick = (model) => {
    this.setState({
      selectedModel: model.target.id
    })
  }

  render() {
    const {selectedModel, models} = this.state;

    return (
      <div className="carousel">
        <div className="carousel__image-area">
          <img className="carousel__image" src={models[selectedModel].photo} alt="furniture photo"/>
        </div>
          <ModelPicker selectedModel={selectedModel} models={models} handlePick={this.handlePick}/>
      </div>
    );
  }
}

export default Carousel;
