/**
 * GoogleButton
 * "Continue with Google" outlined glass button with a real 4-color G mark.
 *
 * Props:
 *  - onClick: fn
 *  - label: string (default "Continue with Google")
 */
export default function GoogleButton({ onClick, label = "Continue with Google" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        w-full flex items-center justify-center gap-3
        py-4 rounded-2xl font-semibold text-white
        bg-white/5 border border-white/10
        hover:border-cyan-400/40 hover:bg-white/10
        transition-all duration-300
      "
    >
      <svg width="20" height="20" viewBox="0 0 48 48">
        <path
          fill="#FFC107"
          d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.5 6 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"
        />
        <path
          fill="#FF3D00"
          d="m6.3 14.7 6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l5.7-5.7C34.5 6 29.5 4 24 4c-7.5 0-14 4.2-17.7 10.7z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.4 0 10.3-1.9 14-5.1l-6.5-5.5C29.4 35 26.8 36 24 36c-5.3 0-9.7-3.1-11.3-7.6l-6.6 5.1C9.9 39.7 16.4 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.5 5.5C41.5 36 44 30.6 44 24c0-1.2-.1-2.4-.4-3.5z"
        />
      </svg>
      {label}
    </button>
  );
}
