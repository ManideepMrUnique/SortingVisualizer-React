import Particles from 'react-particles-js';
import {NavLink} from "react-router-dom";
const Header=()=>{;
    return (
        <>
		<div className="Menu"> 
			<NavLink exact to="/">Home</NavLink>
			<NavLink exact to="/BubbleSort">BubbleSort</NavLink>
			<NavLink exact to="/SelectionSort">SelectionSort</NavLink>
		</div>
        <div className="particles">
        <Particles
           params={{
	    particles: {
	        number: {
	            value: 20
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
        </>
    );
}
export default Header;