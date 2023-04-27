function Footer() {
    return <footer className="page-footer blue-grey lighten-1">
        <div className="container">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} | prod by Bagaeva Olesya for RTU MIREA
                    <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
                </div>
            </div>
        </div>
    </footer>
}
export { Footer };