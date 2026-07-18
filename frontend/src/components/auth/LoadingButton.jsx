import GlowButton from "./GlowButton";

/**
 * LoadingButton
 * The primary auth-form submit button. Shows a spinner + loadingText
 * while `loading` is true, otherwise shows `children`.
 *
 * Usage:
 *  <LoadingButton loading={loading} loadingText="Logging In...">
 *    Login
 *  </LoadingButton>
 */
export default function LoadingButton({ loading, loadingText = "Please wait...", children }) {
  return (
    <GlowButton type="submit" disabled={loading}>
      {loading ? (
        <div className="flex justify-center items-center gap-2">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          {loadingText}
        </div>
      ) : (
        children
      )}
    </GlowButton>
  );
}
