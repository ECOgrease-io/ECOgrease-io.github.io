import { app } from "./config.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

function showMsg(msg) {
    const msgElement = document.getElementById("msg");
    msgElement.innerHTML = msg;
    msgElement.style.visibility = "visible";
    setTimeout(() => {
        msgElement.style.visibility = "hidden";
        msgElement.innerHTML = "";
    }, 2000)
}

const
    createB = document.getElementById("create"),
    loginB = document.getElementById("login")
    ;

createB.addEventListener("click", () => {
    const email = document.getElementById('createEmail').value;
    const password = document.getElementById('createPassword').value;
    const name = document.getElementById('createName').value;

    const auth = getAuth(app);
    
    if (!email || !password) {
        showMsg("Todos os campos são obrigatórios.");
    } else {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                email = "";
                password = "";
                name = "";

                showMsg("Cadastrado concluído, agora é só realizar o login!");
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode == 'auth/email-already-in-use') {
                showMsg('Email já cadastrado');
            } else if (errorCode == "auth/weak-password") {
                showMsg('Senha muito fraca');
            } else if (errorCode == "auth/invalid-email") {
                showMsg('Email inválido');
            }
            else {
                showMsg("Não foi possivel fazer o cadastro");
                console.error('Error creating account: ' + error)
            }
        });
    }
})

loginB.addEventListener("click", () => {
    const
        email = document.getElementById('loginEmail').value,
        password = document.getElementById('loginPassword').value;
    
        if (!email  || !password) {
            showMSG("Todos os campos são obrigatórios");
        } else {
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                showMsg("Login realizado com sucesso!");
                localStorage.setItem("userEmail", email);
                email = "";
                password = "";
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode == 'auth/invalid-email') {
                    showMSG('Email inválido');
                } else if (errorCode == 'auth/invalid-credential') {
                    showMSG('Credenciais inválidas')
                } else {
                    showMSG("Não foi possível fazer o login");
                    console.error("Error signing in:", error.code);
                }
            })
        }
}
)
