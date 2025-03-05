'use client'

import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal();

    const content = (
        <>
            <form className="space-y-4">
                <input type="email" placeholder="Type your email" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />
                <input type="pasword" placeholder="Type your password" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton
                    label="Submit"
                    onClick={() => { console.log('test'); }} className={""}
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Login"
            content={content}
        />
    )
}

export default LoginModal;