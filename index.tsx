import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import persons_data from './data/sample_data';
import {
  TreeList,
  TreeListToolbar,
  mapTree,
  extendDataItem,
  removeItems,
  modifySubItems,
  TreeListColumnProps,
  TreeListTextEditor,
  TreeListBooleanEditor,
  TreeListItemChangeEvent,
  TreeListExpandChangeEvent,
} from '@progress/kendo-react-treelist';
import { Person } from './interfaces/person';

const subItemsField: string = 'children';
const expandField: string = 'expanded';
const editField: string = 'inEdit';
const data_item_key: string = '_id';

const App = () => {
  const [gridData, setGridData] = React.useState<Person[]>([]);
  const [IsEditMode, setIsEditMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    setGridData(persons_data);
  }, []);

  const process = (grid_data: any) => {
    if (IsEditMode) {
      return mapTree(grid_data, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
          [expandField]: true,
          [editField]: true,
        })
      );
    } else {
      return mapTree(persons_data, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
          [expandField]: true,
        })
      );
    }
  };

  const onItemChange = React.useCallback(
    (event) => {
      const field: any = event.field;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const updatedData = mapTree(gridData, subItemsField || '', (item) =>
        item[data_item_key] === event.dataItem[data_item_key]
          ? extendDataItem(item, subItemsField || '', { [field]: event.value })
          : item
      );
      setGridData(updatedData);
    },
    [gridData]
  );

  const btnClickToogleEditView = () => {
    setIsEditMode(!IsEditMode);
  };

  const columns: Array<TreeListColumnProps | {}> = [
    { field: '_id', title: 'ID', width: '280px' },
    { field: 'index', title: 'index', width: '380px' },
    { field: 'guid', title: 'Guid', width: '380px' },
    {
      field: 'age',
      title: 'Age',
      width: '380px',
      editCell: TreeListTextEditor,
      expandable: true,
    },
    {
      field: 'eyeColor',
      title: 'Eye Color',
      width: '380px',
      editCell: TreeListTextEditor,
      expandable: true,
    },
    {
      field: 'firstname',
      title: 'First name',
      width: '380px',
      editCell: TreeListTextEditor,
      expandable: true,
    },
    {
      field: 'lastname',
      title: 'Last name',
      width: '380px',
      editCell: TreeListTextEditor,
      expandable: true,
    },
    {
      field: 'gender',
      title: 'gender',
      width: '380px',
      editCell: TreeListTextEditor,
      expandable: true,
    },
    {
      field: 'company',
      title: 'company',
      width: '380px',
      editCell: TreeListTextEditor,
      expandable: true,
    },
    {
      field: 'email',
      title: 'email',
      width: '380px',
      editCell: TreeListTextEditor,
      expandable: true,
    },
    {
      field: 'phone',
      title: 'phone',
      width: '380px',
      editCell: TreeListTextEditor,
      expandable: true,
    },
    {
      field: 'address_street',
      title: 'address_street',
      width: '380px',
      editCell: TreeListTextEditor,
      expandable: true,
    },
    {
      field: 'address_city',
      title: 'address_city',
      width: '380px',
      editCell: TreeListTextEditor,
      expandable: true,
    },
    {
      field: 'address_state',
      title: 'address_state',
      width: '380px',
      editCell: TreeListTextEditor,
      expandable: true,
    },
    {
      field: 'about',
      title: 'about',
      width: '380px',
      editCell: TreeListTextEditor,
      expandable: true,
    },
    { field: 'registered', title: 'registered', width: '380px' },
    { field: 'latitude', title: 'latitude', width: '380px' },
    { field: 'longitude', title: 'longitude', width: '380px' },
    { field: 'company', title: 'company', width: '380px' },
  ];

  return (
    <div>
      <h3>Sample Kendo Treelist Edit Demo</h3>
      <div>
        <button className="btn" onClick={btnClickToogleEditView}>
          {IsEditMode ? 'Toogle to Default View' : 'Edit'}
        </button>
      </div>
      <div className="grid_wrapper">
        <TreeList
          style={{ maxHeight: '450px', overflow: 'auto' }}
          data={process(gridData)}
          editField={editField}
          expandField={expandField}
          subItemsField={subItemsField}
          onItemChange={onItemChange}
          columns={columns}
        />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
