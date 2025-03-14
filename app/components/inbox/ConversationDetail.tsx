'use client';
import { ConversationType } from "@/app/inbox/page";
import CustomButton from "../forms/CustomButton";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useEffect } from "react";

interface ConversationDetailProps {
    token: string
    userId: string
    conversation: ConversationType
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({
    token,
    userId,
    conversation
}) => {
    const myUser = conversation.users?.find((user) => user.id == userId)
    const otherUser = conversation.users?.find((user) => user.id != userId)

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}`, {
            share: false,
            shouldReconnect: () => true,
        },
    )

    useEffect(() => {
        console.log('Conexión cambiada', readyState)
    }, [readyState])

    return (
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-500">
                        ismontana
                    </p>
                    <p>es la mera verga</p>
                </div>
                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
                    <p className="font-bold text-gray-500">
                        ismontana
                    </p>
                    <p>es la mera verga</p>
                </div>
            </div>
            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Text your message..."
                    className="w-full p-2 bg-gray-200 rounded-xl"
                />
                <CustomButton
                    label='Send'
                    onClick={() => console.log('Send message')}
                    className="w-[100px]"
                />
            </div>
        </>
    )
}

export default ConversationDetail;