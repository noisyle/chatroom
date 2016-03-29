package com.noisyle.chatroom.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.noisyle.chatroom.vo.ChatMessage;

@Controller
public class ChatRoomController {
	private static Logger logger = LoggerFactory.getLogger(ChatRoomController.class);
	
	@RequestMapping("/")
	public String index() {
		return "index";
	}

	@RequestMapping("/home.html")
	public String home() {
		return "home";
	}

	@MessageMapping("/chat")
	@SendTo("/topic/hello")
	public ChatMessage hello(ChatMessage msg) throws Exception {
		logger.info(msg.getNickname() + ": " + msg.getMsg());
		return msg;
	}

}
