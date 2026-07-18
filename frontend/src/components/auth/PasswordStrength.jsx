/**
 * PasswordStrength
 * Segmented strength bar + label, exactly like the "Weak / Strong" meter
 * in the TaskZen register mock (pink -> purple -> blue -> cyan -> green).
 *
 * Props:
 *  - password: string, the current password value
 */
export default function PasswordStrength({ password = "" }) {
  const rules = [
    password.length >= 6,
    password.length >= 10,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ];

  const score = password ? rules.filter(Boolean).length : 0;
  const segments = 5;

  const labels = ["Too Short", "Weak", "Fair", "Good", "Strong", "Strong"];
  const label = labels[score];

  const colors = [
    "bg-pink-500",
    "bg-purple-500",
    "bg-indigo-500",
    "bg-blue-500",
    "bg-cyan-400",
  ];

  const labelColor =
    score >= 4 ? "text-green-400" : score >= 2 ? "text-cyan-300" : "text-pink-400";

  if (!password) return null;

  return (
    <div className="mb-2 -mt-1">
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-400 text-sm">Password Strength</span>
        <span className={`text-sm font-semibold ${labelColor}`}>{label}</span>
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i < score ? colors[i] : "bg-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
