import { FC } from "react"
import React from "react"
import { useNavigate } from "react-router-dom"


export const Signin: FC = () => {
    const navigate = useNavigate()
    return (
        <div className="flex h-full w-full items-center justify-center bg-backGround">
            <div className="h-3/5 w-1/4 overflow-hidden rounded-md bg-general">
                <div className="flex h-1/2 flex-col items-center">
                    <div className="flex h-1/2 w-full items-center justify-center bg-general">
                        <input
                            className="h-1/2 w-4/5 overflow-hidden rounded-md bg-accent text-center outline-none"
                            placeholder="email"
                            type="email" />
                    </div>
                    <div className="flex h-1/2 w-full items-center justify-center bg-general">
                        <input
                            className="h-1/2 w-4/5 overflow-hidden rounded-md bg-accent text-center outline-none"
                            placeholder="password"
                            type="password" />
                    </div>
                </div>
                <div className="h-4" />
                <div className="flex h-1/6 w-full items-end justify-center">
                    <button className="h-1/2 w-1/2 rounded-3xl bg-component-general hover:bg-component-accent hover:text-accent">
                        Sign In
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="hover:text-accent"
                        onClick={() => navigate("/signup")}>
                        Create new account.
                    </button>
                </ div>
            </div>
        </div>
    )
}