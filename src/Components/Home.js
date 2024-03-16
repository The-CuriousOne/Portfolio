import React from "react";
import "./Home.css";

const FILE_ID = '1hsRrDSGVA7lSNgjKdhXITFn4gGPQ8QRb';

const Home = () => {

  const directDownloadLink = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

  return (
    <div className="home">
      <div className="i-name">
        <div className="i-name-text">
          <h1>
            Hi! I Am <div className="i-name-color">Abhigyan Kashyap</div>
          </h1>
          <p>
            Greetings,
            <br />
            <br />
            I am a dedicated Software and Web Developer, currently pursuing my
            third year of studies in Computer Science and Technology at SRM
            Institute of Science and Technology. With a fervent passion for
            expanding my knowledge and refining my tech stack, I am actively
            seeking opportunities to apply my skills and contribute to
            innovative projects. Currently in search of internship
            opportunities, I am eager to collaborate and contribute positively
            to your organization. For inquiries or to discuss potential
            collaborations, please feel free to contact me.
            <br />
            <br />
            Thank you for visiting my portfolio website.
          </p>
          <br />
          <br />
          <div className="i-icons">
            <a
              href="https://github.com/The-CuriousOne"
              className="social_icons"
              id="github_icon"
            >
              <img
                src={process.env.PUBLIC_URL + "/github.png"}
                alt="GitHub Icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/abhigyan-kashyap-314014178/"
              className="social_icons"
              id="linkedin_icon"
            >
              <img
                src={process.env.PUBLIC_URL + "/linkedin.png"}
                alt="LinkedIn Icon"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="my_services">
        <div className="services_text">
          <h1>My Skills</h1>
          <br />
          <p>
            I am a Computer Science Engineering student at SRM with Expertise in
            Full Stack Development
          </p>
          <br />
          <br />
          <a href={directDownloadLink} download="file.pdf">
            <button className="btn">Download Resume</button>
          </a>
        </div>

        <div className="services_info">
          <div className="cardholder">
            <div className="card" id="card1">
              <div className="card_text">
                <h3>Development</h3>
                <ul>
                  <li>React.Js</li>
                  <li>Next.Js</li>
                  <li>Node.Js</li>
                  <li>Express.Js</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div className="bg"></div>
              <div className="blob"></div>
            </div>
            <div className="card" id="card2">
              <div className="card_text">
                <h3>Programming</h3>
                <ul>
                  <li>Java</li>
                  <li>Python</li>
                  <li>C++</li>
                  <li>C</li>
                </ul>
              </div>
              <div className="bg"></div>
              <div className="blob"></div>
            </div>
          </div>
          <div className="card" id="card3">
            <div className="card_text">
              <h3>Database</h3>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="bg"></div>
            <div className="blob"></div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="contact_text">
          <h1>
            If you wanna reach me or hire me
          </h1>
        </div>

        <div className="form-container">
          <form className="form">
            <div className="form-group">
              <label htmlFor="email">Name</label>
              <input required name="email" id="email" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input required name="email" id="email" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">Any message you have for me?</label>
              <textarea
                required
                cols="50"
                rows="10"
                id="textarea"
                name="textarea"
                defaultValue=""
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
