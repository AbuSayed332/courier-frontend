import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../context/LanguageContext';
import api from '../../services/api';
import Chart from 'react-apexcharts';

const Reports = () => {
  const { t } = useTranslation();
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState({
    start: new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    fetchReportData();
  }, [dateRange]);

  const fetchReportData = async () => {
    try {
      const response = await api.get('/admin/reports', {
        params: {
          startDate: dateRange.start,
          endDate: dateRange.end
        }
      });
      setReportData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (loading) return <div>{t('loading')}...</div>;
  if (!reportData) return <div>{t('no_data_available')}</div>;

  const statusChartOptions = {
    chart: {
      type: 'bar'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: reportData.statusDistribution.map(item => t(item.status))
    },
    yaxis: {
      title: {
        text: t('count')
      }
    },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
  };

  const statusChartSeries = [{
    name: t('parcels'),
    data: reportData.statusDistribution.map(item => item.count)
  }];

  return (
    <div className="reports">
      <h2>{t('reports')}</h2>
      
      <div className="date-range">
        <input
          type="date"
          value={dateRange.start}
          onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
        />
        <span>{t('to')}</span>
        <input
          type="date"
          value={dateRange.end}
          onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
        />
        <button onClick={fetchReportData}>{t('apply')}</button>
      </div>
      
      <div className="stats-cards">
        <div className="stat-card">
          <h3>{t('total_parcels')}</h3>
          <p>{reportData.totalParcels}</p>
        </div>
        <div className="stat-card">
          <h3>{t('delivered')}</h3>
          <p>{reportData.deliveredCount}</p>
        </div>
        <div className="stat-card">
          <h3>{t('revenue')}</h3>
          <p>{reportData.totalRevenue} {t('currency')}</p>
        </div>
        <div className="stat-card">
          <h3>{t('active_agents')}</h3>
          <p>{reportData.activeAgents}</p>
        </div>
      </div>
      
      <div className="chart-container">
        <h3>{t('status_distribution')}</h3>
        <Chart
          options={statusChartOptions}
          series={statusChartSeries}
          type="bar"
          height={350}
        />
      </div>
      
      <div className="top-agents">
        <h3>{t('top_performing_agents')}</h3>
        <table>
          <thead>
            <tr>
              <th>{t('agent')}</th>
              <th>{t('deliveries')}</th>
              <th>{t('success_rate')}</th>
            </tr>
          </thead>
          <tbody>
            {reportData.topAgents.map(agent => (
              <tr key={agent._id}>
                <td>{agent.name}</td>
                <td>{agent.deliveryCount}</td>
                <td>{agent.successRate}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;