console.log("app.js is running");

class Parent extends React.Component{
   
    render(){
        const title="Props Title";
        const subtitle="Props Subtitle";
        const option = ["Taha","Adnan","Haris"]
        return(
          <div>
           <Child title={title} subtitle ={subtitle} option={option}/>
          </div>
   );
 }
}
   
class Child extends React.Component{
    clickFunc(){
        alert("oops");
    }
    handleAddOption(e){
        e.preventDefault();
       const valueFetched= e.target.elements.valueFetched.value;

       if(valueFetched){
           alert(valueFetched);
       }

    }
    render(){
        return(
            <div>
                <h2>{this.props.subtitle}</h2> 
                {this.props.option.map((option)=>
                    <p key ={option}>{option}</p>
                )}  
                <button onClick ={this.clickFunc}>Click Me</button>
                <div>
                <form onSubmit={this.handleAddOption}>
                  <input name="valueFetched" type="text"></input>
                  <button>Add</button>
                </form>
                </div>
            </div>
            
    );
  }
}

ReactDOM.render(<Parent />,document.getElementById("app"));