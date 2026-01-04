import { Table, Tag, Input, Select, Space } from "antd";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCampaigns } from "../hooks/useCampaigns";
import { CAMPAIGN_STATUS_MAP } from "../utils/status";
import type { Campaign } from "../types/campaign.types";
import Topbar from "../components/layout/Topbar";

const { Search } = Input;

export default function Campaigns() {
  const { data, loading } = useCampaigns();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | undefined>(
    undefined
  );

  const filteredData = useMemo(() => {
    return data.filter((campaign: Campaign) => {
      const matchesSearch = campaign.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesStatus = statusFilter
        ? campaign.status === statusFilter
        : true;

      return matchesSearch && matchesStatus;
    });
  }, [data, searchText, statusFilter]);

  return (
    <>
      <Topbar pageTitle="Campaign" />

      {/* 🔍 Search & Filter Bar */}
      <Space style={{ marginBottom: 16 }}>
        <Search
          placeholder="Search campaigns"
          allowClear
          style={{ width: 260 }}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Select
          placeholder="Filter by status"
          allowClear
          style={{ width: 200 }}
          onChange={(value) => setStatusFilter(value)}
          options={[
            { label: "Active", value: "active" },
            { label: "Paused", value: "paused" },
            { label: "Completed", value: "completed" },
          ]}
        />
      </Space>

      {/* 📋 Table */}
      <Table
        loading={loading}
        rowKey="id"
        dataSource={filteredData}
        pagination={{ pageSize: 7 }}
        onRow={(record: Campaign) => ({
          onClick: () => navigate(`/campaigns/${record?.id}`),
          style: { cursor: "pointer" },
        })}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            render: (name) => <strong>{name}</strong>,
          },
          {
            title: "Status",
            dataIndex: "status",
            render: (status: string) => {
              const config = CAMPAIGN_STATUS_MAP[status];
              return <Tag color={config?.color}>{config?.label}</Tag>;
            },
          },
          {
            title: "Budget",
            dataIndex: "budget",
            render: (v) => `$${v}`,
          },
          {
            title: "Daily Budget",
            dataIndex: "daily_budget",
            render: (v) => `$${v}`,
          },
        ]}
      />
    </>
  );
}
