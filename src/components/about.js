import React from "react";
import './about.css'
 
const About = () => {
  
  return (
    <>
      <h1>
        About PFD
      </h1>
      <div class="grid-squares">
        <div class="grid_item">
          <img src = "https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg" alt="avatar" width="150" height ="150"></img>
          <h3>Title</h3>
          <h4>Andy Dong</h4>
          <p>Description</p>
        </div>
        <div class="grid_item">
          <img src = "https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg" alt="avatar" width="150" height ="150"></img>
          <h3>Title</h3>
          <h4>Jason</h4>
          <p>Description</p>
        </div>  
        <div class="grid_item">
          <img src = "https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg" alt="avatar" width="150" height ="150"></img>
          <h3>Title</h3>
          <h4>JJ</h4>
          <p>Description</p>
        </div>
      </div>
    </>
  );
};
  
export default About;