export const Button = ({ children, onClick, className }) => {   
    children = children || 'Click Me'; // Default button text
    onClick = onClick || (() => alert('Button clicked!')); // Default click handler
    className = className || ''; // Default class name
    buttonStyle = {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
}