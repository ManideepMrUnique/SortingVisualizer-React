import Particles from 'react-particles-js';
import {NavLink} from "react-router-dom";
import Typed from "react-typed";
const Introduction=()=>{;
    return (
        <>
        <div className="particles">
        <Particles
           params={{
	    particles: {
	        number: {
	            value: 25
	        },
	        size: {
	            value: 3
	        }
	    },
	    interactivity: {
	        events: {
	            onhover: {
	                enable: true,
	                mode: "repulse"
	            }
	        }
	    }
	    }}/>
        </div>
		<div className="Menu"> 
			<NavLink exact to="/">Home</NavLink>
			<NavLink exact to="/BubbleSort">BubbleSort</NavLink>
			<NavLink exact to="/SelectionSort">SelectionSort</NavLink>
		</div>
		<div className="Introduction">
				<Typed
                    className="NotTyped-text"
                    strings={["Hello!","My","Name","Is","Manideep"]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                />
		</div>
        <h1 className="head">Algorithm Visualizer</h1>
        </>
    );
}
export default Introduction;