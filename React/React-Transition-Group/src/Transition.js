import { useRef } from 'react';
import './App.css';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
	transition: `all ${duration}ms ease-in-out`,
	opasity: 0,
	visibility: "hidden"
};

const transitionStyles = {
	entering: { opacity: 1, visibility: "visible" },
	entered: { opacity: 1, visibility: "visible" },
	exiting: { opacity: 0, visibility: "hidden" },
	exited: { opacity: 0, visibility: "hidden" },
};

const TransitionModal = (props) => {
	const nodeRef = useRef(null);

	return (
		<Transition in={props.show} timeout={duration} nodeRef={nodeRef} // unmountOnExit - убирает из DOM после выхода
			onEnter={() => props.setShowTrigger(false)} //Во время входа выполняет функцию
			onExited={() => props.setShowTrigger(true)} //Во время выхода выполняет функцию
		>
			{state => (
				<div style={{
					...defaultStyle,
					...transitionStyles[state]
				}}
					className="modal mt-5 d-block">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Typical modal window</h5>
								<button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<p>Modal body content</p>
							</div>
							<div className="modal-footer">
								<button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
								<button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>)}
		</Transition>
	)
};
export default TransitionModal;