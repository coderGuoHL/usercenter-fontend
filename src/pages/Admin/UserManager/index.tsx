import type {ActionType, ProColumns} from '@ant-design/pro-components';
import {ProTable} from '@ant-design/pro-components';
import {useRef} from 'react';
import {search} from "@/services/ant-design-pro/api";
import {Image, Space, Tag} from "antd";

export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};


const columns: ProColumns<API.CurrentUser>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 48,
  },
  {
    title: '账户名',
    dataIndex: 'userAccount',

    ellipsis: true,
  },
  {
    title: '用户名',
    dataIndex: 'username',

    ellipsis: true,
  },
  {
    title: '用户头像',
    dataIndex: 'avatarUrl',
    ellipsis: true,
    render: (_, record) => (
      <Image src={record.avatarUrl} width={45} />
    )
  },
  {
    title: '性别',
    dataIndex: 'gender',
    ellipsis: true,
  },
  {
    title: 'email',
    dataIndex: 'email',
    ellipsis: true,
  },
  {
    title: '用户状态',
    dataIndex: 'userStatus',
    ellipsis: true,
    valueType: 'select',
    valueEnum: {
      0: {
        text: '有效用户',
        status: 'Success',
      },
      1: {
        text: '失效用户',
        status: 'Error',
        disabled: true
      }
    },
  },
  {
    title: '用户角色',
    dataIndex: 'userRole',
    ellipsis: true,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record: any) => {
      const userRoleMap = {
        0: { name:"普通用户", color: 'green' },
        1: { name:"管理员", color: 'red' }
      };
      return (<Space>
          <Tag color={userRoleMap[record.userRole].color} key={userRoleMap[record.userRole].name}>
            {userRoleMap[record.userRole].name}
          </Tag>
      </Space>
    )},
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    ellipsis: true,
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    ellipsis: true,
  },


];

export default () => {
  const actionRef = useRef<ActionType>();
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <ProTable<API.CurrentUser>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params = {}, sort, filter) => {
        const userList = await search();
        return {
          data: userList
        };
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="用户列表"
    />
  );
};
