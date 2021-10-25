import './App.css';
import react from 'react';
import { v4 as uuidv4 } from 'uuid';

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
  fontWeight: 'bold'
};

class GeneratorUUID extends react.Component{
  render(){
    const {uuid} = this.props;
    return(
      <div style = { styleComponents}>
        <p>{uuid}</p>
      </div>
    );
  }

}

function App() {
  return (
    <div>
         <GeneratorUUID uuid = {uuidv4()}/>
    </div>
  );
}

export default App;