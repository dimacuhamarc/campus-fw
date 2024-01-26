'use client';

import React, { useState } from 'react';
import { Button } from '@/components/Button';

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
        </div>
    )
}

export default Submit;