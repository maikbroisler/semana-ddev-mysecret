import Card from "@/app/components/card";

export default function MessagesPage() {
  return (
    <>
        <h1>perguntas e mensagens anônimas</h1>
        
      <ul>
        <li>
          <a href="/app/dash/messages">
            <span>mensagem 1</span>
          </a>
        </li>
        <li>
          <a href="/app/dash/messages">
            <span>mensagem 2</span>
          </a>
        </li>
        <li>
          <a href="/app/dash/messages">
            <span>mensagem 3</span>
          </a>
        </li>
      </ul>
      <Card />
    </>
  )
}