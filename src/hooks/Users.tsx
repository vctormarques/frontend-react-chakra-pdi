import { IListUser } from "interfaces";
import { useCallback, useState } from "react"
import { UserServices } from "services"

export const UsersHook = () => {
    const [users, setUsers] = useState<IListUser[]>([]);

    const getAllUsers = useCallback(async () => {
        const {status, data} = await UserServices.getAllUsers()
        
        if (status !== 200) throw new Error();

        setUsers(data);
    }, [])
    

    return { getAllUsers, users };
}