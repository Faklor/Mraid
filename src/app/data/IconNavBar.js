export default function IconNavBar({isOpen}){
    return <svg
            className={`menu-icon ${isOpen ? "open" : ""}`}
            width="50"
            height="28"
            viewBox="0 0 50 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect className="line line1" width="50" height="6" fill="#434343" />
            <rect className="line line2" y="11" width="50" height="6" fill="#434343" />
            <rect className="line line3" y="22" width="50" height="6" fill="#434343" />
          </svg>

}