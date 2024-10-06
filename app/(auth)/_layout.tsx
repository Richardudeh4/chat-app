import { Redirect, Slot, Stack } from "expo-router";
import { useAuth } from "../providers/authProvider";

export default function AuthLayout(){
    const {user} = useAuth();

    if(user) {
        return <Redirect href="/(home)"/>;
    }
    return (
        <Stack/>
    )
}