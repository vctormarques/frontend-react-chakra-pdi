import { IListUser, IRegisterUser, IRegisterUserResponse } from "interfaces";
import { Api } from "providers";

const getAllUsers = () => Api.get<IListUser[]>('/api/v1/users');

const registerUser = (data: IRegisterUser) => Api.post<IRegisterUserResponse>('/api/v1/users', data);


export const UserServices = {
    getAllUsers, registerUser
}