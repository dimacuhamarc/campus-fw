'use client';

import React, { ChangeEvent, useState } from 'react';
import { ToggleSwitch } from 'flowbite-react';
import { Button } from '@/components/Button';
import { ModalComponent } from '@/components/Modal';
import { db } from '@/configs/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const Submit = () => {
    const router = useRouter();

    const postsRef = collection(db, 'posts');

    const [openModal, setOpenModal] = useState<boolean>(false);

    const maxLength:number = 160;
    const [text, setText] = useState<string>('');
    const [college, setCollege] = useState<string>('CS');
    const [author, setAuthor] = useState<string>('');
    const [isAnon, setIsAnon] = useState(true);

    const handleThoughtChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputValue = event.target.value;
        // Ensure the input doesn't exceed maxLength
        if (inputValue.length <= maxLength) {
            setText(inputValue);
        }
    }

    const handleCollegeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedCollege = event.target.value;
        setCollege(selectedCollege);
    };

    const handleAuthorChange = (event: ChangeEvent<HTMLInputElement>) => {
        const author = event.target.value;
        setAuthor(author);
    }

    const modalText = 'Remember to be respectful and kind to others. We are all here to share our thoughts, rants and opinions.';
    const modalFields = [
        {
            title: 'Thoughts Field',
            key: 'field1',
            render: () => (
                <div className="flex flex-col relative gap-2">
                    <textarea
                        className="w-full p-2 border border-gray-300 resize-none rounded"
                        placeholder="Share your thoughts..."
                        rows={4}
                        maxLength={maxLength}
                        onChange={handleThoughtChange}
                    />
                    <div className="text-gray-500 text-right">{`${text.length}/${maxLength}`}</div>
                </div>
            )
        },
        {
            title: 'College Course Toggle Field',
            key: 'field2',
            render: () => (
                <div className="flex items-center gap-4">
                    <label className='text-gray-500 dark:text-gray-400' htmlFor="college">College</label>
                    <select name="college" id="college" onChange={handleCollegeChange} className='w-auto rounded text-gray-500 border-pink-700'>
                        <option value="CS">CS</option>
                        <option value="CSS">CSS</option>
                        <option value="CAC">CAC</option>
                        <option value="NONE">Prefer Not To Say</option>
                    </select>
                </div>
            )
        },
        {
            title: 'Is Anon Field',
            key: 'field3',
            render: () => (
                <div className="flex flex-col gap-2">
                    <ToggleSwitch color='pink' checked={isAnon} onChange={setIsAnon} label="Post Anonymously" />
                    {!isAnon && (
                        <>
                            <div className="flex gap-4 items-center">
                                <label htmlFor="name" className='text-gray-500 dark:text-gray-400'>Name</label>
                                <input type="text" name="name" id="name" onChange={handleAuthorChange} maxLength={15} className='w-auto rounded border-pink-700' />
                            </div>
                        </>
                    )}
                </div>
            )
        }
    ]

    // submit post
    const onSubmitPost = async () => {
        const body = {
            text,
            college,
            author,
            date: new Date(),
        };

        if (isAnon) {
            body.author = "";
        }

        setText('');
        setCollege('');
        setAuthor('');
        setIsAnon(true);

        try {
            await addDoc(postsRef, {
                author: body.author,
                college: body.college,
                content: body.text,
                postdate: new Date(),
            })

            router.refresh();
            setOpenModal(false);
          } catch (error) {
                console.error(error);
          }
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
                text={modalText}
                modalFields={modalFields}
                buttonAction="Submit"
            />
        </div>
    )
}

export default Submit;