import Info from '../Info';
import './style.css';
import List from '../List';
import AddForm from '../AddForm';
import SearchPanel from '../SearchPanel';
import Filter from '../Filter';

const App = () => {
  return (
      <div className="app">
        <Info/>
        <div className="search-panel">
          <SearchPanel/>
          <Filter/>
        </div>
        <List/>
        <AddForm/>
      </div>
  );

};
export {App};