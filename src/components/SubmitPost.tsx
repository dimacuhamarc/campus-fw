'use client'

import { Modal, ToggleSwitch } from 'flowbite-react';
import { useEffect, useState, ChangeEvent } from 'react';

export default function SubmitPost() {
  const [openModal, setOpenModal] = useState(false);
  const [isAnon, setIsAnon] = useState(true);
  const [text, setText] = useState<string>('');

  useEffect(() => {
    console.log(isAnon);
  }, [isAnon]);

  const maxLength:number = 160;

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    // Ensure the input doesn't exceed maxLength
    if (inputValue.length <= maxLength) {
      setText(inputValue);
    }
  };

  const onSubmitPost = () => {
    console.log('submitting post');
  }
  return (
    <>
      <button onClick={() => setOpenModal(true)} className="bg-pink-700 text-white px-4 py-2 rounded mt-2">Submit a Post!</button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Hit me with your best thought!</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Remember to be respectful and kind to others. We are all here to share our thoughts, rants and opinions. 
            </p>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Share your thoughts..."
              rows={4}
              maxLength={160}
              onChange={handleTextChange}
            />
            <div className="text-gray-500 text-right">{`${text.length}/${maxLength}`}</div>
            <div className="flex flex-row gap-4 items-center">
              <label className='text-gray-500 dark:text-gray-400' htmlFor="college">College</label>
              <select name="college" id="college" className='w-auto rounded text-gray-500 border-pink-700'>
                <option value="CS">CS</option>
                <option value="CSS">CSS</option>
                <option value="CAC">CAC</option>
                <option value="NONE">Prefer Not To Say</option>
              </select>
            </div>
            <ToggleSwitch color='pink' checked={isAnon} onChange={setIsAnon} label="Post Anonymously" />
            {!isAnon && (
              <>
                <div className="flex flex-row gap-4 items-center">
                  <label htmlFor="name" className='text-gray-500 dark:text-gray-400'>Name</label>
                  <input type="text" name="name" id="name" className='w-auto rounded border-pink-700' />
                </div>
              </>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className='flex flex-row justify-between items-center cursor-pointer'>
          <button onClick={() => setOpenModal(false)}>Cancel</button>
          <button color="pink" className="bg-pink-700 text-white px-4 py-2 rounded" onClick={() => { setOpenModal(false); onSubmitPost(); }}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}