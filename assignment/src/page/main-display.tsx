import React, { useEffect, useState } from "react";
import { Pagination, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { getUser } from "../services/apiReq";
import { error } from "console";

const TableCustom = () => {
  interface User {
    name: string;
    user_name: string;
    thumb_icon: string;
  }
  interface tableParam {
    page: Number;
    result: Number;
  }
  const [listUser, setListUser] = useState<Array<User>>([]);
  const [tableParams, setTableParams] = useState<tableParam>({
    page: 1,
    result: 10,
  });
  useEffect(() => {
    getUser(tableParams.page, tableParams.result)
      .then((res) => {
        console.log(res.data.results);
        let tempArr: Array<User> = [];
        res.data.results.forEach((element: any) => {
          let tempUser: User = {
            name:
              element.name.first +
              " " +
              element.name.last +
              " " +
              element.name.title,
            user_name: element.login.username,
            thumb_icon: element.picture.thumbnail,
          };
          tempArr.push(tempUser);
        });
        setListUser(tempArr);
        console.log("temp", tempArr);
      })
      .catch(() => {
        console.log("loi roi");
      });
  }, [tableParams]);

  const columns: ColumnsType<User> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "User Name",
      dataIndex: "user_name",
      key: "user_name",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumb_icon",
      key: "thumb_icon",
      render: (text) => <img src={text} alt="thumbnail" />,
    },
  ];

  const handleChangeTable = (page: Number, pageSize: Number) => {
    setTableParams({
      page: page,
      result: pageSize,
    });
  };

  return (
    <div
      style={{
        margin: "30px",
        // marginTop:"30px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Table
        columns={columns}
        dataSource={listUser}
        scroll={{ y: "calc(100vh - 200px)" }}
        pagination={false}
      />
      <Pagination
        style={{ marginTop: "10px" }}
        total={100}
        onChange={(page, pageSize) => {
          handleChangeTable(page, pageSize);
        }}
      />
    </div>
  );
};

export default TableCustom;
