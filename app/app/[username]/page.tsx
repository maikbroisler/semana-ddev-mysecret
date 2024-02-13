interface UserPageParams {
  params: {
    username: string
  }
}

export default function UserPage({ params }: UserPageParams) {
  return (
    <>
      <h1>o que você quer dizer</h1>
      <p>usuario: {params.username}</p>
    </>
  );
}