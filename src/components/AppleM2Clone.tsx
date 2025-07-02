
import React from 'react';
import './AppleM2Clone.css';

const AppleM2Clone = () => {
  return (
    <div className="apple-m2-container">
      <div className="main-grid">
        {/* Header Section */}
        <div className="header-grid">
          {/* Thunderbolt */}
          <div className="card">
            <div className="card-header">
              <div className="icon thunderbolt-icon">⚡</div>
              <span className="label">Thunderbolt 4</span>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="card">
            <div className="metric-large purple">20%</div>
            <div className="metric-label">faster CPU</div>
            <div className="metric-large purple">30%</div>
            <div className="metric-label">faster GPU</div>
          </div>

          {/* Memory */}
          <div className="card">
            <div className="metric-label">Up to 24GB</div>
            <div className="metric-label">unified memory</div>
            <div className="metric-label">Up to 50%</div>
            <div className="metric-label">more memory</div>
            <div className="metric-label">bandwidth</div>
          </div>

          {/* Unified Memory */}
          <div className="card">
            <div className="metric-huge purple">96GB</div>
            <div className="metric-label">unified memory</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="content-grid">
          {/* Left Column - Transistors */}
          <div className="card">
            <div className="metric-huge purple">67 billion</div>
            <div className="metric-large-label">transistors</div>
          </div>

          {/* Center Column - M2 Chip */}
          <div className="chip-card">
            <div className="chip-content">
              <div className="apple-logo">🍎</div>
              <div className="chip-name">M2</div>
            </div>
          </div>

          {/* Right Column - CPU Cores */}
          <div className="card">
            <div className="cpu-grid">
              <div className="cpu-core"></div>
              <div className="cpu-core"></div>
              <div className="cpu-core"></div>
              <div className="cpu-core"></div>
              <div className="cpu-core"></div>
              <div className="cpu-core"></div>
              <div className="cpu-core"></div>
              <div className="cpu-core"></div>
            </div>
            <div className="metric-label">8-core</div>
            <div className="metric-label">CPU</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-grid">
          {/* Neural Engine */}
          <div className="card">
            <div className="metric-label">Neural Engine</div>
            <div className="metric-large purple">40%</div>
            <div className="metric-label">faster</div>
          </div>

          {/* Process Technology */}
          <div className="card">
            <div className="metric-label">High-performance</div>
            <div className="metric-label">5nm technology</div>
            <div className="metric-medium purple">5 nm</div>
            <div className="metric-label">technology</div>
          </div>

          {/* GPU Visualization */}
          <div className="card">
            <div className="gpu-grid">
              <div className="gpu-core"></div>
              <div className="gpu-core"></div>
              <div className="gpu-core"></div>
              <div className="gpu-core"></div>
              <div className="gpu-core"></div>
              <div className="gpu-core"></div>
              <div className="gpu-core"></div>
              <div className="gpu-core"></div>
              <div className="gpu-core"></div>
              <div className="gpu-core"></div>
            </div>
            <div className="metric-label">10-core</div>
            <div className="metric-label">GPU</div>
          </div>

          {/* Memory Bandwidth */}
          <div className="card">
            <div className="metric-huge purple">400GB/s</div>
            <div className="metric-label">Memory bandwidth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleM2Clone;
