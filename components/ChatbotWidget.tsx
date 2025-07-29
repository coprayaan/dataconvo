"use client";
import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatbotWidget() {
  const [iframeUrl, setIframeUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const fetchAydSession = () => {
    fetch("/api/ayd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then(({ url }) => {
        setIframeUrl(url);
      })
      .catch((error) => {
        console.error("Error fetching AYD session:", error);
        // Fallback to default URL if API fails
        setIframeUrl(`https://www.askyourdatabase.com/chatbot/${process.env.NEXT_PUBLIC_CHATBOT_ID || 'demo'}`);
      });
  };

  useEffect(() => {
    // Set initial iframe URL
    if (typeof window !== "undefined") {
      setIframeUrl(`https://www.askyourdatabase.com/chatbot/${process.env.NEXT_PUBLIC_CHATBOT_ID || 'demo'}`);
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