import './App.css';
import react from 'react';

const posts = [
  { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id: 3, title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
]

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
  render(){
    const {title, intro} = this.props;
    return(
      <div style={styleComponents}>
        <h2>{title}</h2>
        <p style={styleComponents.paragraf}>{intro}</p>
      </div>
    );
  }

}

function App() {
  const checkIntro = (cos) =>{
    return(
      <>{`${cos.substring(0,25)} ...`}</>
    );
  }
  return (
    <div>
      {posts.map((elem) => (
         <BlogTile key={elem.id} title={elem.title} intro={checkIntro(elem.intro)}/>
      ))}
    </div>
  );
}

export default App;