import React, { useContext } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import ClientLayout from './components/UI/Layout';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import AdminLayout from './components/UI/AdminLayout';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminRequests from './pages/Admin/AdminRequests';
import LoanRequest from './pages/Admin/LoanRequest';
import AdminLogin from './pages/Admin/Login';
import AdminRegister from './pages/Admin/Register';
import { authContext } from './context/authContext';
import { Navigate as Redirect } from 'react-router-dom';
const App = () => {
  const authCtx = useContext(authContext);
  return (
    <Switch>
      <Route
        path="/"
        element={
          <ClientLayout>
            {!authCtx.token ? (
              <Home />
            ) : authCtx.isAdmin ? (
              <Redirect to="/admin/dashboard" />
            ) : (
              <Redirect to="/client/dashboard" />
            )}
          </ClientLayout>
        }
      />
      <Route
        path="/client/login"
        element={
          <ClientLayout>
            <Login />
          </ClientLayout>
        }
      />
      <Route
        path="/client/dashboard"
        element={
          <ClientLayout>
            <Dashboard />
          </ClientLayout>
        }
      />
      <Route
        path="/client/register"
        element={
          <ClientLayout>
            <Register />
          </ClientLayout>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/admin-requests"
        element={
          <AdminLayout>
            <AdminRequests />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/loan-requests"
        element={
          <AdminLayout>
            <LoanRequest />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/login"
        element={
          <ClientLayout>
            <AdminLogin />
          </ClientLayout>
        }
      />
      <Route
        path="/admin/register"
        element={
          <ClientLayout>
            <AdminRegister />
          </ClientLayout>
        }
      />
    </Switch>
  );
};

export default App;
