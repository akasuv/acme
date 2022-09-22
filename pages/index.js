export default function Home() {
  const handleClick = () => {
    throw new Error("Test Sentry");
  };
  return <div onClick={handleClick}>div</div>;
}
