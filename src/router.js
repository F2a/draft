import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import piq3 from './routes/PIQ3';
import material from './routes/Material';
import Flaremini from './routes/Flaremini';
import Rope from './routes/Rope';
import testpage from './routes/Testpage';
import Animate from './routes/Animate';
import Cable from './routes/Cable';
import T2118 from './routes/T2118';
import Capsule from './routes/Capsule';
import Referral from './routes/Referral';
import CampaignLanding from './routes/CampaignLanding';
import Camp from './routes/Camp';
import PixiDemo from './routes/PixiDemo';
import MomShare from './routes/MomShare';
import MothersDay from './routes/MothersDay';
import MothersDayUk from './routes/MothersDayUk';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/testpage" exact component={testpage} />
        <Route path="/piq3" exact component={piq3} />
        <Route path="/material" exact component={material} />
        <Route path="/flaremini" exact component={Flaremini} />
        <Route path="/rope" exact component={Rope} />
        <Route path="/animate" exact component={Animate} />
        <Route path="/cable" exact component={Cable} />
        <Route path="/T2118" exact component={T2118} />
        <Route path="/Capsule" exact component={Capsule} />
        <Route path="/Referral" exact component={Referral} />
        <Route path="/CampaignLanding" exact component={CampaignLanding} />
        <Route path="/PixiDemo" exact component={PixiDemo} />
        <Route path="/Camp" exact component={Camp} />
        <Route path="/MomShare" exact component={MomShare} />
        <Route path="/MothersDay" exact component={MothersDay} />
        <Route path="/MothersDayUk" exact component={MothersDayUk} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
