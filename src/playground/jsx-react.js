console.log("App.js is Running");

// JSX - JavaScript XMl
// const template =<p>This is JSX from App.js</p>

// /* // var template = React.createElement{

 
//  var template = React.createElement(
//      "p",
//      null,
//      "\"Does this change\""
//  ); 

const template = (
    <div> 
      <h1>Something New!</h1>
      <p>How are u?</p>
    </div>
   );

   const user = {
       name:"",
       age:"19",
       location:"Lahore"

   };
//    var userName = "Taha";
//    var userAge = 23;
//    var userLocation = "Islamabad";
         // CHALLENGE
         const app ={
            title:"Indecision App",
            subtitle:"Hello World",
            options:[]
        };

        const onFormSubmit =(e) => {
            e.preventDefault();
          //  console.log("Form submitted!");
          const option = e.target.elements.option.value;
        

        if(option){
            app.options.push(option);
            e.target.elements.option.value;
            renderForm();
            
        }
    };
        const remove = (g) =>{
           app.options = [];
           renderForm();
        };
          
        const onMakeDecision = () =>{
            const randomNum = Math.floor(Math.random() * app.options.length);
           // console.log(randomNum);'
           const option = app.options[randomNum];
           alert(option);
        };
    const approot = document.getElementById('app');

    const numbers = [20,25,500];

        const renderForm = () => {
            const temaplate = (
              <div>
                <h1>{app.title}</h1>
                {app.subtitle && <h3>{app.subtitle}</h3>}  
                <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
                <p>{app.options.length}</p>
                <button disabled={app.options.length ==0} onClick={onMakeDecision}>What should I do?</button>
                <button onClick={remove}>Remove All</button>
                {
                   // [<p key="1">a</p>,<p key="2">b</p>,<p key="3">c</p>]
                /*    numbers.map((num) => {
                   return <p key={num}> Number: {num}</p>;

                  })*/
                }
                     <ol>
                        {
                            app.options.map((opt)=>{
                                return <li key={opt}>{opt}</li>
                                // return <li key={opt}>{option}</li>
                                // return <li key={opt}>{option}</li>
                            })
                        }
                     </ol>
                     <form onSubmit={onFormSubmit}>
                         <input name="option" type="text"></input>
                         <button>Add Option</button>
                     </form>
                </div>
                );
                ReactDOM.render(temaplate, approot);
              };

              renderForm();

             
              

        //   const temaplate = (
        //     <div>
        //         <h1>{app.title}</h1>
        //          {app.subtitle && <h3>{app.subtitle}</h3>}  
        //          <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        //          <p>{app.options.length}</p>
        //          <ol>
        //              <li>Item one</li>
        //              <li>Item Two</li>
        //          </ol>
        //          <form onSubmit={onFormSubmit}>
        //             <input name="option" type="text"></input>
        //             <button>Add Option</button>
        //          </form>
        //     </div>
        // )
        
       
        
//   /* */     }

    //  }  
    //  function getAge(age){
    //      if(age >= 18){
    //          return <p>Age:{age}</p>
    //      }
    //      else{
    //          return undefined;
    //      }
    //  } 

//     const templatetwo = (
//        <div>
//            <h1>{user.name ? user.name : "Anonymous"}</h1>
//      { (user.age && user.age >= 18) && <p>Age : {user.age}</p> }
//           {/*getAge(user.age)*/}
//            {getLocation(user.location)}
//        </div>
//    );
         // NEw CHALLENGE

