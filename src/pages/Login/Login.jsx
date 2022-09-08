import {
  LoginContainer,
  FormContainer,
  Logo,
  Form,
  FormField,
  LoginLink,
} from "./styles";
import logo from "../../image/mainlogo.png";
import {Link, useNavigate} from "react-router-dom";
import useInput from "../../hooks/useInput";
import useModal from "../../hooks/useModal";
import useEmailValidator from "../../hooks/useEmailValidator";
import {useDispatch} from "react-redux";
import {signInUserThunk} from "../../redux/modules/signInUserSlice";

const Login = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail, resetEmail] = useInput();
  const emailValidator = useEmailValidator();
  const [password, setPassword, resetPassword] = useInput();
  const [modal, setModal] = useModal();
  const signIn = async () => {
    if (email.length === 0) {
      setModal("이메일을 입력해주세요.");
    } else if (!emailValidator(email)) {
      setModal("이메일 형식이 올바르지 않습니다.");
    } else if (password.length === 0) {
      setModal("비밀번호를 입력해주세요.");
    } else {
      const user = {
        email,
        password,
      };
      const signInResponse = await dispatch(signInUserThunk(user));
      if (signInResponse.error) {
        const errorCode = signInResponse.payload;
        switch (errorCode) {
          case "MEMBER_NOT_FOUND":
            setModal("회원 정보가 존재하지 않습니다.");
            break;
          case "INVALID_MEMBER":
            setModal("비밀번호가 틀립니다.");
            break;
          case "TOKEN_NOT_SENT":
            setModal("서버로부터 토큰을 전달받지 못하였습니다.");
            break;
          case "NOT_SAME_PASSWORD":
            setModal("비밀번호가 틀립니다.");
            break;
          default:
            setModal("알 수 없는 오류가 발생하였습니다.");
            break;
        }
      } else {
        const {token, userID} = signInResponse.payload;
        sessionStorage.setItem("access_token", token);
        sessionStorage.setItem("user_id", userID);
        navigator("/");
        resetAll();
      }
    }
  };
  const resetAll = () => {
    resetEmail();
    resetPassword();
  };
  return (
    <LoginContainer>
      <FormContainer>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <Form>
          <FormField>
            <input
              type="email"
              placeholder={"이메일"}
              required
              value={email}
              onChange={setEmail}
            />
          </FormField>
          <FormField>
            <input
              type="password"
              placeholder={"비밀번호"}
              required
              value={password}
              onChange={setPassword}
            />
          </FormField>
        </Form>
        <LoginLink>
          <Link to={"/register"}>
            <p>아이디가 아직 없으신가요?</p>
          </Link>
        </LoginLink>
        <button onClick={signIn}>일하러 가기</button>
      </FormContainer>
      {modal}
    </LoginContainer>
  );
};

export default Login;
