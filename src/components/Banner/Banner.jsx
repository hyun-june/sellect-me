import 'bootstrap/dist/css/bootstrap.min.css'
import './Banner.css'

const Banner = ({ children }) => {
    return <div className="banner-Box container-fluid">{children}</div>
}

export default Banner
