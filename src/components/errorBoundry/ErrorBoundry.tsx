import { Component, ErrorInfo, ReactNode } from 'react';

import { NoPageFound } from '../noPageFound/NoPageFound';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): State {
    return {
      hasError: true,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <NoPageFound />;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
