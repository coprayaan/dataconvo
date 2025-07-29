"use client";
import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatbotWidget() {
  const [iframeUrl, setIframeUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const fetchAydSession = () => {
    // Add timestamp to ensure fresh session
    const timestamp = Date.now();
    fetch("/api/ayd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timestamp: timestamp,
        sessionId: `pos_${timestamp}`,
      }),
    })
      .then((res) => res.json())
      .then(({ url }) => {
        // Add timestamp to URL to ensure fresh session
        const freshUrl = url.includes('?') ? `${url}&t=${timestamp}` : `${url}?t=${timestamp}`;
        setIframeUrl(freshUrl);
      })
      .catch((error) => {
        console.error("Error fetching AYD session:", error);
        // Fallback to default URL if API fails
        const fallbackUrl = `https://www.askyourdatabase.com/chatbot/${process.env.NEXT_PUBLIC_CHATBOT_ID || 'demo'}?t=${timestamp}`;
        setIframeUrl(fallbackUrl);
      });
  };

  useEffect(() => {
    // Set initial iframe URL with timestamp to ensure fresh session
    if (typeof window !== "undefined") {
      const timestamp = Date.now();
      const initialUrl = `https://www.askyourdatabase.com/chatbot/${process.env.NEXT_PUBLIC_CHATBOT_ID || 'demo'}?t=${timestamp}`;
      setIframeUrl(initialUrl);
      
      // Clear any existing chat data from localStorage
      if (typeof window !== "undefined") {
        // Clear any cached chat data
        Object.keys(localStorage).forEach(key => {
          if (key.includes('chat') || key.includes('ayd') || key.includes('session')) {
            localStorage.removeItem(key);
          }
        });
      }
    }

    // Listen for messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'LOGIN_SUCCESS') {
        setIframeUrl(event.data.url);
      } else if (event.data.type === 'LOGIN_REQUIRED') {
        fetchAydSession();
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener('message', handleMessage);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('message', handleMessage);
      }
    };
  }, []);

  const toggleChat = () => {
    if (!isOpen) {
      // Always fetch a fresh session when opening chat
      fetchAydSession();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        className="floating-chat-button bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg"
        title="Chat with AI Assistant"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window bg-white shadow-xl">
          <div className="flex items-center justify-between p-4 bg-primary-600 text-white">
            <h3 className="font-semibold">AI Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary-700 p-1 rounded"
            >
              <X size={20} />
            </button>
          </div>
          <iframe
            key={iframeUrl} // Force re-render when URL changes
            src={iframeUrl}
            className="chatbot-iframe"
            style={{ height: 500, width: 400 }}
            title="AskYourDatabase Chatbot"
          />
        </div>
      )}
    </>
  );
} 