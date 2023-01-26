import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

import toast from "react-hot-toast";
import { BsPencil, BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import { useAuth } from "../../contexts/auth";

interface ClientProps {
  client: ClientTypes;
}

export default function BasicMenuClient() {
  const [openDeleteModal, setOpenDeleteModal] = React.useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { userStorage } = useAuth();

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <BsThreeDotsVertical />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {userStorage.roleName === "admin" ? (
          <div>
            <MenuItem
              className="MenuItem"
              onClick={() => {
                handleClose();
                setOpenDeleteModal(!openDeleteModal);
              }}
            >
              <BsTrash /> Excluir
            </MenuItem>
            <MenuItem
              className="MenuItem"
              onClick={() => {
               toast.error("Seção em desenvolvimento");
                handleClose();
              }}
            >
              <BsPencil /> Editar
            </MenuItem>
          </div>
        ) : (
          <MenuItem
            selected
            className="MenuItem"
            onClick={() => {
              setOpenEditModal(!openEditModal);
              handleClose();
            }}
          >
            <BsPencil /> Editar
          </MenuItem>
        )}
      </Menu>

      {/* {openDeleteModal ? (
        <ModalDeleteUser
          user={client}
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
      ) : null} */}

      {/* {openEditModal ? (
        <ModalEditUser
          userStorage={user}
          openModal={openEditModal}
          setOpenModal={setOpenEditModal}
        />
      ) : null} */}
    </div>
  );
}
