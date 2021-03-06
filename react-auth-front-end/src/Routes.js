import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './auth/PrivateRoutes';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { PleaseVerifyEmailPage } from './pages/PleaseVerifyEmailPage';
import { EmailVerificationLandingPage } from './pages/EmailVerificationLandingPage';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact>
          <UserInfoPage />
        </PrivateRoute>
        <Route path="/login">
          <LogInPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/please-verify">
          <PleaseVerifyEmailPage />
        </Route>
        <Route path="/verify-email/:verificationString">
          <EmailVerificationLandingPage />
        </Route>
      </Switch>
    </Router>
  );
};
