import { useState } from "react";

/**
 * FloatingLabelInput
 * Glass-styled input with a left icon and a floating label that lifts
 * above the field once it's focused or has a value.
 *
 * Props:
 *  - icon: lucide-react icon component, e.g. Mail
 *  - label: string label / placeholder text
 *  - type: input type ("text" | "email" | "password" ...)
 *  - name, value, onChange: standard controlled-input props
 *  - rightIcon: optional element rendered on the right (e.g. show/hide password button)
 */
export default function FloatingLabelInput({
  icon: Icon,
  label,
  type = "text",
  name,
  value,
  onChange,
  rightIcon,
  className = "",
}) {
  const [focused, setFocused] = useState(false);
  const floated = focused || (value && value.length > 0);

  return (
    <div className={`relative ${className}`}>
      {Icon && (
        <Icon
          size={20}
          className={`absolute left-4 top-4 transition-colors ${
            focused ? "text-cyan-400" : "text-slate-400"
          }`}
        />
      )}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={floated ? "" : label}
        className={`
          w-full py-4 rounded-2xl
          ${Icon ? "pl-12" : "pl-4"} ${rightIcon ? "pr-14" : "pr-4"}
          bg-white/5 border border-white/10 text-white
          placeholder:text-slate-400 outline-none
          focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30
          hover:border-cyan-400/40 hover:-translate-y-0.5
          transition-all duration-300
        `}
      />

      {/* floating label */}
      <label
        className={`
          pointer-events-none absolute transition-all duration-200
          ${Icon ? "left-12" : "left-4"}
          ${
            floated
              ? "-top-2.5 text-xs bg-[#071329] px-1.5 rounded text-cyan-400"
              : "top-4 text-slate-400"
          }
        `}
      >
        {floated ? label : ""}
      </label>

      {rightIcon && (
        <button
          type="button"
          onClick={rightIcon.onClick}
          className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
        >
          {rightIcon.icon}
        </button>
      )}
    </div>
  );
}
