'use client';

import React, { useState } from 'react';
import { Button } from '@/components/Button';
import { ModalComponent } from '@/components/Modal';

const Submit = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    // submit post
    const onSubmitPost = async () => {
        console.log('hee hee')
    }

    return (
        <div>
            {/* button */}
            <Button
                label="Submit a Post!"
                onClick={() => setOpenModal(true)}
                none
            />

            {/* modal */}
            <ModalComponent
                openModal={openModal}
                onClose={() => setOpenModal(false)}
                onClick={() => { onSubmitPost(); }}
                title="Hit me with your best thought!"
                buttonAction="Submit"
            />
        </div>
    )
}

export default Submit;