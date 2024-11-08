import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/banner.css'

const Banner = ({ children }) => {
    return <div className="banner-Box container-fluid">{children}</div>
}

export default Banner
