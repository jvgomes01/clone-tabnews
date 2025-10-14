export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://wallpapercave.com/wp/iy77JdQ.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>Oi meu amor, Te amo muito 💖</h1>
      <img
        src="https://img2.lovecell.com.br/c6a3128fa49362134e9770e615f52e72762e22583dc31d8369981386a65f81f8.webp"
        alt="Flor"
        width={300}
        height={300}
        style={{ borderRadius: "10px", marginBottom: "20px" }}
      />
      <h2>Uma flor pra outra flor 🌹</h2>
    </div>
  );
}
