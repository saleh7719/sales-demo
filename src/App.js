import React from 'react';
import './App.css';

function App() {
  const assets = [
    { name: "Encryption_Module_X", risk: "Critical", status: "Active", alerts: 142 },
    { name: "User_Auth_Node", risk: "Low", status: "Secure", alerts: 0 },
    { name: "Cloud_Inbound_API", risk: "Medium", status: "Monitoring", alerts: 24 }
  ];

  return (
    <div className="obsidian-layout">
      {/* Sidebar Navigation */}
      <aside className="obsidian-sidebar">
        <div className="sidebar-header">Command_Ctr</div>
        <div className="nav-link active">Security Monitor</div>
        <div className="nav-link">Resource Hub</div>
        <div className="nav-link">Threat Logs</div>
        <div className="nav-link">Settings</div>
      </aside>

      {/* Main Content Area */}
      <main className="obsidian-main">
        <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h1 style={{fontSize: '28px', margin: 0}}>Operational Intelligence</h1>
          <button className="btn-gold">Execute System Scan</button>
        </header>

        {/* Highlight Cards */}
        <div className="info-row">
          <div className="obsidian-card">
            <div className="card-label">Threat Level</div>
            <div className="card-value" style={{color: 'var(--accent-red)'}}>HIGH</div>
            <div style={{fontSize: '11px', color: 'var(--text-gray)'}}>Isolation Protocol Required</div>
          </div>
          <div className="obsidian-card">
            <div className="card-label">Active Agents</div>
            <div className="card-value">1,402</div>
            <div style={{fontSize: '11px', color: 'var(--accent-gold)'}}>Online & Secure</div>
          </div>
          <div className="obsidian-card">
            <div className="card-label">Network Load</div>
            <div className="card-value">42%</div>
            <div style={{fontSize: '11px', color: 'var(--text-gray)'}}>Optimized Throughput</div>
          </div>
        </div>

        {/* Data List Section */}
        <div className="data-panel">
          <h2 style={{fontSize: '18px', marginBottom: '25px'}}>Active Asset Monitoring</h2>
          <table className="elegant-table">
            <thead>
              <tr>
                <th>RESOURCE NAME</th>
                <th>RISK LEVEL</th>
                <th>STATUS</th>
                <th>THREAT_INDEX</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, i) => (
                <tr key={i}>
                  <td style={{fontWeight: '700'}}>{asset.name}</td>
                  <td>
                    <span style={{color: asset.risk === 'Critical' ? 'var(--accent-red)' : '#00ff88'}}>
                      ● {asset.risk}
                    </span>
                  </td>
                  <td><span className="status-badge">{asset.status}</span></td>
                  <td style={{color: asset.alerts > 0 ? 'var(--accent-red)' : 'white'}}>
                    {asset.alerts} Detection Events
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;