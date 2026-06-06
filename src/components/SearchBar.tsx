import React from 'react';
import { Search, X } from 'lucide-react';

/**
 * SearchBarProps Interface
 * Defines variables required by the SearchBar component.
 */
interface SearchBarProps {
  placeholder: string;           // Input placeholder text description
  value: string;                 // Current string value of the input
  onChange: (val: string) => void; // Triggered when input text changes
  onClear?: () => void;          // Optional callback to clear input value
}

/**
 * SearchBar Component
 * Renders a premium, glassmorphism styled search input bar with icons.
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  onChange,
  onClear
}) => {
  return (
    <div 
      className="search-bar-container" 
      style={{ 
        position: 'relative', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center' 
      }}
    >
      {/* Leading Search Icon */}
      <span 
        style={{ 
          position: 'absolute', 
          left: '16px', 
          color: 'var(--text-secondary)', 
          display: 'flex', 
          alignItems: 'center',
          pointerEvents: 'none'
        }}
      >
        <Search size={20} />
      </span>

      {/* Main Input Text Field */}
      <input
        type="text"
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ 
          paddingLeft: '48px', 
          paddingRight: onClear && value ? '48px' : '16px',
          height: '56px',
          fontSize: '16px',
          borderRadius: 'var(--radius-md)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)'
        }}
      />

      {/* Trailing Clear (X) Button (Visible only when text is entered and onClear is supplied) */}
      {onClear && value && (
        <button
          type="button"
          onClick={onClear}
          style={{
            position: 'absolute',
            right: '16px',
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            transition: 'var(--transition-smooth)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          aria-label="Clear search text"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};
