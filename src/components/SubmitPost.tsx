'use client'

import { Modal } from 'flowbite-react';
import { useState } from 'react';

export default function SubmitPost() {
  const [openModal, setOpenModal] = useState(false);
  return (
    
    // <div className="w-full container mx-auto p-4">
    //   <h1 className="text-3xl font-bold mb-4">Hit me with your best thought!</h1>
    //   <textarea
    //     className="w-full p-2 border border-gray-300 rounded"
    //     placeholder="Share your thoughts..."
    //   />
    //   <button
    //     className="bg-pink-700 text-white px-4 py-2 rounded mt-2"
    //   >
    //     Post
    //   </button>
    // </div>
    <>
      <button onClick={() => setOpenModal(true)} className="bg-pink-700 text-white px-4 py-2 rounded mt-2">Submit a Post!</button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setOpenModal(false)}>I accept</button>
          <button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}