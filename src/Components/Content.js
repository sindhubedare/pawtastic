import React from 'react';

class Content extends React.Component{
   constructor(props){
       super(props);
       this.state={value: ''};

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit=this.handleSubmit.bind(this);
   }
     handleChange(event){
         alert('A name was submitted: '+this.state.value);
         event.preventDefault();
     }

     handleSubmit(event){
         alert('A name was submitted: '+ this.state.value);
         event.preventDefault();
     }
    render(){  
        return(
            // <React.Fragment>
            //      <div className="title"> 
            //   Name<input type='text' id='name'></input>
            //   <img src="" alt="camera"/>Upload Photo<br/>
            //   <input type='checkbox' id="toggle" className= 'checkbox'/>
            //   <label for='toggle' class='switch'></label>            </div>
            // </React.Fragment>
            <form onSubmit={this.handleSubmit}>
                 <label>
                     Name:
                     <br/>  <input style={{marginTop:'10px'}} type="text" value={this.state.value} onChange={this.handleChange} placeholder="Pet's Name"/>
                 </label>
                 <br/><br/>
                 <label>
                     Breed:
                     Gen
                     <br/><input style={{marginTop:'10px'}} type="text" placeholder="Pet's Breed" value={this.state.value} onChange={this.handleChange}/>
                 </label>
              
                 <label style={{marginLeft:'20px'}} >
                     Birthday:
                     <input type="text" placeholder="MM/DD/Y"Y value={this.state.value} onChange={this.handleChange}/>
                 </label>  
                 {/* &nbsp; */}
                 {/* <input type="Submit" value="Submit" /> */}
                 <br/>
                 <br/>
                 <label>
                    Gender
                    <br/><input style={{marginTop:'10px'}} type="text"/>
                 </label>
                 <label>
                   Spayed or Neutered
                   <br/><input style={{marginTop:'10px'}} type="text"/>
                 </label>
                 <label>
                  Weight   
                 </label>
            </form>
           
        );
    }

}

export default Content;