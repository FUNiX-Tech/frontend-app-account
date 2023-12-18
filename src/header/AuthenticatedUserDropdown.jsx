import { Dropdown } from "@edx/paragon";
import messages from "./messages";
import { injectIntl, intlShape } from "@edx/frontend-platform/i18n";
import PropTypes from "prop-types";
import { getConfig } from "@edx/frontend-platform"; 
import avatar_icon from "./assets/avatar.svg";
import avatar_hover_icon from "./assets/avatar_hover.svg";
import { useState } from "react";

const AuthenticatedUserDropdown = ({intl, username})=>{
    const [avatarSrc, setAvatarSrc] = useState(avatar_icon);

    const dashboardMenuItem = (
        <Dropdown.Item href={`${getConfig().LMS_BASE_URL}/dashboard`}>
          <i class="bi bi-house"></i>
          {intl.formatMessage(messages.dashboard)}
        </Dropdown.Item>
      );

      return (
        <Dropdown className="user-dropdown position-relative z-index-100000">
        <Dropdown.Toggle
          variant="outline-primary"
          onMouseOver={() => setAvatarSrc(avatar_hover_icon)}
          onMouseOut={() => setAvatarSrc(avatar_icon)}
        >
          {/* <FontAwesomeIcon
            icon={faUserCircle}
            className="d-md-none"
            size="lg"
          /> */}
          <button className="action-button mr-1">
            <img src={avatarSrc} alt={avatar_icon} />
          </button>
          <span data-hj-suppress className="d-none d-md-inline">
            {username}
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-right">
          {dashboardMenuItem}

          <Dropdown.Item href={`${getConfig().LMS_BASE_URL}/account/settings`}>
            <i class="bi bi-person"></i>
            {intl.formatMessage(messages.account)}
          </Dropdown.Item>

          <Dropdown.Item href={getConfig().LOGOUT_URL}>
            <i class="bi bi-box-arrow-left"></i>
            {intl.formatMessage(messages.signOut)}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      )
}

AuthenticatedUserDropdown.propTypes = {
    intl: intlShape.isRequired,
    username: PropTypes.string.isRequired,
  };
  
  AuthenticatedUserDropdown.defaultProps = {
    isLoading: false,
  };
  
export default injectIntl(AuthenticatedUserDropdown);
  