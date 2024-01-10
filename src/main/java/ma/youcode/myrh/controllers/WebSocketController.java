package ma.youcode.myrh.controllers;

import ma.youcode.myrh.models.ChatMessage;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebSocketController {

    @MessageMapping("/chat/{roomId}")
    @SendTo("/public/{roomId}")
    public ChatMessage chat(@DestinationVariable String roomId, ChatMessage message){
        return new ChatMessage(message.getMessage(), message.getUser());
    }
}
