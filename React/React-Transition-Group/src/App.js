import { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import TransitionModal from './Transition.js';
import CSSTransitionModal from './CSSTransition.js';



function App() {
	const [showModal, setShowModal] = useState(false);
	const [showTrigger, setShowTrigger] = useState(true);

	return (
		<Container>
			<CSSTransitionModal onClose={setShowModal} show={showModal} setShowTrigger={setShowTrigger}/>
			{showTrigger && (<button
				type="button"
				className="btn btn-warning mt-5"
				onClick={() => setShowModal(true)}>Open Modal</button>)}
		</Container>
	);
}

export default App;
