// Checkbox.js
import React from 'react';
import { dripFormField } from 'react-drip-form';
import {Async} from 'react-select'

import 'react-select/dist/react-select.css';

import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove,
} from 'react-sortable-hoc';

import schemas from 'src/schemas';
import {db} from 'src/firebase';

const showData = (id, data, ui) => {
  const current = data[id];
  const view = {};

  // ui.map(field => view[field] = current[field]);

  return current;
}

const DragHandle = SortableHandle(() => <span className="reference-drag-handle">::</span>); // This can be any component you want

const SortableItem = SortableElement(({index, onRemove, item, ui}) => {
  return (
    <div className="reference-list-item">
      <DragHandle />
      <div className="content">
        <div className="list-header">
          {ui.map(prop => <p className="col">{prop}</p>)}
        </div>
        <div className="list-content">
          {ui.map(prop => <p className="col">{item[prop]}</p>)}
        </div>
      </div>
      <button onClick={onRemove}>Remove{index}</button>
    </div>
  );
});

const SortableList = SortableContainer(({items, onRemove, dbData, ui}) => {
  return (
    <div className="reference-list">
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          item={showData(value,dbData)}
          ui={ui}
          onRemove={() => onRemove(index)}
       />
      ))}
    </div>
  );
});

class Reference extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      loaded: false,
      dbData: [],
      items: [],
      removeSelected: true,
      disabled: false,
      crazy: false,
      stayOpen: false,
      value: [],
      rtl: false,
    };
  }

  _getRefData(){

  }
  handleSelectChange (value) {
    const { input, meta, ...props} = this.props;
    const items = input.value || [];


    items.push(value.value);
    input.onChange(items);
  }
  remove(index) {
    const { input, meta, ...props} = this.props;
    const items = input.value || [];

    items.splice(index, 1);
    input.onChange(items);
  }

  onSortEnd({oldIndex, newIndex}) {
    const { input, meta, ...props} = this.props;
    const items = input.value || [];

    input.onChange(arrayMove(items, oldIndex, newIndex));
  }

  getCollections (input) {
    const { field } = this.props;
    const { referenceModel, referenceSearchLabel } = field;

    if (!input) {
      return Promise.resolve({ options: [] });
    }
    return db.get(`/${referenceModel}`).then(res => {
      const data = res.val();
      

      this.setState({dbData: data});

      const dropdownData = Object.keys(data).map(key => {
        return {
          label: data[key][referenceSearchLabel],
          value: key
        }
      })

      return {
        options: dropdownData
      }

    })
    .catch(error => {
      console.log(error);
    })
  }
  componentDidMount(){
    const { field, input } = this.props;
    const { referenceModel, referenceSearchLabel } = field;

    if(input.value){
      db.get(`/${referenceModel}`).then(res => {
        const data = res.val();
        this.setState({dbData: data, loaded: true});
      })
    } else {
      this.setState({loaded: true});
    }
  }
  render() {
    const { input, meta, field, ...props} = this.props;
    const { referenceModel, referenceSearchLabel } = field;

    const items = input.value || [];

    return !this.state.loaded ? <p>loading</p> : (
      <div className="reference-field">
        <Async
          single
          loadOptions={(input) => this.getCollections(input)}
          onChange={(value) => this.handleSelectChange(value)}
          placeholder={`Type to search for ${referenceModel} (${referenceSearchLabel})`}
        />
        <SortableList
          onRemove={index => this.remove(index)}
          items={items}
          ui={schemas[referenceModel].ui}
          dbData={this.state.dbData}
          onSortEnd={(state) => this.onSortEnd(state)}
          useDragHandle={true}
        />
      </div>
    );
  }
}


export default dripFormField('tags')(Reference);