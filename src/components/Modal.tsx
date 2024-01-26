'use client';

import React, { ChangeEvent, useState } from 'react';
import { Modal, ToggleSwitch } from 'flowbite-react';
import { Button } from './Button';

interface ModalProps {
    openModal: boolean;
    onClose: () => void;
    onClick?: (e: any) => void;
    title?: string;
    haveBody?: boolean;
    buttonAction?: string;
    handleTextChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    handleCollegeChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleAuthorChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmitPost?: () => void;
    text?: string;
    maxLength?: number;
    isAnon?: boolean;
    setIsAnon?: (value: boolean) => void;
}

export const ModalComponent: React.FC<ModalProps> = ({
    openModal,
    onClose,
    onClick,
    title,
    haveBody = true,
    buttonAction,
    handleTextChange,
    handleCollegeChange,
    handleAuthorChange,
    onSubmitPost,
    text,
    maxLength,
    isAnon,
    setIsAnon,
}) => {
    return (
        <Modal dismissible show={openModal} onClose={onClose}>
            {/* modal header */}
            <Modal.Header>{title}</Modal.Header>

            {/* modal body */}
            {haveBody && (
                <Modal.Body>
                    <div className="space-y-6">
                        
                    </div>
                </Modal.Body>
            )}

            {/* modal footer */}
            <Modal.Footer className="flex items-center">
                {/* actions */}
                <Button label="Cancel" onClick={onClose} danger />
                <Button label={buttonAction} onClick={onClick} action />
            </Modal.Footer>
        </Modal>
    );
};