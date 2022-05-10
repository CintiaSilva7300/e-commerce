import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Img from '../../../Components/Img/WhatsApp Image 2022-05-02 at 14.16.41.jpeg';

import { ProSidebar } from 'react-pro-sidebar';
import { FaHome, FaProductHunt, FaClipboardList, FaPlusCircle, FaPen } from 'react-icons/fa';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import NavbarConteinerAdmin from "../../Components/NavBarContainer";

function AdminHome(props) {
    return (
        <div>
            <NavbarConteinerAdmin />
            <ProSidebar>
                <Menu style={{ backgroundColor: "#212529" }} iconShape="square">
                    <MenuItem icon={<FaHome />}>Home</MenuItem>
                    <SubMenu title="Produto" icon={<FaProductHunt />}>
                        <MenuItem icon={<FaClipboardList />}>Lista de Produto</MenuItem>
                        <MenuItem icon={<FaPlusCircle />}>Cadastrar</MenuItem>
                        <MenuItem icon={<FaPen />}>Editar </MenuItem>
                    </SubMenu>

                    <MenuItem icon={<FaClipboardList />}>seila</MenuItem>
                    <MenuItem icon={<FaPlusCircle />}>seila</MenuItem>
                    <MenuItem icon={<FaPen />}>seila </MenuItem>
                    <MenuItem icon={<FaClipboardList />}>seila</MenuItem>
                    <MenuItem icon={<FaPlusCircle />}>seila</MenuItem>
                    <MenuItem icon={<FaPen />}>seila </MenuItem>
                    <MenuItem icon={<FaClipboardList />}>seila</MenuItem>
                </Menu>
            </ProSidebar>;
        </div>
    )
}

export default AdminHome;