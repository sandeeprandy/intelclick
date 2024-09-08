import React, { useState, useEffect } from 'react';
import { Table, Space } from 'antd';
import { Link } from 'react-router-dom';

const indianCapitals = [
      { state: "Andhra Pradesh", capital: "Amaravati", population: "5.2M", timezone: "5.5", temperature: "28°C" },
      { state: "Arunachal Pradesh", capital: "Itanagar", population: "36K", timezone: "5.5", temperature: "22°C" },
      { state: "Assam", capital: "Dispur", population: "1.2M", timezone: "5.5", temperature: "26°C" },
      { state: "Bihar", capital: "Patna", population: "2.5M", timezone: "5.5", temperature: "27°C" },
      { state: "Chhattisgarh", capital: "Raipur", population: "1.1M", timezone: "5.5", temperature: "29°C" },
      { state: "Goa", capital: "Panaji", population: "115K", timezone: "5.5", temperature: "30°C" },
      { state: "Gujarat", capital: "Gandhinagar", population: "208K", timezone: "5.5", temperature: "27°C" },
      { state: "Haryana", capital: "Chandigarh", population: "1.1M", timezone: "5.5", temperature: "25°C" },
      { state: "Himachal Pradesh", capital: "Shimla", population: "169K", timezone: "5.5", temperature: "15°C" },
      { state: "Jharkhand", capital: "Ranchi", population: "1.1M", timezone: "5.5", temperature: "24°C" },
      { state: "Karnataka", capital: "Bangalore", population: "12M", timezone: "5.5", temperature: "23°C" },
      { state: "Kerala", capital: "Thiruvananthapuram", population: "1.7M", timezone: "5.5", temperature: "27°C" },
      { state: "Madhya Pradesh", capital: "Bhopal", population: "1.9M", timezone: "5.5", temperature: "26°C" },
      { state: "Maharashtra", capital: "Mumbai", population: "20.4M", timezone: "5.5", temperature: "27°C" },
      { state: "Manipur", capital: "Imphal", population: "268K", timezone: "5.5", temperature: "21°C" },
      { state: "Meghalaya", capital: "Shillong", population: "143K", timezone: "5.5", temperature: "17°C" },
      { state: "Mizoram", capital: "Aizawl", population: "293K", timezone: "5.5", temperature: "20°C" },
      { state: "Nagaland", capital: "Kohima", population: "100K", timezone: "5.5", temperature: "19°C" },
      { state: "Odisha", capital: "Bhubaneswar", population: "885K", timezone: "5.5", temperature: "28°C" },
      { state: "Punjab", capital: "Chandigarh", population: "1.1M", timezone: "5.5", temperature: "25°C" },
      { state: "Rajasthan", capital: "Jaipur", population: "3.1M", timezone: "5.5", temperature: "29°C" },
      { state: "Sikkim", capital: "Gangtok", population: "100K", timezone: "5.5", temperature: "16°C" },
      { state: "Tamil Nadu", capital: "Chennai", population: "10M", timezone: "5.5", temperature: "29°C" },
      { state: "Telangana", capital: "Hyderabad", population: "10M", timezone: "5.5", temperature: "27°C" },
      { state: "Tripura", capital: "Agartala", population: "522K", timezone: "5.5", temperature: "26°C" },
      { state: "Uttar Pradesh", capital: "Lucknow", population: "3.5M", timezone: "5.5", temperature: "27°C" },
      { state: "Uttarakhand", capital: "Dehradun", population: "578K", timezone: "5.5", temperature: "23°C" },
      { state: "West Bengal", capital: "Kolkata", population: "14.8M", timezone: "5.5", temperature: "28°C" }
    ];

const Home = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCities(indianCapitals);
  }, []);

  const columns = [
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'Capital',
      dataIndex: 'capital',
      key: 'capital',
      render: (capital, record) => <Link to={`/city/${record.capital}`}>{capital}</Link>,
    },
    {
      title: 'Population',
      dataIndex: 'population',
      key: 'population',
    },
    {
      title: 'Time Zone',
      dataIndex: 'timezone',
      key: 'timezone',
    },
    {
      title: 'Temperature',
      dataIndex: 'temperature',
      key: 'temperature',
    },
  ];

  return (
    <div>
      <h1>Indian Capitals</h1>
      <Table dataSource={cities} columns={columns} pagination={false} />
    </div>
  );
};

export default Home;