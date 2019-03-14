class Counter extends React.Component{
    constructor(props){
       super(props);
       this.handleAddOne = this.handleAddOne.bind(this);
       this.handleMinusOne = this.handleMinusOne.bind(this);
       this.handleReset = this.handleReset.bind(this);
       this.state ={
           count: 0
       };
    }
    componentDidMount(){
      const stringCount = localStorage.getItem("count");
      const count = parseInt(stringCount,10);

      if (!isNaN(count)) {
      this.setState(() => ({  count  }));
      }
    }
     componentDidUpdate(prevProps,prevState){
      if (prevState.count !== this.state.count.length){
       localStorage.setItem("count",this.state.count)
      }
    }
    handleAddOne(){
       // console.log("handleAddOne");
       this.setState((prevState)=>{
           return {
               count : prevState.count + 1
           };
       });
  }
    handleMinusOne(){
       // console.log("handleMinusOne");
       this.setState((nextState)=>{
           return{
               count : nextState.count -1
           }
       });

    }
    handleReset(){
        //console.log("handleReset");
        this.setState(() => {
            return{
                count: 0
            }
        });
    }
    render(){
        return(
            <div>
              <h1>Count: {this.state.count}</h1>
              <button onClick ={this.handleAddOne}>+1</button>
              <button onClick ={this.handleMinusOne}>-1</button> 
              <button onClick ={this.handleReset}>Reset</button>         
            </div>
        );n
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter count={0}/>,document.getElementById("app"));  
console.log("App.js is running");



// let count =0;
// //const someId ="myIdHere";
// const addOne =()=>{
//     count++;
//     console.log("addOne",count);
//     renderCountApp();
    
// }

// const minusOne = ()=>{
//     count--;
//     console.log("minusOne",count);
//     renderCountApp()
// }

// const reset = ()=>{
//     count=0;
//     console.log("reset");
//     renderCountApp();
// }


//    // Challenge Button


// // console.log(temaplateThree);

// const renderCountApp = () =>{
 
// const temaplateThree =(
//     <div>
//          <h1>Count: {count} </h1>
//          <button onClick={addOne}>+1</button>
//          <button onClick={minusOne}>-1</button>
//          <button onClick={reset}>reset</button>
//     </div> 
// );

// }

// renderCountApp();


