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

import {db} from 'src/firebase';

const DragHandle = SortableHandle(() => <span className="reference-drag-handle">::</span>); // This can be any component you want

const SortableItem = SortableElement(({index, onRemove, value}) => {
  return (
    <div className="reference-list-item">
      <DragHandle />
      {value}
      <button onClick={onRemove}>Remove{index}</button>
    </div>
  );
});

const SortableList = SortableContainer(({items, onRemove}) => {
  return (
    <div className="reference-list">
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          value={value}
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
      items: [],
      removeSelected: true,
      disabled: false,
      crazy: false,
      stayOpen: false,
      value: [],
      rtl: false,
    };
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

  render() {
    const { input, meta, field, ...props} = this.props;
    const { referenceModel, referenceSearchLabel } = field;

    const items = input.value || [];

    return (
      <div>
        <Async
          single
          loadOptions={(input) => this.getCollections(input)}
          onChange={(value) => this.handleSelectChange(value)}
          placeholder={`Type to search for ${referenceModel} (${referenceSearchLabel})`}
        />
        <SortableList
          onRemove={index => this.remove(index)}
          items={items}
          onSortEnd={(state) => this.onSortEnd(state)}
          useDragHandle={true}
        />
      </div>
    );
  }
}


export default dripFormField('tags')(Reference);