import React from 'react';
import { MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';

import { AritmetikOrtalama } from './pages/calculation/AritmetikOrtalama';
import { GeometrikOrtalama } from './pages/calculation/GeometrikOrtalama';
import { HarmonikOrtalama } from './pages/calculation/HarmonikOrtalama';
import { Kombinasyon } from './pages/calculation/Kombinasyon';
import { Permutasyon } from './pages/calculation/Permutasyon';
import { OrtancaDeger } from './pages/calculation/OrtancaDeger';
import { TepeDeger } from './pages/calculation/TepeDeger';
import { StandartSapma } from './pages/calculation/StandartSapma';
import { OrtalamaMutlakSapma } from './pages/calculation/OrtalamaMutlakSapma';
import { DegisimKatsayisi } from './pages/calculation/DegisimKatsayisi';
import { Varyans } from './pages/calculation/Varyans';
import { Histogram } from './pages/calculation/Histogram';
import { DagilimGrafigi } from './pages/calculation/DagilimGrafigi';
import { HipotezTesti } from './pages/calculation/HipotezTesti';

import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';




const DashboardPage = React.lazy(() => import('pages/DashboardPage'));

// 
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <MainLayout breakpoint={this.props.breakpoint}>
            <React.Suspense fallback={<PageSpinner />}>
              <Route exact path="/" component={DashboardPage} />


              <Route exact path="/aritmetik-ortalama" component={AritmetikOrtalama} />
              <Route exact path="/geometik-ortalama" component={GeometrikOrtalama} />
              <Route exact path="/harmonik-ortalama" component={HarmonikOrtalama} />
              <Route exact path="/kombinasyon" component={Kombinasyon} />
              <Route exact path="/permutasyon" component={Permutasyon} />
              <Route exact path="/medyan" component={OrtancaDeger} />
              <Route exact path="/mod" component={TepeDeger} />

              <Route exact path="/standart-sapma" component={StandartSapma} />
              <Route exact path="/ortalama-mutlak-sapma" component={OrtalamaMutlakSapma} />
              <Route exact path="/degisim-katsayisi" component={DegisimKatsayisi} />
              <Route exact path="/varyans" component={Varyans} />

              <Route exact path="/histogram" component={Histogram} />
              <Route exact path="/dagilim" component={DagilimGrafigi} />

              <Route exact path="/hipotez-testi" component={HipotezTesti} />
            </React.Suspense>
          </MainLayout>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
