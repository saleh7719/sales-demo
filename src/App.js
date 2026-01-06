import React from 'react';
import './App.css';

function App() {
  const assets = [
    { name: 'Global Firewall API', risk: 'Critical', threats: 164, status: '#ef4444' },
    { name: 'Auth Node Alpha', risk: 'Secure', threats: 0, status: '#10b981' },
    { name: 'Database Encryption', risk: 'Medium', threats: 24, status: '#f59e0b' }
  ];

  return (
    <div className="dashboard-shell">
      <aside className="tech-sidebar">
        <div className="side-icon active">📊</div>
        <div className="side-icon">🛡️</div>
        <div className="side-icon">📡</div>
        <div className="side-icon">⚙️</div>
      </aside>

      <main className="main-hud">
        <div className="hud-header">
          <h1 style={{fontSize: '32px', margin: 0}}>Operational <span style={{color: 'var(--neon-emerald)'}}>Matrix</span></h1>
          <span style={{color: '#64748b', fontSize: '13px'}}>System integrity: 98.4% • Last sync: Just now</span>
        </div>

        <div className="metrics-row">
          <div className="metric-box">
            <label>Total Assets</label>
            <div className="big-num">06</div>
            <div style={{color: 'var(--neon-emerald)'}}>▲ All Nodes Active</div>
          </div>
          <div className="metric-box">
            <label>Open Vulnerabilities</label>
            <div className="big-num" style={{color: '#ef4444'}}>322</div>
            <div style={{color: '#ef4444'}}>▼ Action Required</div>
          </div>
          <div className="metric-box">
            <label>Threat Prevention</label>
            <div className="big-num">1.2k</div>
            <div style={{color: '#64748b'}}>Last 24 hours</div>
          </div>
        </div>

        <div className="security-list">
          <div className="cyber-tr" style={{background: '#1a1a1e', fontWeight: 'bold', fontSize: '12px', color: '#64748b'}}>
            <div>TARGET_ASSET</div>
            <div>THREAT_LEVEL</div>
            <div>INCIDENTS</div>
            <div>PROTOCOL</div>
          </div>
          
          {assets.map((asset, i) => (
            <div className="cyber-tr" key={i}>
              <div style={{fontWeight: '600'}}>{asset.name}</div>
              <div>
                <span className="status-dot" style={{color: asset.status, backgroundColor: asset.status}}></span>
                {asset.risk}
              </div>
              <div style={{color: asset.threats > 0 ? '#ef4444' : 'inherit'}}>{asset.threats}</div>
              <div><button style={{background: 'none', border: '1px solid #333', color: '#fff', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer'}}>REMEDIATE</button></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;