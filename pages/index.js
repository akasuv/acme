export default function Home() {
  const handleClick = () => {
    throw new Error("Sentry Error Detected");
  };
  return <h1 onClick={handleClick}>TEST</h1>;
}
