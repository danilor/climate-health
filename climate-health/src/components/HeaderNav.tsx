export default function HeaderNav(){
    return (
        <div className="navbar navbar-dark bg-dark shadow-sm mb-2 customHeader">
            <div className="container">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <img alt={'logo'} title={'Climate Health'} src={process.env.PUBLIC_URL + "/img/logo.png"}/>
                    <strong className={'title'}>Climate Health</strong>
                </a>

            </div>
        </div>
    );
}