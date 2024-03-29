import logo from '../assets/logo.png';
import catdk from '../assets/catalansdk.png';

const Front = (props) => {
  return (
    <div id="front-section" className='section front-section'>
      <div className='container-front'>
        <div className='div-title'>
          <h2 className='text-front'>
            {/* <a style={{fontFamily:'Comfortaa'}}>LEARN CATALAN</a> */}
            <p className='title'>LEARN CATALAN</p>
            {/* <br/> */}
            <p className='subtitle'>in Copenhagen</p>
            {/* <a style={{fontFamily:'Caveat'}}>in Copenhagen</a> */}
          </h2>
        </div>
        <div className="bubble">
          <div className="btn2contact">
            <a>Classes start on the 04-09-23</a>
            <a>Limited number of students</a>
            <a>Contact Us!</a>
            <a href='#contact-section'><span className="link2contact"></span></a>
          </div>
        </div>
        <div className="attribution">
          <span className="attribution-text">with the help of</span>
          <img className="attribution-logo" src={catdk} alt="logo" />
        </div>
      </div>
    </div>
    );
};

export default Front;