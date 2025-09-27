import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';
import styles from './AIChatbot.module.css';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response (replace with actual AI API call)
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getAIResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi')) {
      return "Hello! I'm here to help you with any questions about our services, portfolio, or how we can assist your business.";
    } else if (message.includes('service') || message.includes('services')) {
      return "We offer comprehensive web development, mobile app development, AI solutions, and digital marketing services. Would you like to know more about any specific service?";
    } else if (message.includes('portfolio') || message.includes('project')) {
      return "Our portfolio includes various successful projects across different industries. You can view our recent work in the Portfolio section. Is there a specific type of project you're interested in?";
    } else if (message.includes('contact') || message.includes('get in touch')) {
      return "You can reach us through our Contact page, or I can help you schedule a consultation. What's the best way to assist you?";
    } else if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
      return "Our pricing varies based on project requirements and scope. I'd recommend scheduling a consultation to discuss your specific needs and get a tailored quote.";
    } else if (message.includes('time') || message.includes('duration') || message.includes('how long')) {
      return "Project timelines depend on complexity and requirements. Simple websites typically take 2-4 weeks, while complex applications can take 2-6 months. Let's discuss your project details for a more accurate timeline.";
    } else {
      return "That's an interesting question! I'd be happy to help you with that. Could you provide a bit more detail so I can give you the most accurate information?";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    if (isOpen && isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
      setIsMinimized(false);
    }
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          className={styles.chatToggle}
          onClick={toggleChat}
          aria-label="Open AI Chat"
        >
          <MessageCircle className={styles.chatIcon} />
          <span className={styles.chatBadge}>AI</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`${styles.chatWindow} ${isMinimized ? styles.minimized : ''}`}>
          {/* Chat Header */}
          <div className={styles.chatHeader}>
            <div className={styles.chatHeaderInfo}>
              <Bot className={styles.botIcon} />
              <div>
                <h3 className={styles.chatTitle}>AI Assistant</h3>
                <span className={styles.chatStatus}>Online</span>
              </div>
            </div>
            <div className={styles.chatControls}>
              <button
                className={styles.minimizeButton}
                onClick={minimizeChat}
                aria-label="Minimize chat"
              >
                <Minimize2 className={styles.controlIcon} />
              </button>
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X className={styles.controlIcon} />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className={styles.chatMessages}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${styles[message.sender]}`}
              >
                <div className={styles.messageAvatar}>
                  {message.sender === 'bot' ? (
                    <Bot className={styles.avatarIcon} />
                  ) : (
                    <User className={styles.avatarIcon} />
                  )}
                </div>
                <div className={styles.messageContent}>
                  <div className={styles.messageBubble}>
                    <p className={styles.messageText}>{message.text}</p>
                    <span className={styles.messageTime}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className={`${styles.message} ${styles.bot}`}>
                <div className={styles.messageAvatar}>
                  <Bot className={styles.avatarIcon} />
                </div>
                <div className={styles.messageContent}>
                  <div className={styles.messageBubble}>
                    <div className={styles.typingIndicator}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className={styles.chatInput}>
            <div className={styles.inputContainer}>
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className={styles.messageInput}
                rows="1"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className={styles.sendButton}
                aria-label="Send message"
              >
                <Send className={styles.sendIcon} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
