import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Container } from './App.styled'

export default class App extends Component {
  state = {
    query: '',
  };

  handleSubmitSearchbar = query => {
    this.setState({ query });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmitSearchbar} />
        <ImageGallery query={this.state.query} />
        <ToastContainer />
      </Container>
    );
  }
}