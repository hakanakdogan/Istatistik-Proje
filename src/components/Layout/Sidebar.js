import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import React from 'react';
import {
  MdDashboard,
  MdExtension,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Nav,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};


const navMerkezselEgilim = [
  { to: '/aritmetik-ortalama', name: 'aritmetik ortalama', exact: false },
  { to: '/geometik-ortalama', name: 'geometrik ortalama', exact: false },
  { to: '/harmonik-ortalama', name: 'harmonik ortalama', exact: false },
  { to: '/medyan', name: 'ortanca (medyan)', exact: false },
  { to: '/mod', name: 'tepe değer (mod)', exact: false },
];

const navMerkezselDagilim = [
  { to: '/ortalama-mutlak-sapma', name: 'ortalama mutlak sapma', exact: false },
  { to: '/standart-sapma', name: 'standart sapma', exact: false },
  { to: '/varyans', name: 'varyans', exact: false },
  { to: '/degisim-katsayisi', name: 'değişim katsayısı', exact: false },
  { to: '/dagilim', name: 'dağılım grafiği', exact: false },
];

const navDiger = [
  { to: '/permutasyon', name: 'permutasyon', exact: false },
  { to: '/kombinasyon', name: 'kombinasyon', exact: false },
  { to: '/histogram', name: 'histogram', exact: false },
  { to: '/hipotez-testi', name: 'hipotez testi', exact: false },
];

const navItems = [
  { to: '/', name: 'ana sayfa', exact: true, Icon: MdDashboard },
  { to: '/nasil-kullanilir', name: 'nasıl kullanılır', exact: true, Icon: MdDashboard },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenMerkezselEgilim: false,
    isOpenMerkezselDagilim: false,
    isOpenDiger: false,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>

          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            {/* Merkezsel Eğilim Menüsü */}
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('MerkezselEgilim')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Merkezsel Eğilim</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenMerkezselEgilim
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenMerkezselEgilim}>
              {navMerkezselEgilim.map(({ to, name, exact }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            {/* Merkezsel Dağılım Menüsü */}
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('MerkezselDagilim')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Merkezsel Dağılım</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenMerkezselDagilim
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenMerkezselDagilim}>
              {navMerkezselDagilim.map(({ to, name, exact }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            {/* Merkezsel Dağılım Menüsü */}
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Diger')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Diğer</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenDiger
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenDiger}>
              {navDiger.map(({ to, name, exact }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>


          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
