export default function Name({ params }: { params: { name: string } }) {
  const { name } = params;

  return <h1>{name} Page</h1>;
}
