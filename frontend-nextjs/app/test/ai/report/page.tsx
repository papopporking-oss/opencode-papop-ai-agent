'use client';

import { useState, useEffect } from 'react';

// Types for race result data
type RaceResult = {
  id: string;
  driverName: string;
  teamName: string;
  raceName: string;
  position: number;
  points: number;
  fastestLap: string;
  date: string;
};

// Sample initial data for racing results
const getSampleData = (): RaceResult[] => [
  {
    id: '1',
    driverName: 'Lewis Hamilton',
    teamName: 'Mercedes',
    raceName: 'Monaco Grand Prix',
    position: 1,
    points: 25,
    fastestLap: '1:12.909',
    date: '2024-05-26',
  },
  {
    id: '2',
    driverName: 'Max Verstappen',
    teamName: 'Red Bull Racing',
    raceName: 'Monaco Grand Prix',
    position: 2,
    points: 18,
    fastestLap: '1:13.105',
    date: '2024-05-26',
  },
  {
    id: '3',
    driverName: 'Charles Leclerc',
    teamName: 'Ferrari',
    raceName: 'Monaco Grand Prix',
    position: 3,
    points: 15,
    fastestLap: '1:13.245',
    date: '2024-05-26',
  },
  {
    id: '4',
    driverName: 'Max Verstappen',
    teamName: 'Red Bull Racing',
    raceName: 'British Grand Prix',
    position: 1,
    points: 25,
    fastestLap: '1:27.570',
    date: '2024-07-07',
  },
  {
    id: '5',
    driverName: 'Lando Norris',
    teamName: 'McLaren',
    raceName: 'British Grand Prix',
    position: 2,
    points: 18,
    fastestLap: '1:27.845',
    date: '2024-07-07',
  },
];

// Storage key for local storage
const STORAGE_KEY = 'race-results';

// Load data from local storage
const loadFromStorage = (): RaceResult[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return getSampleData();
    }
  }
  return getSampleData();
};

