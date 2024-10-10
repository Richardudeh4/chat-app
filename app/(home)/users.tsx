import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { supabase } from "../lib/supabase";
import { useAuth } from "../providers/authProvider";
import UserListItem from "@/components/userListItem";

export default function UsersScreen(){
    const [users,setUsers] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        const fetchUsers = async () => {
            let {data:profiles, error } = await supabase
            .from('profiles')
            .select('*')
            .neq('id', user?.id); //exclude my own profile
            setUsers(profiles);
        };
        fetchUsers(); 
    },[]);
    return (

        <FlatList 
        data={users} 
        contentContainerStyle={{gap:5}}
        renderItem={({item}) => <UserListItem user={item}/>}/>
    );
}