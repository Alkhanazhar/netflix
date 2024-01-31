export const Input = ({ type, placeholder, onChange }) => {
  return (
    <>
      <input
        type={type}
        className="p-4 w-full bg-black bg-opacity-60 my-4"
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};
