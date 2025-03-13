'use client'

import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/app/hooks/useSignupModal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const SignupModal = () => {
    const router = useRouter()
    const SignupModal = useSignupModal()
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [errors, setErrors] = useState<string[]>([])

    // Submit functions
    const submitSignup = async () =>{
        const formData = {
            email: email,
            password1: password1,
            password2: password2
        }

        const response = await apiService.postWithutToken('/api/auth/register/', JSON.stringify(formData)) 

        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refresh)

            SignupModal.close()
            
            router.push('/')
            
            router.refresh()
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error;
            })
        }
    }

    const content = (
        <>
            <form 
            action={submitSignup}
            className="space-y-4"
            >
                <input onChange={(e) => setEmail(e.target.value)} inputMode="email" type="email" placeholder="Type your email" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />
                <input onChange={(e) => setPassword1(e.target.value)} type="password" placeholder="Type your password" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />
                <input onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="Repeat your password" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />

                {errors.map((error, index) => {
                    return (
                        <div 
                        key={`error_${index}`}
                        className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                        >
                            {error}
                        </div>
                    )
                })}

                <CustomButton 
                    label="Submit"
                    className={""}
                    onClick={submitSignup}
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