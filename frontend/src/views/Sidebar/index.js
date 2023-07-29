import { Divider, List, ListItemButton, ListItemText } from "@mui/material"
import { FakeLogo, SidebarContainer, SidebarHeader } from "./styles"
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate()
  return (
    <SidebarContainer >
      <SidebarHeader>
        <FakeLogo>Splash</FakeLogo>
      </SidebarHeader>

      <List component="nav">
        <ListItemButton id="dashboard-navigator" onClick={() => navigate('/dashboard')}>
          <ListItemText sx={{ color: 'white' }} primary="Dashboard" />
        </ListItemButton>
        <Divider />
        <ListItemButton id="history-navigator" onClick={() => navigate('/history')}>
          <ListItemText sx={{ color: 'white' }} primary="Histórico de faturas" />
        </ListItemButton>
      </List>
    </SidebarContainer>
  )
}

export default Sidebar
