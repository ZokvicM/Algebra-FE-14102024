import { useNavigate } from "react-router-dom";

export default function Komponenta2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <h2>Welcome to Komponenta2!</h2>
      <p>Ovo je primjer koristenja React Router-a.</p>
      <p>Sad sam na Komponenti2.</p>
      <button onClick={handleClick}>Home</button>
    </>
  );
}