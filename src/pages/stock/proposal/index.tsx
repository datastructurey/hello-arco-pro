import React from 'react';
import {
  Button,
  Grid,
  Input,
  Select,
  Space,
  Table,
  TableColumnProps,
  Tabs,
} from '@arco-design/web-react';

// 表格区
function DataTable() {
  const columns: TableColumnProps[] = [
    {
      title: '备货编号',
      dataIndex: 'prepareInventoryCode',
      width: '150px',
      fixed: 'left',
    },
    {
      title: '平台',
      dataIndex: 'platform',
      width: '150px',
      fixed: 'left',
    },
    {
      title: 'SKU',
      dataIndex: 'skuCode',
      width: '150px',
      fixed: 'left',
    },
    {
      title: '二级类目',
      dataIndex: 'productCategoryName',
      width: '150px',
    },
    {
      title: '仓库属性',
      dataIndex: 'warehouseType',
      width: '150px',
    },
    {
      title: '国家/地区',
      dataIndex: 'countryCode',
      width: '150px',
    },
    {
      title: '总需求',
      dataIndex: 'requireQty',
      width: '150px',
    },
    {
      title: '在库在途在产',
      dataIndex: 'stockProductionTransitQty',
      width: '150px',
    },
    {
      title: '预估总销量',
      dataIndex: 'estimatedQty',
      width: '150px',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: '150px',
    },
    {
      title: '沟通方向',
      dataIndex: 'systemSuggestion',
      width: '150px',
    },
    {
      title: '备货批次',
      dataIndex: 'stockBatchNo',
      width: '150px',
    },
    {
      title: '创建人',
      dataIndex: 'createBy',
      width: '150px',
    },
    {
      title: '待审批人',
      dataIndex: 'approver',
      width: '150px',
    },
    {
      title: '计划部负责人',
      dataIndex: 'planningSpecialist',
      width: '150px',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      width: '150px',
    },
    {
      title: '操作',
      dataIndex: 'opt',
      width: '200px',
      align: 'center',
      fixed: 'right',
      render: () => (
        <Space size="small">
          <Button type="primary">详情</Button>
          <Button type="outline">审批记录</Button>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    },
    {
      key: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      email: 'kevin.sandra@example.com',
    },
    {
      key: '4',
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
      email: 'ed.hellen@example.com',
    },
    {
      key: '5',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
  ];

  return (
    <Table
      columns={columns}
      data={data}
      scroll={{ x: true, y: true }}
      border={{
        wrapper: true,
        cell: true,
      }}
    ></Table>
  );
}

// 操作按钮区
function OperateArea() {
  return (
    <div className="flex justify-between my-[16px]">
      <div></div>
      <Space size="small">
        <Button type="primary">批量确认</Button>
        <Button type="primary" status="danger">
          批量作废
        </Button>
        <Button type="primary">新增</Button>
        <Button type="primary">批量导入</Button>
        <Button type="primary">导出</Button>
        <Button type="primary">自定义列</Button>
      </Space>
    </div>
  );
}

// 过滤区
function FilterArea() {
  const { GridItem } = Grid;
  return (
    <Grid
      cols={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
      colGap={12}
      rowGap={16}
      className="mb-[16px]"
    >
      <GridItem>
        <Input placeholder="请输入备货编号" />
      </GridItem>
      <GridItem>
        <Select placeholder="请选择平台"></Select>
      </GridItem>
      <GridItem>
        <Input placeholder="请输入SKU" />
      </GridItem>
      <GridItem>
        <Input placeholder="请输入二级类目" />
      </GridItem>
      <GridItem>
        <Select placeholder="请选择仓库"></Select>
      </GridItem>
      <GridItem>
        <Select placeholder="请选择国家"></Select>
      </GridItem>
      <GridItem>
        <Input placeholder="请选择创建人" />
      </GridItem>
      <GridItem>
        <Select placeholder="请选择状态"></Select>
      </GridItem>
      <GridItem>
        <Input placeholder="请选择计划负责人" />
      </GridItem>
      <GridItem>
        <Select placeholder="请选择备货批次"></Select>
      </GridItem>
      <GridItem>
        <Input placeholder="请选择待审批人" />
      </GridItem>
    </Grid>
  );
}

export default function StockProposal() {
  const { TabPane } = Tabs;
  const TabsList = [
    '2025-01',
    '2025-02',
    '2025-03',
    '2025-04',
    '2025-05',
    '2025-06',
    '2025-07',
    '2025-08',
    '2025-09',
    '2025-10',
    '2025-11',
  ];

  return (
    <div>
      <FilterArea></FilterArea>
      <Tabs type="card-gutter" size="default">
        {TabsList.map((item, index) => {
          return <TabPane key={index} title={item}></TabPane>;
        })}
      </Tabs>
      <OperateArea></OperateArea>
      <DataTable></DataTable>
    </div>
  );
}
