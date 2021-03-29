import React from 'react';
import ReactDOM from 'react-dom';
import '../style/login.css'
class Login extends React.Component {
    componentDidMount(){
        console.log(111);
        fetch("http://localhost:4000",{
            headers:{
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res=>res.json())
        .then(json=>console.log(json))
    }
    render() {
            const loginForm = document.querySelector("form.login");
            const loginBtn = document.querySelector("label.login");
            const signupBtn = document.querySelector("label.signup");
            const signupLink = document.querySelector("form .signup-link a");
        const handleLogin = () =>{
            const loginForm = document.querySelector("form.login");
            ReactDOM.findDOMNode(loginForm).style.marginLeft = "0%";
        }
        const handleSignup = ()=>{
            console.log(1);
            const loginForm = document.querySelector("form.login");
            ReactDOM.findDOMNode(loginForm).style.marginLeft = "-50%";
        }
        return (
            <div className="wrapper">
                <div className="title-text">
                    <div className="title login">SGVA</div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input type="radio" name="slide" id="login" defaultChecked />
                        <input type="radio" name="slide" id="signup" />
                        <label onClick={handleLogin} htmlFor="login" className="slide login" >Đăng Nhập</label>
                        <label onClick={handleSignup}  htmlFor="signup" className="slide signup" >Đăng Ký</label>
                        <div className="slider-tab" />
                    </div>
                    <div className="form-inner">
                        <form action="#" className="login">
                            <div className="field">
                                <input type="text" placeholder="Nhập Email" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Nhập Mật Khẩu" required />
                            </div>
                            <div className="pass-link">
                                <a>Quên mật khẩu</a>
                            </div>
                            <div className="field btn">
                                <button>Đăng nhập</button>
                            </div>
                            <div className="signup-link">Vẫn Chưa Phải Thành Viên? <a>Đăng Ký Ngay!</a>
                            </div>
                        </form>

                        <form action="#" class="signup">
                            <div class="field">
                                <input type="text" placeholder="Nhập Email" required/>
                            </div>
                            <div class="field">
                                <input type="password" placeholder="Nhập Mật Khẩu" required />
                            </div>
                            <div class="field">
                                <input type="password" placeholder="Xác Nhận Mật Khẩu" required />
                            </div>
                            <div class="field">
                                <input type="text" placeholder="Nhập SDT" required/>
                            </div>
                            <div class="field btn">
                                <button>Đăng ký</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default Login;