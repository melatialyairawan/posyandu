"use client";
import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalContent } from "@nextui-org/modal";
import HelpdeskUser from "./HelpdeskUser";

const HelpdeskModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen((prev) => !prev);

    return (
        <div className="fixed bottom-10 right-10 z-[999]">
            {/* Modal Trigger */}
            <div onClick={toggleModal} className="cursor-pointer">
                <HelpdeskUser />
            </div>

            {/* Chat Modal */}
            <Modal isOpen={isOpen} onClose={toggleModal} size="md" className="p-4 absolute bottom-14 right-14">
                <ModalContent>
                    <ModalHeader className="bg-teal-500 text-white font-bold">
                        Helpdesk SiKITA
                    </ModalHeader>
                    <ModalBody>
                        <div className="space-y-4">
                            {/* Greeting */}
                            <div className="bg-teal-100 p-2 rounded-lg text-gray-700 text-sm">
                                Halo, ada yang bisa dibantu? Silakan ajukan pertanyaan Anda.
                            </div>

                            {/* Chat Bubbles Placeholder */}
                            <div className="bg-gray-200 rounded-lg p-3 w-4/5"></div>
                            <div className="bg-teal-100 rounded-lg p-3 w-4/5 ml-auto"></div>
                            <div className="bg-gray-200 rounded-lg p-3 w-4/5"></div>

                            {/* Chat Input */}
                            <div className="flex items-center gap-2 mt-4">
                                <input
                                    type="text"
                                    placeholder="Tulis pesan Anda..."
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                <button className="p-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition">
                                    ➤
                                </button>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default HelpdeskModal;
