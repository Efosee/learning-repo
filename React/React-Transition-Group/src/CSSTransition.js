import { useRef } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';

const duration = 300;

// Необходимо доьбавить в CSS-файл
const cssStyle = `
.modal {
opacity: 0;
visibility: hidden;
transition: all 300ms;
}
}
.modal-enter {
  opacity: 0;
}
.modal-enter-active {
  opacity: 1;
	visibility: visible;
  transition: all 300ms;
}

.modal-enter-done {
  opacity: 1;
	visibility: visible;
}

.modal-exit {
  opacity: 1;
}
.modal-exit-active {
  opacity: 0;
	visibility: hidden;
  transition: all 300ms;
}
`;

const CSSTransitionModal = (props) => {
	const nodeRef = useRef(null);

	return (
		<><style>{cssStyle}</style>
			<CSSTransition
				in={props.show}
				timeout={duration}
				nodeRef={nodeRef}
				unmountOnExit
				onEnter={() => props.setShowTrigger(false)} //Во время входа выполняет функцию
				onExited={() => props.setShowTrigger(true)} //Во время выхода выполняет функцию
				classNames="modal"
			>
				<div className="modal mt-5 d-block" ref={nodeRef}> {/*Важно добавить для элемента ref */}
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
				</div>
			</CSSTransition>
		</>)
};
export default CSSTransitionModal;