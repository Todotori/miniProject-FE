import { RegisterContainer, FormContainer, Logo, Form, FormField, LoginLink } from "./styles";
import logo from "../../image/mainlogo.png";
import {Link} from "react-router-dom";

const Register = () =>
    <RegisterContainer>
        <FormContainer>
            <Logo>
                <img src={logo} alt="Logo"/>
            </Logo>
            <Form>
                <FormField>
                    <input type="text" placeholder={"아이디"} required/>
                </FormField>
                <FormField>
                    <input type="password" placeholder={"비밀번호"} required/>
                </FormField>
                <FormField>
                    <input type="password" placeholder={"비밀번호 확인"} required/>
                </FormField>
            </Form>
            <LoginLink>
                <Link to={"/login"}>
                    <p>이미 도토리이신가요?</p>
                </Link>
            </LoginLink>
            <button>도토리되기</button>
        </FormContainer>
    </RegisterContainer>;

export default Register;