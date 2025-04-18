import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/1st.jpg",
  "./cubeDrawings/2nd.jpg",
  "./cubeDrawings/3rd.jpg",
  "./cubeDrawings/pink.png",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];
const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];
document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Cadavre Exquis
        <div class="three-model">
        <a href="./cubeDrawings/collage 313.jpg" target="_blank">
          <img src="./cubeDrawings/collage 313.jpg" id="model1" alt="Cadavre Exquis Image" />
          </a>
        </div>

        <div id="images-description">
          <div id="images">
  <a href="./cubeDrawings/1st.jpg" target="_blank">
    <img src="./cubeDrawings/1st.jpg" alt="cube1" />
  </a>
  <a href="./cubeDrawings/2nd.jpg" target="_blank">
    <img src="./cubeDrawings/2nd.jpg" alt="cube1" />
  </a>
  <a href="./cubeDrawings/3rd.jpg" target="_blank">
    <img src="./cubeDrawings/3rd.jpg" alt="cube1" />
  </a>
  <a href="./cubeDrawings/pink.png" target="_blank">
    <img src="./cubeDrawings/pink.png" alt="cube1" />
  </a>

</div>
          <h4 id="description">Projet 1, Cadavre Exquis. A collage depicting a topic that inspires and relates to my own core philosophy, meaningful human experience. This piece was made using photoshop to construct the image and develop the visual tagging language to examine the scene.</h4>
        </div>
      </div>

    
     

     <section id="projects">
      <div id="project-row">
      Interoperability             
      
        <div class="three-model">
          <div id="model2"></div>
        </div>

        <div id="images-description">
          <div id="images">
  <a href="./A2 images/A2.1.jpg" target="_blank">
    <img src="./A2 images/A2.1.jpg" alt="cube1" />
  </a>
  <a href="./A2 images/A2.2.jpg" target="_blank">
    <img src="./A2 images/A2.2.jpg" alt="cube1" />
  </a>
  <a href="./A2 images/A2.3.jpg" target="_blank">
    <img src="./A2 images/A2.3.jpg" alt="cube1" />
  </a>
  <a href="./A2 images/A2.4.jpg" target="_blank">
    <img src="./A2 images/A2.4.jpg" alt="cube1" />
  </a>
</div>
          <h4 id="description">Project 2, an in-depth analysis of the transformation of objects from meshes, subd and nurbs. Each conversion was carefully studied and settings changed to produce variant outcomes. Three file formats were compared: OBJ, STL, FBX, all which were exported from Blender and dissected in Rhino.</h4>
        </div>
      </div>

  
      <section id="projects">
      <div id="project-row">
      Object Design             
      
        <div class="three-model">
          <div id="model3"></div>
        </div>

        <div id="images-description">
          <div id="images">
  <a href="./A3 images/website image 4.jpg" target="_blank">
    <img src="./A3 images/website image 4.jpg" alt="cube1" />
  </a>
  <a href="./A3 images/website image 1.jpg" target="_blank">
    <img src="./A3 images/website image 1.jpg" alt="cube1" />
  </a>
  <a href="./A3 images/website image 2.jpg" target="_blank">
    <img src="./A3 images/website image 2.jpg" alt="cube1" />
  </a>
  <a href="./A3 images/website image 3.jpg" target="_blank">
    <img src="./A3 images/website image 3.jpg" alt="cube1" />
  </a>
</div>
          <h4 id="description">Project 3, Metamorphosis. A planter, based on the exquisite corpse, that responds to human emotion. The physical manifestation of emotions was the driving concept for this object. A planter that could harbour a plant which responds to emotion. In a constant state of change and influx, tethered to someone’s psyche.
</h4>
        </div>
      </div>

    </section>

          <section id="projects">
      <div id="project-row">
      Place Making
      
           <div class="three-model">
        <a href="./A4 images/A4.3.jpg" target="_blank">
          <img src="./A4 images/A4.3.jpg" id="model1" alt="Flourencourt Image" />
          </a>
        </div>
      
    

        <div id="images-description">
          <div id="images">
  <a href="./A4 images/A4.1.jpg" target="_blank">
    <img src="./A4 images/A4.1.jpg" alt="cube1" />
  </a>
  <a href="./A4 images/A4.2.jpg" target="_blank">
    <img src="./A4 images/A4.2.jpg" alt="cube1" />
  </a>
  <a href="./A4 images/A4.3.jpg" target="_blank">
    <img src="./A4 images/A4.3.jpg" alt="cube1" />
  </a>
  <a href="./A4 images/A4.4.jpg" target="_blank">
    <img src="./A4 images/A4.4.jpg" alt="cube1" />
  </a>
</div>
          <h4 id="description">Project 4, Place making.Fostering a deep connection between people and the natural world is essential for a regenerative future. With this principle as our guiding parameter, we designed a pavilion that builds around nature, creating eleven openings. Its funnel-shaped form was intentionally crafted to surround and support the growth of trees, mirroring their natural upward expansion.
</h4>
        </div>
      </div>

    </section>

    <section id="projects">
      <div id="project-row">
      Game Engines
        <div class="three-model">
        <a href="./A5 images/A5.4.jpg" target="_blank">
          <img src="./A5 images/A5.4.jpg" id="model1" alt="Flourencourt Image" />
          </a>
        </div>

        <div id="images-description">
          <div id="images">
  <a href="./A5 images/A5.1.jpg" target="_blank">
    <img src="./A5 images/A5.1.jpg" alt="cube1" />
  </a>
  <a href="./A5 images/A5.2.jpg" target="_blank">
    <img src="./A5 images/A5.2.jpg" alt="cube1" />
  </a>
  <a href="./A5 images/A5.3.jpg target="_blank">
    <img src="./A5 images/A5.3.jpg" alt="cube1" />
  </a>
  <a href="./cubeDrawings/pink.png" target="_blank">
    <img src="./cubeDrawings/pink.png" alt="cube1" />
  </a>

</div>
          <h4 id="description">Projet 5, Flourencourt. Florencourt’s aesthetic draws heavily from my Exquisite Corpse Experience. The vivid oil painting, overflowing with roses, served as the primary inspiration for the terrain design. An open world to explore in the meta verse show casing my work from DSGN 313. Play on spatial: https://www.spatial.io/s/FlourenCourt-67feb89e7096556e2726a35c?share=1408967552678043122  </h4>
        </div>
      </div>


    

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project4/arbora.obj");
createThreeScene("#model2", "/3DModels/project2/squirtWEB.obj");
createThreeScene("#model3", "/3DModels/project3/meta2.obj");
createThreeScene("#model4", "/3DModels/project3/meta2.obj");

