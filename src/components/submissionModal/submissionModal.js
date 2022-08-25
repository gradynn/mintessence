import React from 'react';
import ReactDom from 'react-dom';
import './submissionModal.css';
import { FiX } from 'react-icons/fi';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

function SubmissionModal( {open, onClose, submission } ) {
    if (!open) return null;
    
    var uploadDate = new Date(submission.createdAt);

    return ReactDom.createPortal(
        <>
            <div id='modalOverlay' onClick={onClose} />
            <div id='modalBackground'>
                <div className='modalContainer'>
                    <button id='modalCloseButton' onClick={onClose}>
                        <FiX size={40}/>
                    </button>
                    <div id='modalBody'>
                        <img id='modalImage' src={submission.photo}/>
                        <p>Submitted by: <strong>{submission.uploaderName}</strong> </p>
                        <p> <strong>{uploadDate.toDateString()}</strong> </p>
                    </div>
                </div>
            </div>
        </>,
    document.getElementById('portal')
    );
}

export default SubmissionModal;