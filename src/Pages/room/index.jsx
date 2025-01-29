import React from "react";
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomId} = useParams();
const myMeeting = async (element) => {
    const appID =314678308 ;
    const serverSecret = "9494d1fdbff81edb2df8dae892b5c71f";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "jibachh"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.VideoConference
            },
        });
};


    return <div className="room-page"><div ref={myMeeting}/></div>
};

export default RoomPage;