import "./App.css";
import myPicture from "./IMG-20201110-WA0006.jpg";
import greeting from "./undraw_hello_re_3evm.svg";
import Menu from "./Menu";
import shoe from "./Shoe-Website.jpg";
import space from "./Space-Website.jpg";
import lego from "./Lego Data Analysis.jpg";
import Dimensions from "./Dimensions";
import web from "./web-skill.png";
import data from "./data-skill.png";
import hero from "./hero-dog.png";

function App() {
  let { width, height } = Dimensions();
  return (
    <div className="body">
      <div class="container">
        <div class="header">
          <div class="logo">Chibueze Onyekpere</div>
        </div>
        <section class="hero">
          <div class="hero-title">
            <h1>Software Engineer with a strong grip on the web</h1>
            <p>Hello there, together we can build a better web</p>
            <p>
              I have about 2 years of experience in the art of writing software
            </p>
            <div class="hero-social">
              <button class="hero-cta">
                <a
                  style={{ textDecoration: "none", color: "#ffffff" }}
                  href="mailto:djchibueze@gmail.com"
                >
                  Let's chat
                </a>
              </button>
            </div>
          </div>
          <div class="hero-image">
            <img src={hero} />
          </div>
        </section>
        <section class="about-me">
          <h1>
            A Little Bit <span>About Me!</span>
          </h1>
          <div class="about-info">
            <p>
              My name is Chibueze Onyekpere and I am a student and Software
              Engineer. My passion for computers began with video games since I
              was a child. This passion has now matured to bring me to a point
              where I'm a lover of all things technology and the web.
              <br />
              <br></br>
              At the moment, this journey has brought me to study Software
              Engineering while I also build a lot of personal projects along
              the way.
              <br />
              <br></br>
              Nice to meet you. Make yourself at home
            </p>

            <img class="about-image" src={myPicture} />
          </div>
        </section>
        <section class="experience">
          <div class="experience-title">
            <h2>
              My <span>Education</span>
            </h2>
          </div>
          <hr />
          <div class="experience-set">
            <div class="experience-item">
              <p class="font-thin">2020</p>
              <p>
                NIIT Certification &nbsp;<span class="font-thin">Abuja</span>
              </p>
              <p>Python Certification Program</p>
            </div>

            <div class="experience-item">
              <p class="font-thin">2014-2017</p>
              <p>
                Living Spring <span class="font-thin">Abuja</span>
              </p>
              <p>Junior Secondary School</p>
            </div>
            <div class="experience-item">
              <p class="font-thin">2017-2020</p>
              <p>
                Divine Mercy Secondary Shool{" "}
                <span class="font-thin">Abuja</span>
              </p>
              <p>Senior Secondary School</p>
            </div>
          </div>
          <div class="experience-set">
            <div class="experience-item">
              <p class="font-thin">2020-present</p>
              <p>
                Nile University <span class="font-thin">Abuja</span>
              </p>
              <p>University</p>
            </div>
          </div>
        </section>
        <section class="skillset">
          <div class="experience-title">
            <h2>
              My <span>Skillset</span>
            </h2>
          </div>
          <hr />
          <br />
          <div class="skill-card">
            <div class="card">
              <img class="card-image" src={web} />
              <p class="card-title">Web Development</p>
              <p class="card-info">
                I love building web sites and enhancing user experieces on the
                web
              </p>
            </div>
            <div class="card">
              <img class="card-image" src={data} />
              <p class="card-title">Data Analysis</p>
              <p class="card-info">
                Using tools like Excel and Pandas, I can gain valuable insights
                for your business or personal needs
              </p>
            </div>
          </div>
        </section>
        <section class="selected-work">
          <h1>
            My <span>Projects</span>
          </h1>
          <div class="selected-img">
            <p>
              <a href="https://funny-daffodil-a65986.netlify.app/">Shoe Site</a>
            </p>
            <img class="work-image" src={shoe} />
          </div>
          <div class="selected-img">
            <p>
              <a href="https://voluble-hotteok-586a2c.netlify.app">
                Space Tourism
              </a>
            </p>

            <img class="work-image" src={space} />
          </div>
          <div class="selected-img">
            <p>
              <a href="https://app.datacamp.com/workspace/w/21e2f585-5529-4e1e-8685-e183185dfb02">
                Lego Sales Analysis
              </a>
            </p>

            <img class="work-image" src={lego} />
          </div>
          <br />
        </section>
        <section class="contact">
          <div class="contact-info">
            <h1>
              Let's <span>connect</span>
            </h1>
            <p>
              Check me out on <a href="https://github.com/chibueze864">Github</a> and <a href="https://ng.linkedin.com/in/chibueze-onyekpere-30b128227">LinkedIn</a>
            </p>
            <br />
          </div>
        </section>
      </div>
      <footer>
        <p>
          © 2020 All Rights Reserved - Designed by Salman and Coded by Kunwadee
        </p>
      </footer>
    </div> 
  );
}

export default App;
