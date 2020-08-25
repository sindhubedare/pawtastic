import React from 'react';

class Content extends React.Component{
    state = {
        userName: "",
        passWord: "",
        age: "",
        gender: "",
        weight: "", //// selec
        ///try to add checkbox
      };
    
      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        });
      };
    
      render() {
        return (
          <form>
            <label>
              Username:
              <input
                type="text"
                name="userName"
                value={this.state.username}
                placeholder="Username"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Breed:
              <input
                type="text"
                name="passWord"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleChange}
              />
              <br />
            </label>
            <label>
              Age:
              <input
                type="text"
                name="age"
                value={this.state.age}
                placeholder="Age"
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Gender:
              <input
                type="radio"
                name="Gender"
                value="Female"
                onChange="this.handleChange"
              />
              Female
              <input
                type="radio"
                name="Gender"
                value="Male"
                onChange="this.handleChange"
              />
              Male
            </label>
            <br />
            <label>
                Weight:
              <input
               type="text"
                name="weight"
                value={this.state.weight}
                placeholder="Weight"
                onChange="this.handleChange"
              ></input>
            </label>
            <h1>
              {this.state.userName} {this.state.passWord}
            </h1>
          </form>
        );
      }

}
//    constructor(props){
//        super(props);
//        this.state={value: '',
//        breed: '',
//        birthday: '',
//        gender: '',
//        Neutered: '',

//     };

//        this.handleChange = this.handleChange.bind(this);
//     //    this.handleSubmit=this.handleSubmit.bind(this);
//    }
//      handleChange(event){
//         //  alert('A name was submitted: '+this.state.value);
//          event.preventDefault();
//      }

//     //  handleSubmit(event){
//     //      alert('A name was submitted: '+ this.state.value);
//     //      event.preventDefault();
//     //  }
//     render(){  
//         return(
//             // <React.Fragment>
//             //      <div className="title"> 
//             //   Name<input type='text' id='name'></input>
//             //   <img src="" alt="camera"/>Upload Photo<br/>
//             //   <input type='checkbox' id="toggle" className= 'checkbox'/>
//             //   <label for='toggle' class='switch'></label>            </div>
//             // </React.Fragment>
//             // <form onSubmit={this.handleSubmit}>
//             <form >
//                  <label>
//                      Name:
//                      <br/>  <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Pet's Name"/>
//                      {/* <input style={{marginTop:'10px'}} type="text" value={this.state.value} onChange={this.handleChange} placeholder="Pet's Name"/> */}
//                  </label>
//                  <br/><br/>
//                  <label>
//                      Breed:
//                      Gen
//                      <br/><input style={{marginTop:'10px'}} type="text" placeholder="Pet's Breed" value={this.state.breed} onChange={this.handleChange}/>
//                  </label>
              
//                  <label style={{marginLeft:'20px'}} >
//                      Birthday:
//                      <input type="text" placeholder="MM/DD/YY" value={this.state.birthday} onChange={this.handleChange}/>
//                  </label>  
//                  {/* &nbsp; */}
//                  {/* <input type="Submit" value="Submit" /> */}

//                  <br/>
//                  <label for= "toggle" class= "switch">
//                      <br/>
//                     Gender
//                     <input type="checkbox" id="toggle" class="checkbox" value="this.state.gender"/>
//                  </label>
//                  <br/>
              
//                  <label for= "toggle" class= "switch2">
//                      <br/>
//                    Spayed or Neutered <input type="checkbox" id="toggle" class="checkbox" value="this.state.Neutered"/>
//                  </label>
//                  <br/>
//                  <label>
//                      <br/>
//                   Weight   
//                   <input type="text" placeholder="Lbs" value={this.state.value} onChange={this.handleChange}/>
//                  </label>
//             </form>
           
//         );
//     }

// }

export default Content;