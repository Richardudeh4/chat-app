import { Redirect, Slot, Stack } from "expo-router";
import { useEffect } from "react";

import { Chat, OverlayProvider } from "stream-chat-expo";
import ChatProvider from "../providers/ChatProviders";
import { useAuth } from "../providers/authProvider";


export default function HomeLayout(){
   const {user} = useAuth();
   if(!user){
    return <Redirect href="/(auth)/login"/> 
   } 
    return (
        <ChatProvider>
            <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
           </Stack>
            </ChatProvider>
);
}