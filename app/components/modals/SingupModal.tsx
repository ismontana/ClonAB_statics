'use client'

import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/app/hooks/useSignupModal";

const SignupModal = () => {
    const SignupModal = useSignupModal();

    const content = (
        <>
            <form className="space-y-4">
                <input type="email" placeholder="Type your email" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />
                <input type="pasword" placeholder="Type your password" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />
                <input type="pasword" placeholder="Repeat your password" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />

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
            isOpen={SignupModal.isOpen}
            close={SignupModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal;