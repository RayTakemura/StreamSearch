import React from "react";
import { Carousel } from 'react-bootstrap';

const Hero = () => {

    return (
        <>
            <div className="border border-dark rounded">
                <Carousel fade>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100" 
                            src="https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" 
                            alt='First slide'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"  
                            src="https://images.unsplash.com/photo-1585314540237-13cb52fe9998?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" 
                            alt='Second slide'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-block w-100"  
                            src="https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                            alt='Second slide'/>
                    </Carousel.Item>
                </Carousel>
            </div>
            

            <h3 className="my-3 w-75">
                Find your favorite stream on any streaming service! 
            </h3>
        </>
        
    )
}

export default Hero;