// Save data to local storage
const saveToStorage = (data: RaceResult[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
};

// Generate unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Empty form state
const getEmptyForm = (): Omit<RaceResult, 'id'> => ({
  driverName: '',
  teamName: '',
  raceName: '',
  position: 1,
  points: 0,
  fastestLap: '',
  date: new Date().toISOString().split('T')[0],
});

export default function ReportPage() {
  const [results, setResults] = useState<RaceResult[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [form, setForm] = useState(getEmptyForm());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Load data on mount
  useEffect(() => {
    const data = loadFromStorage();
    setResults(data);
    setIsLoaded(true);
  }, []);

  // Save data whenever results change
  useEffect(() => {
    if (isLoaded) {
      saveToStorage(results);
    }
  }, [results, isLoaded]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value,
    }));
  };

  // Add new result
  const handleAdd = () => {
    const newResult: RaceResult = {
      id: generateId(),
      ...form,
    };
    setResults(prev => [...prev, newResult]);
    setForm(getEmptyForm());
    setShowForm(false);
  };

  // Start editing a result
  const handleEdit = (result: RaceResult) => {
    setForm({
      driverName: result.driverName,
      teamName: result.teamName,
      raceName: result.raceName,
      position: result.position,
      points: result.points,
      fastestLap: result.fastestLap,
      date: result.date,
    });
    setEditingId(result.id);
    setShowForm(true);
  };

  // Update existing result
  const handleUpdate = () => {
    if (!editingId) return;
    setResults(prev =>
      prev.map(r => (r.id === editingId ? { ...form, id: editingId } : r))
    );
    setEditingId(null);
    setForm(getEmptyForm());
    setShowForm(false);
  };

  // Delete a result
  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this result?')) {
      setResults(prev => prev.filter(r => r.id !== id));
    }
  };

  // Cancel form
  const handleCancel = () => {
    setEditingId(null);
    setForm(getEmptyForm());
    setShowForm(false);
  };

  // Calculate statistics
  const getTotalRaces = (): number => {
    const uniqueRaces = new Set(results.map(r => r.raceName));
    return uniqueRaces.size;
  };

  const getTotalDrivers = (): number => {
    const uniqueDrivers = new Set(results.map(r => r.driverName));
    return uniqueDrivers.size;
  };

  const getTotalPoints = (): number => {
    return results.reduce((sum, r) => sum + r.points, 0);
  };

  const getTopDriver = (): string => {
    const driverPoints: Record<string, number> = {};
    results.forEach(r => {
      driverPoints[r.driverName] = (driverPoints[r.driverName] || 0) + r.points;
    });
    const sorted = Object.entries(driverPoints).sort((a, b) => b[1] - a[1]);
    return sorted[0]?.[0] || 'N/A';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Racing Results Admin Report
          </h1>
          <p className="text-slate-400">
            Manage and track car racing competition results
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-1">Total Races</div>
            <div className="text-3xl font-bold text-white">{getTotalRaces()}</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-1">Total Drivers</div>
            <div className="text-3xl font-bold text-white">{getTotalDrivers()}</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-1">Total Points</div>
            <div className="text-3xl font-bold text-emerald-400">{getTotalPoints()}</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-1">Top Driver</div>
            <div className="text-xl font-bold text-amber-400">{getTopDriver()}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-6">
          <button
            onClick={() => {
              setForm(getEmptyForm());
              setEditingId(null);
              setShowForm(true);
            }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Add New Result
          </button>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-lg p-6 w-full max-w-md border border-slate-700">
              <h2 className="text-xl font-bold text-white mb-4">
                {editingId ? 'Edit Result' : 'Add New Result'}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-300 text-sm mb-1">Driver Name</label>
                  <input
                    type="text"
                    name="driverName"
                    value={form.driverName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 text-sm mb-1">Team Name</label>
                  <input
                    type="text"
                    name="teamName"
                    value={form.teamName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 text-sm mb-1">Race Name</label>
                  <input
                    type="text"
                    name="raceName"
                    value={form.raceName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 text-sm mb-1">Position</label>
                    <input
                      type="number"
                      name="position"
                      value={form.position}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 text-sm mb-1">Points</label>
                    <input
                      type="number"
                      name="points"
                      value={form.points}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 text-sm mb-1">Fastest Lap</label>
                    <input
                      type="text"
                      name="fastestLap"
                      value={form.fastestLap}
                      onChange={handleInputChange}
                      placeholder="1:23.456"
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 text-sm mb-1">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <button
                  onClick={editingId ? handleUpdate : handleAdd}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  {editingId ? 'Update' : 'Add'}
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Results Table */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-4 py-3 text-left text-slate-300 font-semibold">Driver</th>
                  <th className="px-4 py-3 text-left text-slate-300 font-semibold">Team</th>
                  <th className="px-4 py-3 text-left text-slate-300 font-semibold">Race</th>
                  <th className="px-4 py-3 text-center text-slate-300 font-semibold">Position</th>
                  <th className="px-4 py-3 text-center text-slate-300 font-semibold">Points</th>
                  <th className="px-4 py-3 text-center text-slate-300 font-semibold">Fastest Lap</th>
                  <th className="px-4 py-3 text-center text-slate-300 font-semibold">Date</th>
                  <th className="px-4 py-3 text-center text-slate-300 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {results.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-slate-400">
                      No results found. Add your first racing result.
                    </td>
                  </tr>
                ) : (
                  results.map((result) => (
                    <tr key={result.id} className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-4 py-3 text-white font-medium">{result.driverName}</td>
                      <td className="px-4 py-3 text-slate-300">{result.teamName}</td>
                      <td className="px-4 py-3 text-slate-300">{result.raceName}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                          result.position === 1 ? 'bg-amber-500 text-slate-900' :
                          result.position === 2 ? 'bg-slate-400 text-slate-900' :
                          result.position === 3 ? 'bg-amber-700 text-white' :
                          'bg-slate-700 text-white'
                        }`}>
                          {result.position}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center text-emerald-400 font-semibold">{result.points}</td>
                      <td className="px-4 py-3 text-center text-slate-300 font-mono text-sm">{result.fastestLap}</td>
                      <td className="px-4 py-3 text-center text-slate-400">{result.date}</td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleEdit(result)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(result.id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-500 text-sm">
          Data is stored in your browser&apos;s local storage
        </div>
      </div>
    </div>
  );
}
