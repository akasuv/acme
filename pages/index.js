export default function Home() {
  const handleClick = () => {
    throw new Error("Test Sentry alpha");
  };
  return <div onClick={handleClick}>div</div>;
}
