import React from 'react'
import ReactDOM from 'react-dom'
class TypeWriter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text:"I'm Heni Bhungalia",
        count:0,
        show:"",
      }
      this.update = this.update.bind(this);
    }
    
    componentDidMount() {
      this.timerID = setInterval(
        () => this.update(),
        100
      );
    }
    
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    
    
    update(){
      const counter = this.state.count;
      const letter = this.state.text.charAt(counter);
      const textlength = this.state.text.length;
      //let text += letter;
      console.log("counter : " + counter + " / letter : " + letter);
      
      if(counter <= textlength){
      this.setState({
        show: this.state.show + letter,
        count: this.state.count + 1,
      });
      }else{
        clearInterval(this.timerID);
      }
    }
  
    render() {
      return (
        <section className="typeWriteAbout">
          
          <p >{this.state.show}</p>
        </section>
      );
    }
  }
  
  
  export default TypeWriter;