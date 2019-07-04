import * as React from 'react';
import { Route, Switch } from 'react-router';

import Login from '../auth/Login';
import AuthRoute from '../components/AuthRoute';
import VideoEnd from '../watched/VideoEnd';
import CloseContent from './CloseContent';
import { VideoData } from './renderService';
import './Content.scss';

export const VideoContext = React.createContext<VideoData>(null);

// eslint-disable-next-line react/prop-types
const Content: React.FC<{ videoData: VideoData }> = ({ videoData }) => {
  return (
    <VideoContext.Provider value={videoData}>
      <CloseContent />
      <Switch>
        <Route exact path="/login" component={Login} />
        <AuthRoute exact path="/" component={VideoEnd} />
      </Switch>
    </VideoContext.Provider>
  );
};

export default Content;
