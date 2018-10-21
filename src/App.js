import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImageUploader from 'react-images-upload';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './font-awesome.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/camera" component={Cam} />
          <Route path="/gallery" component={Gallery} />
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => (
  <div className="sepScr">
    <div className="optC">
         <Link to="/camera"><FontAwesome name='camera' size='2x' /> 
        Take a photo</Link>
    </div>
    <div  className="optG">
        <Link to="/gallery"><FontAwesome name='image' size='2x' />
        Import from gallery</Link>
    </div>
  </div>
);


class Cam extends React.Component {

  onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto');
  }

   render() {
      return (
        <div className="App">
          <Camera
            onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          />
        </div>
      )
   }
}


class Gallery extends React.Component {
   constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}


export default App;
