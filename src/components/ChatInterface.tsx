import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import QuickActions from './QuickActions';
import useChatBot from '../hooks/useChatBot';

const ChatInterface: React.FC = () => {
  const { messages, isTyping, sendMessage, clearChat } = useChatBot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Chat header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-700 to-purple-600 text-white">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-600"
            >
              <path d="M12 18h.01" />
              <path d="M19 7v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              <path d="M7 15a3 3 0 0 0 3-3V4" />
              <path d="M14 4v8a3 3 0 0 0 3 3" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-lg">Asha AI</h2>
            <p className="text-xs text-purple-100">JobsForHer Assistant</p>
          </div>
        </div>
        <button 
          onClick={clearChat}
          className="text-sm px-3 py-1 bg-purple-800 rounded-full hover:bg-purple-900 transition-colors"
        >
          New Chat
        </button>
      </div>
      
      {/* Messages container */}
      <div className="flex-1 p-4 overflow-y-auto bg-white">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Quick actions */}
      <div className="px-4 py-2 border-t border-gray-100">
        <QuickActions onActionClick={sendMessage} />
      </div>
      
      {/* Input area */}
      <div className="p-4 border-t border-gray-100">
        <ChatInput onSendMessage={sendMessage} disabled={isTyping} />
      </div>
    </div>
  );
};

export default ChatInterface;