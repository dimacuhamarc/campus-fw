'use client';

import React from 'react';
import { Modal } from 'flowbite-react';
import { Button } from './Button';

type RenderElement<T> = {
    value: any;
    element: T;
};

type ModalFields<T> = {
    title: string;
    key: string;
    render?: (element: RenderElement<T>) => JSX.Element | string | null;
};

interface ModalProps<T> {
    openModal: boolean;
    onClose: () => void;
    onClick?: (e: any) => void;
    title?: string;
    haveBody?: boolean;
    modalFields: ModalFields<T>[];
    text?: string;
    buttonAction?: string;
}

export const ModalComponent: React.FC<ModalProps<any>> = ({
    openModal,
    onClose,
    onClick,
    title,
    haveBody = true,
    modalFields,
    text,
    buttonAction,
}) => {
    return (
        <Modal dismissible show={openModal} onClose={onClose}>
            {/* modal header */}
            <Modal.Header>{title}</Modal.Header>

            {/* modal body */}
            {haveBody && (
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500">
                            {text}
                        </p>

                        {modalFields?.map((field: any) => (
                            <div key={field.key}>
                                {field.render
                                ? field.render({ value: field, element: field })
                                : null}
                            </div>
                        ))}
                    </div>
                </Modal.Body>
            )}

            {/* modal footer */}
            <Modal.Footer className="flex items-center justify-end">
                {/* actions */}
                <Button label="Cancel" onClick={onClose} danger />
                <Button label={buttonAction} onClick={onClick} action />
            </Modal.Footer>
        </Modal>
    );
};