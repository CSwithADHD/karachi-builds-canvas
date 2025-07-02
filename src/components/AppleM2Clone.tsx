
import React from 'react';

const AppleM2Clone = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Thunderbolt */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <span className="text-gray-700 font-medium">Thunderbolt 4</span>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
            <div className="text-purple-600 text-3xl font-bold mb-2">20%</div>
            <div className="text-gray-600 text-sm">faster CPU</div>
            <div className="text-purple-600 text-3xl font-bold mb-2 mt-4">30%</div>
            <div className="text-gray-600 text-sm">faster GPU</div>
          </div>

          {/* Memory */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
            <div className="text-gray-600 text-sm mb-2">Up to 24GB</div>
            <div className="text-gray-600 text-sm">unified memory</div>
            <div className="text-gray-600 text-sm mt-4">Up to 50%</div>
            <div className="text-gray-600 text-sm">more memory</div>
            <div className="text-gray-600 text-sm">bandwidth</div>
          </div>

          {/* Unified Memory */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
            <div className="text-purple-600 text-4xl font-bold mb-2">96GB</div>
            <div className="text-gray-600 text-sm">unified memory</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Transistors */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="text-purple-600 text-5xl font-bold mb-4">67 billion</div>
            <div className="text-gray-600 text-lg">transistors</div>
          </div>

          {/* Center Column - M2 Chip */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-2xl font-bold">🍎</span>
              </div>
              <div className="text-white text-4xl font-bold">M2</div>
            </div>
          </div>

          {/* Right Column - CPU Cores */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-4 gap-2 mb-4">
              {/* CPU Core visualization */}
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-purple-200 rounded-lg border border-purple-300"></div>
              ))}
            </div>
            <div className="text-gray-600 text-sm">8-core</div>
            <div className="text-gray-600 text-sm">CPU</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Neural Engine */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
            <div className="text-gray-600 text-sm mb-2">Neural Engine</div>
            <div className="text-purple-600 text-3xl font-bold mb-2">40%</div>
            <div className="text-gray-600 text-sm">faster</div>
          </div>

          {/* Process Technology */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
            <div className="text-gray-600 text-sm mb-2">High-performance</div>
            <div className="text-gray-600 text-sm mb-4">5nm technology</div>
            <div className="text-purple-600 text-2xl font-bold">5 nm</div>
            <div className="text-gray-600 text-sm">technology</div>
          </div>

          {/* GPU Visualization */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
            <div className="grid grid-cols-5 gap-1 mb-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-purple-200 rounded border border-purple-300"></div>
              ))}
            </div>
            <div className="text-gray-600 text-sm">10-core</div>
            <div className="text-gray-600 text-sm">GPU</div>
          </div>

          {/* Memory Bandwidth */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
            <div className="text-purple-600 text-4xl font-bold mb-2">400GB/s</div>
            <div className="text-gray-600 text-sm">Memory bandwidth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleM2Clone;
