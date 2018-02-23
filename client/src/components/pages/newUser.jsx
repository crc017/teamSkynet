import React from 'react';
import Router from 'react-router';
import {Panel, Input, Button, Jumbotron, Modal} from 'react-bootstrap';
import { History } from 'history';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $ from "jQuery";

var NewUser = React.createClass({
    
  componentDidMount: function(){
    console.log($("#image"))
  },
  render: function() {
    return (
      <div className="login-page ng-scope ui-view">  
        <h2>Your Personal Info</h2> 
        <form role="form" onSubmit={this.NewLogin} className="ng-pristine ng-valid"> 
        <div className="form-content"> 
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label" id="fName">First Name</label>
               <div className="col-sm-3">
                <input id="firstName" type="text" className="form-control input-md formin" placeholder="John" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label" id="lName">Last Name</label>
                <div className="col-sm-3">
              <input id="lastName" type="text" className="form-control input-md formin" placeholder="Smith" /> 
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label" id="birth">Birth Date</label>
               <div className="col-sm-3">
                <input id="birthdate" type="date" className="form-control input-md formin" placeholder="12/24/1932" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label radio" id="gen">Gender</label>
                <div className="col-sm-3">
                  <select className="form-control formin" id="sel1">
                    <option>Male</option>
                    <option>Female</option>
                  </select> 
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Username</label>
               <div className="col-sm-3">
                <input id="userName" type="text" className="form-control input-md formin" placeholder="JSmith" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Password</label>
                <div className="col-sm-3">
              <input id="newPassword" type="text" className="form-control input-md formin" placeholder="12345" /> 
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Email</label>
               <div className="col-sm-3">
                <input  type="email" className="form-control input-md formin" id="email" placeholder="JSmith@Gmail.com" />
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Height</label>
                <div className="col-sm-1">
              <label><input type="number" className="form-control input-md formin" min="1" max="12" placeholder="5" id="feet"/>Feet</label>
              </div>
              <div className="col-sm-1">
              <label><input type="number" className="form-control input-md formin" max="11" placeholder="9" id="inches"/>Inches</label>  
            </div>
          </div>
          <div className="form-group row"> 
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Weight</label>
               <div className="col-sm-3">
                <input type="number" className="form-control input-md formin"  placeholder="186" id="weight"/>
                  </div> 
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label" >Goal Weight</label>
                <div className="col-sm-3">
              <input type="number" className="form-control input-md formin"  placeholder="162" id="mygoal"/> 
            </div>
          </div>
          {/* <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Profile Picture:</label>
          <input name="file" type="file" className="form-control-file" id="file" /> */}
        </div> 
        <button onClick={this.handleNewLogin} type="submit" className="btn btn-white btn-outline btn-lg btn-rounded">Accept</button><br></br>  
      </form> 
        
      </div>
      
      
    );
  },
  handleNewLogin: function(e){
    

    e.preventDefault();
    $("#createError").html('');
    //console.log("File is: " + $("#file")[0].files[0]);
    //console.log("File", file, $('#file'));
    //console.log("DataURL: " + $('#file')[0].files[0].toDataURL());
    

  //   var base64String;

  //   function getDataUri(url, callback) {
  //     var image = new Image();
  
  //     image.onload = function () {
  //         var canvas = document.createElement('canvas');
  //         canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
  //         canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size
  
  //         canvas.getContext('2d').drawImage(this, 0, 0);
  
  //         // Get raw image data
  //         callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));
  
  //         // ... or get as Data URI
  //         callback(canvas.toDataURL('image/png'));
  //     };
  
  //     image.src = url;
  // }
//   getDataUri($("#file")[0].files[0], function(dataUri) {
//     // Do whatever you'd like with the Data URI!
    
//     return dataUri;
// });
//console.log("Data URI: " + getDataUri($("#file")[0]));

  
    // function imageToBase64(img)
    // {
    //   var f = img.files[0]; // FileList object    
    //   var reader = new FileReader();  
    //   // Closure to capture the file information.    
    //   reader.onload = (function (theFile)  
    //   {  
        
    //       return function (e)  
    //       {  
              
    //           var binaryData = e.target.result;  
    //           //Converting Binary Data to base 64    
    //           base64String = window.btoa(binaryData);  
    //           //showing file converted to base64   
    //           console.log('Binary String: ' + base64String); 
    //           // document.getElementById('base64')  
    //           //     .value = base64String;  
    //           //$("#file")
    //           // alert('File converted to base64 successfuly!\nCheck in Textarea');  
    //           return base64String;
    //       };  
    //   })

    // console.log('Binary String: ' + base64String); 
    //   (f);  
    //   // Read in the image file as a data URL.    
    //   console.log("Reader reads: " + reader.readAsBinaryString(f));  
  
        
    // };
    //  console.log("imageToBase64: " + imageToBase64($("#file")[0]));






    function validateForm() {
        var isValid = true;
        $('.form-control').each(function() {
          if ( $(this).val() === '' ){
            isValid = false;
          }
        });
      return isValid;
    };
    
  
    if(validateForm()){
      
      var reader = new FileReader();
      //console.log($("#file")[0]);
      //var file = reader.readAsDataURL($('#file')[0].files[0]);
      var fd = new FormData();
      //fd.append('file', file,);
      //console.log("File", file, $('#file'));
      var heightInches = (parseInt($("#feet").val().trim())*12 + parseInt($("#inches").val().trim()))
      // console.log("Consoled: " + fd.get('file'));
      // var userimage = $("#userName").val().trim();


      // function imageToBase64(img)
      // {
      //     var canvas, ctx, dataURL, base64;
      //     canvas = document.createElement("canvas");
      //     ctx = canvas.getContext("2d");
      //     canvas.width = img.width;
      //     canvas.height = img.height;
      //     ctx.drawImage(img, 0, 0);
      //     dataURL = canvas.toDataURL("image/png");
      //     base64 = dataURL.replace(/^data:image\/png;base64,/, "");
      //     return base64;
      // };
      
      //console.log("imageToBase64: " + imageToBase64($("#file")));
            $.ajax({
                method: "POST",
                url: "/api/users",
                data: {
                  firstname: $("#firstName").val().trim(),
                  lastname: $("#lastName").val().trim(),
                  gender: $("#sel1").val().trim(),
                  birthdate: $("#birthdate").val().trim(),
                  email: $("#email").val().trim(),
                  username: $("#userName").val().trim(),
                  password: $("#newPassword").val().trim(),
                  height: heightInches.toString(),
                  weight: $("#weight").val().trim(),
                  mygoal: $("#mygoal").val().trim(),
                  //image: imageToBase64($("#file"))
                },
            }).done(function (data) {

               
                if(!data.success){
                $("#createError").html(data.message);
                } else{
                    $("#createError").html(data.message);

                    window.location.href = '/';
                    //this.props.history.pushState(null, '/dashboard/overview');
                };
            });

    } else{
        $("#createError").html("Please complete all fields of form.");
    };

   
    return false;

  }
  }
);
export default NewUser;