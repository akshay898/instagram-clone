import '../styles/sidebar.scss';
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/profile.jpeg";

function Sidebar(){
    return (
        <Sticky topOffset={-80}>
            <div className='sidebar'>
                <Profile username="ammu.kutty" 
                caption="Ammu" 
                urlText="Switch" 
                iconSize="large" 
                image={image}
                />
                <Suggestions/>
                <Footer/>
            </div>
        </Sticky>
    );
}

export default Sidebar;