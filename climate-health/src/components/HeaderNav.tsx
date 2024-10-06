export default function HeaderNav(){
    return (
        <div className="navbar navbar-dark bg-dark shadow-sm mb- 2customHeader">
            <div className="container">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                         stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true"
                         className="me-2" viewBox="0 0 24 24">
                        <path
                            d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                        <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                    <strong className={'title'}>Climate Health</strong>
                </a>

            </div>
        </div>
    );
}