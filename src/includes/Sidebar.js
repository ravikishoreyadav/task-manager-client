import { Nav } from "react-bootstrap";

function Sidebar(){
    return( 
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">
                <i class="fa fa-tasks" aria-hidden="true"></i> Board
            </Nav.Link>
            <Nav.Link eventKey="link-1">
                <i class="fa fa-th-list" aria-hidden="true"></i> Backlog
            </Nav.Link>              
        </Nav>
    );
}

export default Sidebar;