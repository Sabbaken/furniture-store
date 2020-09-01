import React, {Component} from 'react';
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';
import SearchModal from "./searchModal";

class Search extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({open: true});
  };

  onCloseModal = () => {
    this.setState({open: false});
  };

  render() {
    const {open} = this.state;
    return (
      <div>
        <img className="navbar__button" src="/icons/search.svg" alt="search" onClick={this.onOpenModal}/>
        <Modal open={open}
               onClose={this.onCloseModal}
               classNames={{overlay: "search-modal__overlay", modal: "search-modal__card"}}
        >
          <SearchModal/>
        </Modal>
      </div>
    );
  }
}

export default Search;
