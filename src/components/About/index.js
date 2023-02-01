// Write your code here
import './index.css'
import Header from '../Header'

const About = () => (
  <>
    <Header />
    <div className="bottom-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="img-lg"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="img-sm"
      />
    </div>
  </>
)

export default About
