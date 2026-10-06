"use client";

import { signIn, signOut } from "next-auth/react";

type AuthButtonsProps = {
  isLoggedIn: boolean;
  userName?: string | null;
};

export function AuthButtons({
  isLoggedIn,
  userName,
}: AuthButtonsProps) {
  if (isLoggedIn) {
    return (
      <div className="auth-area">
        <div className="user-info">
          <div className="user-avatar">
            {userName?.charAt(0).toUpperCase() ?? "U"}
          </div>

          <div className="user-text">
            <span>เข้าสู่ระบบแล้ว</span>
            <strong>{userName ?? "ผู้ใช้"}</strong>
          </div>
        </div>

        <button
          type="button"
          className="logout-button"
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
        >
          ออกจากระบบ
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className="google-login-button"
      onClick={() =>
        signIn("google", {
          callbackUrl: "/",
        })
      }
    >
      <span className="google-icon">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
        >
          <path
            fill="#4285F4"
            d="M21.35 12.23c0-.79-.07-1.55-.2-2.28H12v4.31h5.23a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.92-4.18 2.92-7.42Z"
          />
          <path
            fill="#34A853"
            d="M12 21.6c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.6Z"
          />
          <path
            fill="#FBBC05"
            d="M6.54 13.69A5.85 5.85 0 0 1 6.23 12c0-.59.11-1.17.31-1.69V7.78H3.3A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.05 4.22l3.24-2.53Z"
          />
          <path
            fill="#EA4335"
            d="M12 6.28c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.38 14.63 2.4 12 2.4a9.74 9.74 0 0 0-8.7 5.38l3.24 2.53C7.31 8 9.46 6.28 12 6.28Z"
          />
        </svg>
      </span>

      <span>เข้าสู่ระบบด้วย Google</span>
    </button>
  );
}