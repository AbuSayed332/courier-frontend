import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../context/LanguageContext';
import api from '../../services/api';

const AgentManagement = () => {
  const { t } = useTranslation();
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newAgent, setNewAgent] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: 'bike'
  });

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    try {
      const response = await api.get('/admin/agents');
      setAgents(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAgent({ ...newAgent, [name]: value });
  };

  const addAgent = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/admin/agents', newAgent);
      setAgents([...agents, response.data]);
      setNewAgent({
        name: '',
        email: '',
        phone: '',
        vehicleType: 'bike'
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateAgentStatus = async (agentId, isActive) => {
    try {
      await api.patch(`/admin/agents/${agentId}`, { isActive });
      fetchAgents();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div>{t('loading')}...</div>;

  return (
    <div className="agent-management">
      <h2>{t('agent_management')}</h2>
      
      <div className="add-agent-form">
        <h3>{t('add_new_agent')}</h3>
        <form onSubmit={addAgent}>
          <input
            type="text"
            name="name"
            value={newAgent.name}
            onChange={handleInputChange}
            placeholder={t('name')}
            required
          />
          <input
            type="email"
            name="email"
            value={newAgent.email}
            onChange={handleInputChange}
            placeholder={t('email')}
            required
          />
          <input
            type="tel"
            name="phone"
            value={newAgent.phone}
            onChange={handleInputChange}
            placeholder={t('phone')}
            required
          />
          <select
            name="vehicleType"
            value={newAgent.vehicleType}
            onChange={handleInputChange}
          >
            <option value="bike">{t('bike')}</option>
            <option value="car">{t('car')}</option>
            <option value="van">{t('van')}</option>
            <option value="truck">{t('truck')}</option>
          </select>
          <button type="submit">{t('add_agent')}</button>
        </form>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>{t('name')}</th>
            <th>{t('email')}</th>
            <th>{t('phone')}</th>
            <th>{t('vehicle')}</th>
            <th>{t('status')}</th>
            <th>{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {agents.map(agent => (
            <tr key={agent._id}>
              <td>{agent.name}</td>
              <td>{agent.email}</td>
              <td>{agent.phone}</td>
              <td>{t(agent.vehicleType)}</td>
              <td>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={agent.isActive}
                    onChange={(e) => updateAgentStatus(agent._id, e.target.checked)}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                <button className="btn-view">{t('view')}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentManagement;