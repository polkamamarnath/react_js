import React from 'react'

      // function btnClicked() {
      //   console.log('Button Clicked');
      // }

      // function inputChanging(val){
      //   console.log(val); 
      // }
      //  <button onClick={function(){
      //   console.log("Button Clicked");
      // }}>Click me</button>
      // <input type="text" placeholder='Enter ' onChange={
      //   function(elem){
      //     inputChanging(elem.target.value)
          
      //   }
      // }/> 
      // <div className="box" onMouseMove={
      //   function(elem){
      //     console.log(elem.pageX);
      //     console.log(elem.clientX);
      //   }
      // }></div>  
      function mouseScrolling(val){
        console.log(val);
        
      }    

const App = () => {
  return (
    <div onWheel={function(elem){
        mouseScrolling(elem.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App
