import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Icon from '@material-ui/core/Icon';
import a2b from '../src/img/a2b100.png';



class App extends Component {

  constructor(props){
    super(props);
    // this.state = { profile_pix: [] };
    
    this.state = {
      first_name:'',
      last_name:'',
      email : '' ,
      phone_no : '',
      address:'',
      bus_plate_no:'',
      bus_product_name:'',
      //profile_pix:['.jpg','.png', '.gif','.jpeg','.svg']
      
      
      
    };
    //this.onDrop = this.onDrop.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

// onDrop(picture) {
//     this.setState({
//         profile_pix: this.state.profile_pix.concat(picture),
//     });
// }

handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
            
        });
}
handleSubmit(event){
        event.preventDefault();

        const user = {
        first_name:this.state.first_name, 
        last_name:this.state.last_name,
        phone_no :this.state.phone_no,
        email : this.state.email,
        address:this.state.address,
        bus_plate_no:this.state.bus_plate_no,
        bus_product_name:this.state.bus_product_name,
        //profile_pix:this.state.profile_pix
        
        
        };
        console.log(user);
  axios.post('http://Spaveline.com/a2b/register',user,{
})
//   .catch((error) => alert("User Already exists"))
//   .catch((message)=>alert("Successfully Registered"))
  
  .then(function (Response) {
     console.log(Response);
    })
  .catch(function (error) {
    console.log(error);
    
  });
        



}

  render() {
  
    return (
        
        <div >
              <div id="stripes">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span> 
              </div>
            <form className="form-horizontal" ref="form" onSubmit={this.handleSubmit} >
            <img src={a2b} alt="logo" /><h3 style={{  color:'rgb(255,255,255)' }}>Registration</h3>
            <div className="form-group">
                <div className="col-sm-2 icona">
                    <Icon  style={{ fontSize: 34, color:'rgb(55,76,199)' }}>assignment_ind</Icon>
                </div>
                <div className="col-sm-10">
                    <input type="first_name" name="first_name" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="FirstName" required />
                </div>
            </div>

            <div className="form-group">
                <div className="col-sm-2 icona">
                    <Icon  style={{ fontSize: 34, color:'rgb(55,76,199)' }}>person</Icon>
                </div>
                <div className="col-sm-10">
                    <input type="last_name" name="last_name" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="Last Name" required />
                </div>
            </div>
            
            
            <div className="form-group">
                <div className="col-sm-2 icona">
                    <Icon  style={{ fontSize: 34, color:'rgb(55,76,199)' }}>email</Icon>
                </div>
                <div className="col-sm-10">
                    <input type="email" name="email" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="Email" required />
                </div>
            </div>
                <div className="form-group">
                <div className="col-sm-2 icona">
                    <Icon  style={{ fontSize: 34, color:'rgb(55,76,199)'}}>phone</Icon>
                </div>
                <div className="col-sm-10">
                    <input type="phone_no" name="phone_no" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Phone Number" required/>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-2 icona">
                    <Icon  style={{ fontSize: 34, color:'rgb(55,76,199)' }}>place</Icon>
                </div>
                <div className="col-sm-10">
                    <input type="address" name="address" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="Address" required />
                </div>
            </div>
            
            <div className="form-group">
                <div className="col-sm-2 icona">
                    <Icon  style={{ fontSize: 34, color:'rgb(55,76,199)' }}>web_asset</Icon>
                </div>
                <div className="col-sm-10">
                    <input type="bus_plate_no" name="bus_plate_no" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="Bus Plate No" required />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-2 icona">
                    <Icon  style={{ fontSize: 34, color:'rgb(55,76,199)' }}>call_to_action</Icon>
                </div>
                <div className="col-sm-10">
                    <input type="bus_product_name" name="bus_product_name" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="Bus Product Name" required />
                </div>
            </div>
            
            {/* <div className="form-group">
                <div className="col-sm-10">
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose images'
                        onChange={this.onDrop}
                        imgExtension={['.jpg','.png', '.gif','.jpeg','.svg']}
                        maxFileSize={5242880}
                    />

                    </div>
            </div>
            */}
            <br/>
            <div className="form-group">    
                <div className="butt">
                
                    <button type="submit" className="but_sub">
                    <Icon  style={{ fontSize: 34, color:'rgb(55,76,199)' }}>send</Icon>
                    
                    </button>
                </div>
            </div>
        </form>
</div>
    );
  }
}

export default App;
