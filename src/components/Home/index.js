// Write your code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="bottom-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="img-lg"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="img-sm"
      />
    </div>
  </>
)

export default Home
