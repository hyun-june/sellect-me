import './Modal.css'

const Modal = ({ title, children, onClose }) => {
    const handleOverlayClick = e => {
        if (e.target.classList.contains('modal-overlay')) {
            onClose()
        }
    }
    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-box">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="close-btn" onClick={onClose}>
                        X
                    </button>
                </div>
                <div className="modal-content">
                    <p>{children}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal
