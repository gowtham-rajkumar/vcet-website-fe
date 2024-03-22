import './HomeTopStyles.css';
import TeacherImg from '../Images/header_bottom_photo.png'
const HomeTop = () =>{
    return(
    <section className='Total-div'>
        <div className="HomeTop">
            <div className='left-rigtht'>
            <div className="left-container">
            <h2 className='heading'>Education is the key to your success</h2>
            <p>Love exciting and new. Come aboard were expecting you. Love life's sweetest reward Let it flow it floats back to you. Texas tea. A man is born he's a man of means you knew.</p>
           <div className='button-div'>
            <a href="#" class="rm_btn">Learn more</a>
            {/* <a href="#" class="rm_btn">apply now</a> */}
            </div>
            </div>
            <div className="right-container">
                <div className="photo-Cotainer">
                    <div className="img">
                        <img src={TeacherImg} className='home-bottomImg' alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}
export default HomeTop;