export default function SearchBox({ value, onFilter }) {
  const handeChange = (event) => {
    onFilter(event.target.value);
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={handeChange} />
    </div>
  );
}
