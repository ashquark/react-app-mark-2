import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="d-flex justify-content-start">
                    <a className="navbar-brand" href="#">Sharma Medicals</a>
                </div>
                <div className="d-flex justify-content-center"> {/* Center the search bar */}
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Log In / Sign Up</a>
                            <a className="nav-link" href="#">Offers</a>
                            <a className="nav-link" href="#">Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;