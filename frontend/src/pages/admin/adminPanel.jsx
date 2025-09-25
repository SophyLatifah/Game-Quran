import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = "http://localhost:5000/api";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [userStats, setUserStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  // Mock data untuk demo karena backend belum punya endpoint admin aggregate
  const [mockMode, setMockMode] = useState(true);

  useEffect(() => {
    if (mockMode) {
      loadMockData();
    } else {
      loadRealData();
    }
  }, [mockMode]);

  const loadMockData = () => {
    setTimeout(() => {
      setUsers([
        { id: 1, nama: 'Ahmad Fauzi', phone: '081234567890', total_games: 15, memorized_count: 45, avg_percentage: 82, best_percentage: 95, created_at: '2024-01-15' },
        { id: 2, nama: 'Siti Nurhaliza', phone: '081234567891', total_games: 8, memorized_count: 28, avg_percentage: 75, best_percentage: 90, created_at: '2024-02-01' },
        { id: 3, nama: 'Budi Santoso', phone: '081234567892', total_games: 22, memorized_count: 67, avg_percentage: 88, best_percentage: 100, created_at: '2024-01-10' },
        { id: 4, nama: 'Ani Rahmawati', phone: '081234567893', total_games: 5, memorized_count: 12, avg_percentage: 65, best_percentage: 80, created_at: '2024-03-15' },
        { id: 5, nama: 'Dedi Kurniawan', phone: '081234567894', total_games: 18, memorized_count: 52, avg_percentage: 79, best_percentage: 95, created_at: '2024-02-20' },
      ]);
      setLoading(false);
    }, 1000);
  };

  const loadRealData = async () => {
    try {
      setLoading(true);
      // Ini contoh bagaimana nanti backend bisa bikin endpoint agregat
      // const response = await axios.get(`${API_BASE}/admin/users-stats`);
      // setUsers(response.data);
      
      // Untuk sekarang fallback ke mock
      loadMockData();
    } catch (err) {
      setError('Failed to load data from backend');
      loadMockData(); // Fallback ke mock data
    }
  };

  const totalUsers = users.length;
  const totalGames = users.reduce((sum, user) => sum + user.total_games, 0);
  const totalWords = users.reduce((sum, user) => sum + user.memorized_count, 0);
  const avgScore = Math.round(users.reduce((sum, user) => sum + user.avg_percentage, 0) / users.length) || 0;

  const activeUsers = users.filter(u => u.total_games >= 10).length;
  const newUsers = users.filter(u => new Date(u.created_at) >= new Date(Date.now() - 30*24*60*60*1000)).length;

  const performanceDistribution = {
    excellent: users.filter(u => u.avg_percentage >= 90).length,
    good: users.filter(u => u.avg_percentage >= 75 && u.avg_percentage < 90).length,
    average: users.filter(u => u.avg_percentage >= 60 && u.avg_percentage < 75).length,
    needsWork: users.filter(u => u.avg_percentage < 60).length,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="mt-1 text-sm text-gray-500">Game Quran - User Analytics & Performance</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <label className="text-sm text-gray-700">Mode:</label>
                  <button
                    onClick={() => setMockMode(!mockMode)}
                    className={`px-3 py-1 rounded text-xs font-medium ${
                      mockMode 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {mockMode ? 'Demo Data' : 'Live Data'}
                  </button>
                </div>
                <select 
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                >
                  <option value="all">All Time</option>
                  <option value="30days">Last 30 Days</option>
                  <option value="7days">Last 7 Days</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error Alert */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Backend Connection Issue</h3>
                <p className="mt-1 text-sm text-red-700">{error}. Showing demo data instead.</p>
              </div>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Users</dt>
                    <dd className="text-lg font-medium text-gray-900">{totalUsers.toLocaleString()}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <span className="text-green-600 font-medium">+{newUsers}</span>
                <span className="text-gray-500"> new this month</span>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Games</dt>
                    <dd className="text-lg font-medium text-gray-900">{totalGames.toLocaleString()}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <span className="text-blue-600 font-medium">{Math.round(totalGames/totalUsers)}</span>
                <span className="text-gray-500"> avg per user</span>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Words Memorized</dt>
                    <dd className="text-lg font-medium text-gray-900">{totalWords.toLocaleString()}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <span className="text-purple-600 font-medium">{Math.round(totalWords/totalUsers)}</span>
                <span className="text-gray-500"> avg per user</span>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Average Score</dt>
                    <dd className="text-lg font-medium text-gray-900">{avgScore}%</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <span className="text-green-600 font-medium">{activeUsers}</span>
                <span className="text-gray-500"> active users</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Distribution */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">User Performance Distribution</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{performanceDistribution.excellent}</div>
                <div className="text-sm text-gray-500">Excellent (90-100%)</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: `${(performanceDistribution.excellent / totalUsers) * 100}%` }}></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{performanceDistribution.good}</div>
                <div className="text-sm text-gray-500">Good (75-89%)</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(performanceDistribution.good / totalUsers) * 100}%` }}></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">{performanceDistribution.average}</div>
                <div className="text-sm text-gray-500">Average (60-74%)</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: `${(performanceDistribution.average / totalUsers) * 100}%` }}></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{performanceDistribution.needsWork}</div>
                <div className="text-sm text-gray-500">Needs Work (&lt;60%)</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: `${(performanceDistribution.needsWork / totalUsers) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Table */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">User Details</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Games</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Words</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          <span className="text-sm font-medium text-indigo-600">
                            {user.nama.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.nama}</div>
                          <div className="text-sm text-gray-500">ID: {user.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.total_games}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.memorized_count}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.avg_percentage >= 90 ? 'bg-green-100 text-green-800' :
                        user.avg_percentage >= 75 ? 'bg-blue-100 text-blue-800' :
                        user.avg_percentage >= 60 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {user.avg_percentage}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.best_percentage}%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.total_games >= 15 ? 'bg-green-100 text-green-800' :
                        user.total_games >= 8 ? 'bg-blue-100 text-blue-800' :
                        user.total_games >= 3 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {user.total_games >= 15 ? 'Very Active' : 
                         user.total_games >= 8 ? 'Active' :
                         user.total_games >= 3 ? 'Moderate' : 'New'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-md p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Backend Integration Note</h3>
              <div className="mt-1 text-sm text-blue-700">
                <p>Panel ini siap diintegrasikan dengan backend. Backend team perlu menambah endpoint:</p>
                <ul className="mt-2 list-disc list-inside">
                  <li><code>GET /api/admin/users-stats</code> - Aggregate user statistics</li>
                  <li><code>GET /api/admin/performance-summary</code> - Overall performance metrics</li>
                  <li>Atau modify existing endpoints untuk include admin data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;