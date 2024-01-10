import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/model/chat-message';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  constructor(private chatService: ChatService){}

  ngOnInit(): void {
    this.chatService.joinRoom('ABC')
  }

  sendMessage(): void {
    const chatMessage = {
      message: 'HOLA',
      user: '1'
    }as ChatMessage

    const res = this.chatService.sendMessage("ABC", chatMessage)
    console.log(res);
    
  }


}
