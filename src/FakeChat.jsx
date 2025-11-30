//I used the react.dev/learn website to learn a lot of the concepts used in this module.
import React, { useEffect, useRef, useState } from "react";
import "./FakeChat.css";

export default function FakeChat({
  partnerName = "Garfield",
  avatar = "./src/assets/garf.png",
 
}) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "bot",
      text: "John? You did't do your homework and forgot my lasagna :/",
      ts: new Date(Date.now() - 1000 * 60 * 5),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [deliveredIds, setDeliveredIds] = useState([]); // message ids that are "delivered/read"
  const messagesRef = useRef(null);
  const nextIdRef = useRef(2);
  const [botStatus, setBotStatus] = useState("Offline");

  //autoscroll to bottom on new messages
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  function formatTime(date) {
    const h = date.getHours();
    const m = date.getMinutes().toString().padStart(2, "0");
    const hour12 = ((h + 11) % 12) + 1;
    const ampm = h >= 12 ? "PM" : "AM";
    return `${hour12}:${m} ${ampm}`;
  }

 function sendMessage() {
  const trimmed = input.trim();
  if (!trimmed) return;

  const id = nextIdRef.current++;
  const msg = { id, from: "user", text: trimmed, ts: new Date() };
  setMessages((prev) => [...prev, msg]);
  setInput("");

  // mark delivered after simulated network delay
  setTimeout(() => {
    setDeliveredIds((prev) => [...prev, id]);
  }, 700);

  //bot starts typing after a short delay
  setTimeout(() => {
    setIsTyping(true);
    setBotStatus("Online"); // bot goes online while typing
  }, 300);

  // calculate reply delay based on message length
  const replyDelay = 900 + Math.min(1800, trimmed.length * 80);

  // bot sends reply after delay
  setTimeout(() => {
    const replyText = pickReply(trimmed);
    const botMsg = {
      id: nextIdRef.current++,
      from: "bot",
      text: replyText,
      ts: new Date(),
    };
    setIsTyping(false);
    setMessages((prev) => [...prev, botMsg]);

    //keep bot online for 5 seconds after sending
    setBotStatus("Online");
    setTimeout(() => {
      setBotStatus("Offline");
    }, 5000);
  }, replyDelay + 300);
}


  function pickReply(userText) {
    //rng reply
    const low = userText.toLowerCase();
    if (low.includes("?")) return "Good question — lemme think about that.";
    if (low.includes("lol") || low.includes("haha", "lol")) return "xD";
    const replies = [
      "I will help if u give me lasagna JOHN >:("
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  // quick handler for Enter
  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  //small helper to render avatar (fallback to initials)
  function Avatar({src, name, size = 40}) {
    if (src) {
      return <img className="fc-avatar" src={src} alt={name} style={{ width: size, height: size }} />;
    }
    const initials = name
      .split(" ")
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
    return <div className="fc-avatar fc-avatar-fallback" style={{width: size, height: size}}>{initials}</div>;
  }

  return (
    <div className="fc-shell">
      <header className="fc-header">
        <div className="fc-left">
          <button className="fc-icon-btn" aria-label="back">
            {/* back arrow producted by chatgpt*/}
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg>
          </button>
        </div>

        <div className="fc-center">
          <div className="fc-avatar-wrap">
            <Avatar src={avatar} name={partnerName} />
          </div>
          <div className="fc-title">
  <div className="fc-name">{partnerName}</div>
  <div className={`fc-status ${botStatus === "Online" ? "Online" : ""}`}>
    {botStatus}
  </div>
</div>

        </div>

        <div className="fc-right">
      {/*icons produced by chatgpt*/}
          <button className="fc-icon-btn" aria-label="video">
            {/* video icon */}
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M17 10.5V6c0-1.1-.9-2-2-2H3C1.9 4 1 4.9 1 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.5l4 4v-11l-4 4z"/></svg>
          </button>
          <button className="fc-icon-btn" aria-label="call">
            {/* phone icon */}
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.05l-2.2 2.2z"/></svg>
          </button>
        </div>
      </header>

      <main className="fc-messages" ref={messagesRef}>
       {messages.map((m) => {
  const isUser = m.from === "user";
  const isDelivered = deliveredIds.includes(m.id);

  return (
    <div key={m.id} className={`fc-msg-row ${isUser ? "sent" : "received"}`}>

      {/*avatar for received messages*/}
      {!isUser && (
        <div className="fc-msg-avatar-small">
          <Avatar src={avatar} name={partnerName} size={34} />
        </div>
      )}

      <div className="fc-bubble-wrap">
        
        {/*the bubble*/}
        <div className={`fc-bubble ${isUser ? "bubble-sent" : "bubble-received"}`}>
          <div className="fc-text">{m.text}</div>
        </div>

        {/* meta below bubble (delivered/read/time)*/}
        <div className="fc-meta">
             {/* delivered/read*/}
        {isUser && (
          <div className="fc-delivery-label">
            {isDelivered ? "Read" : "Delivered"}
          </div>
        )}
          <span className="fc-time">{formatTime(m.ts)}</span>

          
        </div>

       

      </div>

      {isUser && <div className="fc-msg-space" />}
    </div>
  );
})}

        {/*typing indicator, assisted by chatgpt*/}
        {isTyping && (
          <div className="fc-msg-row received typing-row">
            <div className="fc-msg-avatar-small">
            <div className="fc-avatar fc-avatar-fallback typing-avatar">•••</div>
            </div>
            <div className="fc-bubble bubble-received typing-bubble">
              <div className="typing-dots">
                <span />
                <span />
                <span />
            </div>
          </div>
          </div>
        )}
      </main>

      <footer className="fc-input-bar">
        <textarea
          className="fc-input"
          placeholder="MinnowChat"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          rows={1}
        />
        <button className="fc-send" onClick={sendMessage} aria-label="send">
          Send
        </button>
      </footer>
    </div>
  );
}
