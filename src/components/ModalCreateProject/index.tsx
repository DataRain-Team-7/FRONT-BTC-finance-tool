import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useTeam } from "../../contexts/teamContext";
import { ButtonsContainer } from "../../utils/globalStyles";
import * as S from "./style";


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 300,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

interface ModalProps {
  openProjectModal: boolean;
  setOpenProjectModal: ({ props }: any) => void;
}

export default function ModalCreateProject({
  setOpenProjectModal,
  openProjectModal,
}: ModalProps) {
  const handleClose = () => setOpenProjectModal(!openProjectModal);
  const { handleGetTeam } = useTeam();

  return (
    <div>
      <Modal
        onClose={handleClose}
        open={openProjectModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginTop="10px"
          sx={style}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Criar Equipe
          </Typography>
          <S.FormCreate>
            <S.LabelCreate htmlFor="name">
              {" "}
              Nome do Projeto:
              <S.InputCreateTeam type="text" />
            </S.LabelCreate>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
            >
              <ButtonsContainer>
                <Button
                  variant="contained"
                  className="buttonCancel"
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  className="buttonSave"
                  type="submit"
                >
                  Criar
                </Button>
              </ButtonsContainer>
            </Box>
          </S.FormCreate>
        </Box>
      </Modal>
    </div>
  );
}
