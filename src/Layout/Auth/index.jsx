import axios from "axios";
import { X } from "lucide-react";
import { useState } from "react";
import Modal from "react-modal";
import styles from "./auth.module.scss";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const customStyles = {
  overlay: {
    zIndex: 9999999,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ModalAuth({ modalIsOpen, setIsOpen }) {
  let subtitle;
  const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  const [value, setValue] = useState({
    login: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://solartech.tj/kurbonoff/login",
        value
      );

      if (response.status === 200) {
        navigate("/adPan");
      } else {
        message.error()
        setValue({ login: "", password: "" });
      }
      console.log(response);
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Вход</h2>
          <button onClick={closeModal}>
            <X />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles["overlay"]}>
            <div className={styles["login"]}>
              <p>Логин</p>
              <input
                type="text"
                name="login"
                placeholder="Введите логин"
                value={value.login}
                onChange={handleOnChange}
              />
            </div>
            <div className={styles["password"]}>
              <p>Пароль</p>
              <input
                type="password"
                name="password"
                placeholder="Введите пароль"
                value={value.password}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className={styles["btn-overlay"]}>
            <button type="submit">Вход</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default ModalAuth;
