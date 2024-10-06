import { Slot, Stack } from "expo-router";
import { useEffect } from "react";

import { Chat, OverlayProvider } from "stream-chat-expo";
import ChatProvider from "../providers/ChatProviders";


export default function HomeLayout(){
   
    return (
        <ChatProvider>
            <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
           </Stack>
            </ChatProvider>
);
}