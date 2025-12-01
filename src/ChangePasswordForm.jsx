//This file content made by AI
import { useState } from "react";
import { validatePassword, displayPasswordRequirements } from "./PassChange.jsx";
import "./ChangePasswordForm.css";
const BACKEND_URL = "https://minnow.onrender.com";
// The above line was commented  and placed here to replace the localhost:5000

export default function ChangePasswordForm({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!user) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validatePassword(newPassword, confirmPassword);
    if (validationError) {
      setMessage(validationError);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/change-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          currentPassword,
          newPassword,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message || "Error changing password");
        setSuccess(false);
      } else {
        setMessage("Password changed successfully!");
        setSuccess(true);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setTimeout(() => handleClose(), 1500);
      }
    } catch (err) {
      setMessage("Unable to connect to server.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setMessage(null);
    setSuccess(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="btn-change-password"
      >
        Change Password
      </button>
    );
  }

  return (
    <div
      className="change-password-overlay"
      onClick={handleClose}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="change-password-form"
      >
        <h3>Change Password</h3>
        <input
          type="password"
          placeholder="Current password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
        <div className="password-requirements">
          {displayPasswordRequirements()}
        </div>
        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <div className="button-group">
          <button
            type="submit"
            disabled={loading}
            className="btn-submit"
          >
            {loading ? "Updating..." : "Change Password"}
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="btn-cancel"
          >
            Cancel
          </button>
        </div>
        {message && (
          <div className={`message-box ${success ? "success" : "error"}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}