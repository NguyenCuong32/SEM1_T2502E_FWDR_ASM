
function ScrollToTop(props) {
    return (
        <div>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px 15px',
                    cursor: 'pointer',
                }}
            >
                Scroll to Top
            </button>
        </div>
    );
    
}
export default ScrollToTop;