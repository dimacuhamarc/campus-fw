'use client';

import React, { useState } from 'react';
import { Button } from '@/components/Button';
import { ModalComponent } from '@/components/Modal';

const Submit = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <div>
            {/* button */}
            <Button
                label="Submit a Post!"
                onClick={() => setOpenModal(true)}
            />

            {/* modal */}
            <ModalComponent
                openModal={openModal}
                onClose={() => setOpenModal(false)}
                title="Hit me with your best thought!"
                buttonAction="Submit"
            />
        </div>
    )
}

export default Submit;