// Higher Order Component ->  a component (HOC) that renders another component.
// Reuse code
// Render hijacking
// prop manipulation
// Abstract code

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
   <div>
     <h1>Info</h1>
     <p>This Info is: {props.info}</p>
   </div>
);

const withAdminWarning = (WrappedComponent) => {
   return (props) =>(
     <div>
      { props.isAdmin && <p>This is private info! please dont share</p>}
       <WrappedComponent {...props}/>
     </div>
   );
};

const requireAuthentication = (Wrappedcomponent2) => {
   return (props) =>(
       <div>
         { props.isAuthenticated ? ( 
         <Wrappedcomponent2 {...props}/>
        ) : (
            <p>Please login to view Info.</p>
        )}
       </div>
   );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='These are the details'/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='These are the details'/>,document.getElementById('app'));

