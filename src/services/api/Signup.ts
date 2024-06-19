import { useApi } from "../hooks/useApi";
import { ISignupForm } from "../interfaces/SignupForm";

const api = useApi()

interface ISignupRequest {
    email: string,
    password: string
}

export async function signup(signupForm: ISignupForm): Promise<any> {
    const userCredentials: ISignupRequest = {
        email: signupForm.email,
        password: signupForm.password
    }

    const response = await api.post('auth/signup', userCredentials)   

    if (response.status === 201 && response.data.user) {
        return true

    } else {
        console.error('User creation failed');
    }
}