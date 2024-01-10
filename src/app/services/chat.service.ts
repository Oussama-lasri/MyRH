import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJs from 'sockjs-client';
import { ChatMessage } from '../model/chat-message';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private stompClient: any;
  constructor() {
    this.initConnectionSocket();
  }
  initConnectionSocket() {
    const url = 'http://localhost:8080/chat-socket';
    const socket = new SockJs(url);
    this.stompClient = Stomp.over(socket);
  }

  joinRoom(roomId: string) {
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(`/topic/${roomId}`, (message: any) => {
        const messageConent = JSON.parse(message.body);
        console.log(messageConent);
      });
    });
  }
  sendMessage(roomId: string, chatMessage: ChatMessage) {
    this.stompClient.send(
      `/app/chat/${roomId}`,
      {},
      JSON.stringify(chatMessage)
    );
  }
}
