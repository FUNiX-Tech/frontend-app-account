import { NavLink } from "react-router-dom";
import './headerLearning.scss' ;
import { getConfig } from "@edx/frontend-platform";
import notification_icon from "./assets/notification.svg";
import { getAuthenticatedUser } from "@edx/frontend-platform/auth";
import AuthenticatedUserDropdown from "./AuthenticatedUserDropdown";

const HeaderLearning = ()=>{
    const authenticatedUser = getAuthenticatedUser();


    const headerDashboard = (
        <div className="d-flex align-items-center course-title-lockup">
          <ul>
            <li>
              <NavLink
                className="header-dashboard-link"
                activeClassName="active"
                end
                to="/dashboard"
              >
                Khoá học của tôi
              </NavLink>
            </li>
            <li>
              <a
                className="header-dashboard-link"
                href="#"
              >
                Các khoá khác
              </a>
            </li>
          </ul>
        </div>
      );

    return (
       <header className='learning-header'>
            <div className="header1-container d-flex align-items-center">
                <div className="logo-container">
                <a
                href={`${getConfig().LMS_BASE_URL}/dashboard`}
                className="logo logo_img"
            >
                <img
                className="d-block"
                src={getConfig().LOGO_URL}
                alt={getConfig().LOGO_URL}
                />
          </a>
                </div>
                <div className="d-flex align-items-center course-title-lockup header-dashboard">
                    <span className="d-block">
                        {headerDashboard}
                    </span>
                </div>
                <div className="actions d-flex align-items-center">
                <button className="action-button">
                    <img src={notification_icon} alt={notification_icon} />
                </button>
                {authenticatedUser && <AuthenticatedUserDropdown 
                     username={authenticatedUser.username}                    
                />}
                </div>
            </div>
            
       </header>
    )
}

export default HeaderLearning