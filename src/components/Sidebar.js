import React from 'react';

import ContentSidebar from '../containers/Content-Sidebar';

const Sidebar = () => {
    return (
        <div className="col-md-4">
            <div className="sidebar">
              <ContentSidebar />
            </div>
        </div>
    )
}

export default Sidebar;