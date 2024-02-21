import React from 'react';
import './CourseSlider.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CourseSlider = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className="App">
        <h1>React Multi Carousel</h1>
        <Carousel responsive={responsive}>
            <div className='card'>
                <img 
                className='product--image'
                src="https://source.unsplash.com/random/200x200/?animal?1" 
                alt="" 
                />
                <h2>Cat</h2>
                <p className='price'>$20.99</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat ad cupiditate qui totam minus nesciunt deserunt quis voluptatum excepturi.</p>
                <p>
                    <button>Admission</button>
                </p>
            </div>

            <div className='card'>
                <img 
                className='product--image'
                src="https://source.unsplash.com/random/200x200/?animal?2" 
                alt="" 
                />
                <h2>Cat</h2>
                <p className='price'>$20.99</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat ad cupiditate qui totam minus nesciunt deserunt quis voluptatum excepturi.</p>
                <p>
                    <button>Admission</button>
                </p>
            </div>

            <div className='card'>
                <img 
                className='product--image'
                src="https://source.unsplash.com/random/200x200/?animal?3" 
                alt="" 
                />
                <h2>Cat</h2>
                <p className='price'>$20.99</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat ad cupiditate qui totam minus nesciunt deserunt quis voluptatum excepturi.</p>
                <p>
                    <button>Admission</button>
                </p>
            </div>

            <div className='card'>
                <img 
                className='product--image'
                src="https://source.unsplash.com/random/200x200/?animal?4" 
                alt="" 
                />
                <h2>Cat</h2>
                <p className='price'>$20.99</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat ad cupiditate qui totam minus nesciunt deserunt quis voluptatum excepturi.</p>
                <p>
                    <button>Admission</button>
                </p>
            </div>

            <div className='card'>
                <img 
                className='product--image'
                src="https://source.unsplash.com/random/200x200/?animal?5" 
                alt="" 
                />
                <h2>Cat</h2>
                <p className='price'>$20.99</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat ad cupiditate qui totam minus nesciunt deserunt quis voluptatum excepturi.</p>
                <p>
                    <button>Admission</button>
                </p>
            </div>

            <div className='card'>
                <img 
                className='product--image'
                src="https://source.unsplash.com/random/200x200/?animal?6" 
                alt="" 
                />
                <h2>Cat</h2>
                <p className='price'>$20.99</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat ad cupiditate qui totam minus nesciunt deserunt quis voluptatum excepturi.</p>
                <p>
                    <button>Admission</button>
                </p>
            </div>

            <div className='card'>
                <img 
                className='product--image'
                src="https://source.unsplash.com/random/200x200/?animal?7" 
                alt="" 
                />
                <h2>Cat</h2>
                <p className='price'>$20.99</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat ad cupiditate qui totam minus nesciunt deserunt quis voluptatum excepturi.</p>
                <p>
                    <button>Admission</button>
                </p>
            </div>

            <div className='card'>
                <img 
                className='product--image'
                src="https://source.unsplash.com/random/200x200/?animal?8" 
                alt="" 
                />
                <h2>Cat</h2>
                <p className='price'>$20.99</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat ad cupiditate qui totam minus nesciunt deserunt quis voluptatum excepturi.</p>
                <p>
                    <button>Admission</button>
                </p>
            </div>

            <div className='card'>
                <img 
                className='product--image'
                src="https://source.unsplash.com/random/200x200/?animal?9" 
                alt="" 
                />
                <h2>Cat</h2>
                <p className='price'>$20.99</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat ad cupiditate qui totam minus nesciunt deserunt quis voluptatum excepturi.</p>
                <p>
                    <button>Admission</button>
                </p>
            </div>

        </Carousel>
    </div>


  )
}

export default CourseSlider;