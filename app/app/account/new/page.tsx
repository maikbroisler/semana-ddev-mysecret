export default function NewAccountPage() {
  return (
    <div>
      <h1>Login</h1>
      <p>perguntas e mensagens anônimas</p>
      <FormEmail />
      <button>voltar</button>
    </div>
  );
}

function FormEmail() {
  return (
    <>
      <input type="email" placeholder="Informe seu email" />
      <button>continuar</button>
    </>
  )
}

function FormPassword() {
  return (
    <>
      <input type="email" placeholder="Informe sua senha" />
      <button>continuar</button>
    </>
  )
}

function FormProfile() {
  return (
    <>
      <input type="text" placeholder="informe seu nome" />
      <input type="text" placeholder="informe seu usuário" />
      <FormAvatar />
      <button>continuar</button>
    </>
  );
}

function FormAvatar() {
  return (
    <>
      <ul>
        <li>avatar 1</li>
      </ul>
    </>
  );
}