import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

// Configurer l'élément parent pour l'accessibilité
Modal.setAppElement('#root');

const LazyModal = React.lazy(() => import('react-modal'));

export default function CustomModal({ isOpen, onRequestClose, children, className, overlayClassName, ...props }) {
    return (
        <Suspense fallback={<div>Loading modal...</div>}>
            <LazyModal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                className={className}
                overlayClassName={overlayClassName}
                parentSelector={() => document.getElementById('modal-root')} // Défaut : insérer dans le `<body>`
                {...props}
            >
                {children}
            </LazyModal>
        </Suspense>
    );
}


// Validation des props
CustomModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    overlayClassName: PropTypes.string,
};
