import './style.css';
import Item from '../Item';

const List = () => {
  return (
      <ul className="app-list list-group">
        <Item/>
        <Item/>
        <Item/>
      </ul>
  );
};
export {List};