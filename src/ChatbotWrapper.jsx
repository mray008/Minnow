import { useState } from "react";
import FakeChat from "./FakeChat";

export default function ChatbotWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Floating Tab Button */}
      {!isOpen && (
        <button className="chatbot-tab" onClick={() => setIsOpen(true)}>
          Chat with Minnow
        </button>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div className="chatbox-wrapper">
          <FakeChat />

          {/* Close Button */}
          <button className="chatbot-close" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
}