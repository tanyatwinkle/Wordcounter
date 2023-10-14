import React from 'react';
import './App.css'; // Import the CSS file for styling

function WordCounter() {
  const [state, setState] = React.useState({ 
    charCount: 0
  });
  const handleKeyPress = (e) => {
    const count = e.target.value;
    setState({
      charCount: count.length
    });
  };
  return (
    <div>
  <p class="ul"><label for="w3review"><h1>Responsive Paragraph Word Counter</h1></label></p>
  <textarea placeholder='Type here' onChange={handleKeyPress} rows="5" cols="20" >    
    </textarea>
    <br/>
  <span>Word Count: {state.charCount}</span>
  <br/>
   </div>
  );
  };
function App() {
  return (
    <WordCounter />
  );
}

export default App;

