export const Filter = ({ onInput }) => {
  return (
    <label>
      Find contacts by Name
      <input type="text" name="filter" onChange={e => onInput(e)}></input>
    </label>
  );
};
