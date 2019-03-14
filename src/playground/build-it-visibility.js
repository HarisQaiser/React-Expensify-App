class VisibilityToggle extends React.Component{
       constructor(props){
        super(props);
        this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
        this.state={
            visibility : false
        }


    }
    handleToggleVisibilty(){
      this.setState((prevState)=>{
          return{
              visibility : !prevState.visibility
          };
      })
    }
    render(){
        return(
            <div>
              <h1>Visibilty Toggle</h1>
              <button onClick={this.handleToggleVisibilty}>
                  {this.state.visibility ? "Hide options" : "Show Options"}</button>
               {this.state.visibility &&(
                   <div>
                     <p>Hello There! How are You?</p >
                   </div>
               )}   
            </div>
        ); 
    }
}



// let visibility = false;



// const showFunc = () => {
//     visibility = !visibility;
//     render();

// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showFunc}>{visibility ? "Hide options" : "show details"}</button>

//             {(visibility ? <p>Hello There! How Are You? </p> : null)}
//        </div>
//     );
//    }
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
//render();

