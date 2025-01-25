import mongoose from 'mongoose';

export const checkHealth = (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  if (dbStatus === 'connected') {
    return res.json({
      status: 'ok',
      database: dbStatus,
    });
  } else {
    return res.status(500).json({
      status: 'error',
      message: 'Database connection is down',
      database: dbStatus,
    });
  }
};
