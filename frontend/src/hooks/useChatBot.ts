import { useState, useCallback, useEffect } from 'react';
import { ChatMessage } from '../types';
import { createChatMessage, getBotResponse, detectBias, getRandomResponseTime } from '../utils/helpers';
import { sampleResponses } from '../data/mockData';

export const useChatBot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversation, setConversation] = useState<string[]>([]);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage = createChatMessage(sampleResponses.greeting, 'assistant');
      setMessages([welcomeMessage]);
    }
  }, [messages.length]);

  const sendMessage = useCallback((content: string) => {
    // Prevent empty messages
    if (!content.trim()) return;

    // Add user message
    const userMessage = createChatMessage(content, 'user');
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Update conversation context
    setConversation(prev => [...prev, content]);
    
    // Simulate bot thinking
    setIsTyping(true);
    
    // Check for bias
    if (detectBias(content)) {
      setTimeout(() => {
        const biasResponse = createChatMessage(sampleResponses.biasDetection, 'assistant');
        setMessages(prevMessages => [...prevMessages, biasResponse]);
        setIsTyping(false);
      }, getRandomResponseTime());
      return;
    }
    
    // Generate bot response with some delay to simulate thinking
    setTimeout(() => {
      const botResponse = getBotResponse(content, messages);
      const botMessage = createChatMessage(botResponse, 'assistant');
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, getRandomResponseTime());
  }, [messages]);

  const clearChat = useCallback(() => {
    setMessages([]);
    setConversation([]);
    // Re-initialize with welcome message
    const welcomeMessage = createChatMessage(sampleResponses.greeting, 'assistant');
    setMessages([welcomeMessage]);
  }, []);

  return {
    messages,
    isTyping,
    sendMessage,
    clearChat,
    conversationContext: conversation.join(' ')
  };
};

export default useChatBot;