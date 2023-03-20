import React, { useEffect } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

const TableCustom = () => {
  interface DataType {
    key: string;
    name: string;
    age: number;
  }
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,

    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,

    },
  ];
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },

  ];

  return (<>
   <Table columns={columns} dataSource={data} />
  </>
 
  ) ;
};

export default TableCustom;
