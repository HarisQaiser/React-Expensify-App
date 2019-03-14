class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleDeleteOne = this.handleDeleteOne.bind(this);
        this.state = {
           options: []
        };
    }

    componentDidMount(){
       // console.log("Fetching Data");
       try{
        const json = localStorage.getItem("options");
        const dataFetched = JSON.parse(json);
        if(dataFetched){
        this.setState(()=> ({ options: dataFetched }))
        }
       } catch(e){
           // Do nothing all
       }
       
      
    }

     componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
        //console.log("Saving Data");
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options",json);
    }
}
    componentWillUnmount(){
        console.log("ComponentWillUnmount");
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
     }

    handleDeleteAll(){
       this.setState(() => ({ options:[] }));
    }

    handleDeleteOne(optionToRemove){
        this.setState((prevState) => ({
        options : prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleAddOptions(option){
        if(!option){
            return "Enter Valid value term";
        } else if(this.state.options.indexOf(option) > -1){
           return "This Option Already Exists";
        }
        
        this.setState((prevState)=> ({
            options: prevState.options.concat(option)
        }));
    }
    render(){
       // const title = "Indecision App";
       const subtitile = "Put your life in the hands of computer";
       // const options =["Thing one","Thing two","Thing three"];
        return(
          <div>
             <Header subtitile = {subtitile}/>
             <Action hasOptions={this.state.options.length > 0}
                      handlePick={this.handlePick}/>
             <Option  options ={this.state.options} 
                      handleDeleteAll={this.handleDeleteAll}
                      handleDeleteOne ={this.handleDeleteOne}/>
             
             <Options handleAddOptions ={this.handleAddOptions} />
          </div>
    );
  }
}

IndecisionApp.defaultProps ={
    option:[]
};

const Header = (props) =>{
    return(
        <div>
        <h1>{props.title}</h1>
        {props.subtitile && <h2>{props.subtitile}</h2>}
     </div>
    );
}

Header.defaultProps ={
    title: "Indesicion App"
};



const Action = (props) =>{
    return(
        <div>
        <button 
         onClick ={props.handlePick}
         disabled={!props.hasOptions}
         >
         What should I do?
         </button>
      </div>
    );
}

const Option = (props) =>{
    return(
            <div>
              <button onClick = {props.handleDeleteAll}>RemoveAll</button>
              {
                 props.options.length === 0 && 
                 <p>Please add an option to get started!</p>
              } 

              {
                   props.options.map((option) => 
                   <AddOption 
                   key = {option} 
                   optionText={option} 
                   handleDeleteOne = {props.handleDeleteOne}
                   />
                  )
                }
             </div> 
          );
        }

const AddOption = (props) => {
    return(
        <div>
              {props.optionText}
               <button 
               onClick ={() =>{
                   props.handleDeleteOne(props.optionText);
               }}
               >
               remove
               </button>

            </div>
        );
      }




ReactDOM.render(<IndecisionApp option={["Thing one","Thing two"]} />,document.getElementById('app'))

// const jsx =(
//     <div>
//         <Header />
//         <Action />
//         <Option />
//         <AddOption />
//     </div>
// ); 