import React from 'react';
import NavigationBar from './NavigationBar'; // Import Navigation Bar
import './Studio.css'; // Studio-specific styles

const Studio = () => {
  return (
    <div className="studio-container">
      {/* Navigation Bar */}
      <NavigationBar username="John Doe" />

      {/* Studio Page Content */}
      <div className="studio-content">
        {/* Left Sidebar */}
        <div className="studio-sidebar">
          <div className="studio-logo">FOLIA</div>
          <div className="studio-buttons">
            <button>Generate</button>
            <button>Optimize</button>
            <button>Simulate</button>
            <button>Validate</button>
          </div>
        </div>

        {/* BPMN Diagram Section */}
        <div className="studio-main">
          <textarea
            placeholder="Enter text to generate BPMN diagram..."
            className="studio-input"
          ></textarea>

          <div className="studio-actions">
            <button>Import Text</button>
            <button>Import Image</button>
            <button>Generate BPMN</button>
          </div>

          <div className="studio-visualization">
            <h3>Generated or Updated Diagram Visualizing Section</h3>
          </div>

          <div className="studio-save-export">
            <button>Save</button>
            <button>Export</button>
          </div>
        </div>

        {/* Right Toolbar */}
        <div className="studio-toolbar">
          <h3>Tools</h3>
          <div className="toolbar-icons">
            <div className="icon">⭕</div>
            <div className="icon">🔲</div>
            <div className="icon">🔷</div>
            <div className="icon">🔳</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
