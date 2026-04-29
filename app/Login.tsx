import React from "react";
import AuthScreen from "@/components/auth/AuthScreen";

interface LoginProps {
  onCloseModal?: () => void;
}

export default function LoginPage({ onCloseModal }: LoginProps) {
  const domainHint = "@example.com"; // Replace with your actual domain hint if needed
  const onAuthenticated = () => {
    if (onCloseModal) {
      onCloseModal();
    }
  }; // Replace with your actual authentication logic

  return (
    <AuthScreen domainHint={domainHint} onAuthenticated={onAuthenticated} />
  );
}
