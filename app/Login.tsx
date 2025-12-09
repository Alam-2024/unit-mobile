import React from "react";
import AuthScreen from "@/components/auth/AuthScreen";

interface LoginProps {
  onCloseModal?: () => void;
}

export default function LoginPage({ onCloseModal }: LoginProps) {
  return <AuthScreen onCloseModal={onCloseModal} />;
}
