import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div>
        <h1>About PFD</h1>
        <div class="grid-squares">
          <div class="grid_item">
            <img
              src="https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg"
              alt="avatar"
              width="150"
              height="150"
            ></img>
            <h3>CEO</h3>
            <h4>Andy Dong</h4>
            <p>4th Year CSE Student at OSU</p>
            <p class="text">
              Andy is seasoned technology executive, with vast amounts of
              knowledge in multiple areas including business and programming. He
              has made it his life goal to share the joy of fruits globally
              around the world.{" "}
            </p>
          </div>
          <div class="grid_item">
            <img
              src="https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg"
              alt="avatar"
              width="150"
              height="150"
            ></img>
            <h3>CTO</h3>
            <h4>Jason</h4>
            <p>Grad Student at OSU</p>
            <p class="text">
              Jason is a passionate fruit lover. He always want to provide solutions for those who yearn for premium fruit but being too lazy to purchase them on scene. He has a lot of knowledge on python and he believes that Java is the best language in the world. 
            </p>
          </div>
          <div class="grid_item">
            <img
              src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
              alt="avatar"
              width="150"
              height="150"
            ></img>
            <h3>VP</h3>
            <h4>JJ</h4>
            <p>4th Year CSE Student at OSU</p>
            <p class="text">
              As son of the CEO, JJ has worked tirelessly to become the youngest
              Vice President in company history. He is a former CIA operative
              and uses his expertise in logistics to oversee supply chains and
              ensure a steady stream of fresh fruit is available for our
              customers.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
