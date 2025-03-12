'use client'

import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const LoginModal = () => {
    const router = useRouter()
    const loginModal = useLoginModal()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<string[]>([])

    const submitLogin = async () => {
        const formData = {
            email: email,
            password: password
        }

        const response = await apiService.post('/api/auth/login/', JSON.stringify(formData))

        if (response.access) {
            handleLogin(response.pk, response.access, response.refresh)

            loginModal.close()

            router.push('/')
        } else {
            setErrors(response.non_field_errors)
        }
    }

    const content = (
        <>
            <form
                action={submitLogin}
                className="space-y-4"
            >
                <input onChange={(e) => setEmail(e.target.value)} inputMode="email" type="email" placeholder="Type your email" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type your password" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />

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
                    onClick={submitLogin} className={""}
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