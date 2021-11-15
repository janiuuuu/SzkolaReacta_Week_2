import './App.css';
import react from 'react';

const styleComponents = {
  backgroundColor:'#b2bec3',
  border:'#080a0a 1px solid',
  padding:10,
  fontSize:15,
  textAlign:'left',
  marginTop: '0.67em',
  marginBottom: '0.67em',
  marginLeft: 0,
  marginRight: 0,
  fontWeight: 'bold',
  paragraf:{
    backgroundColor:'#dfe6e9',
    border:'#080a0a 1px solid',
    padding:10,
    fontSize:10,
    textAlign:'justify',
    color: 'red',
    marginTop: 2,
    marginBottom: 3,
    marginLeft: 0,
    marginRight: 0,
    fontWeight: 'bold',

  }
};

class BlogTile extends react.Component{
  state = {
    second : 0
  }

  componentDidMount(){
    this.timer = setInterval(() =>{
      this.setState({second : increments(this.state.second)});}, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render(){
    const {second} = this.state;
    return(
      <div style={styleComponents}>
        <p>{second}</p>
      </div>
    );
  }
}

function increments(sec){
  sec ++;
  return sec;
}

function App() {
  return (
    <div>
      <BlogTile />
    </div>
  );
}

export default App;