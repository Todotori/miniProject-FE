import { RegisterContainer, FormContainer, Logo, Form, FormField, LoginLink } from "./styles";
import logo from "../../image/mainlogo.png";
import {Link} from "react-router-dom";
import useInput from "../../hooks/useInput";

const Register = () => {

    return <RegisterContainer>
        <FormContainer>
            <Logo>
                <img src={logo} alt="Logo"/>
            </Logo>
            <Form>
                <FormField>
                    <input type="email" placeholder={"이메일"} required/>
                    <button>중복확인</button>
                </FormField>
                <FormField>
                    <input type="password" placeholder={"비밀번호"} required/>
                </FormField>
                <FormField>
                    <input type="password" placeholder={"비밀번호 확인"} required/>
                </FormField>
                <FormField>
                    <input type="text" placeholder={"이름"} required/>
                </FormField>
                <FormField>
                    <textarea placeholder={"자기소개"}/>
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
}

export default Register;