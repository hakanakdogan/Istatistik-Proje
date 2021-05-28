import Page from 'components/Page';
import { IconWidget } from 'components/Widget';
import React from 'react';


import {
  FaGithub
} from 'react-icons/fa';

import {
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  Button,
  CardText,
  CardSubtitle,
  Row,
} from 'reactstrap';
import { getColor } from 'utils/colors';
import { Link } from 'react-router-dom';

class DashboardPage extends React.Component {

  render() {
    const primaryColor = getColor('primary');

    return (
      <Page
        className="DashboardPage"
        title="Tanıtım"
        breadcrumbs={[{ name: 'Tanıtım', active: true }]}
      >

        <Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Proje Hakkında
              </CardHeader>
              <CardBody>
                Bu proje, Bursa Teknik Üniversitesi Bilgisayar Mühendisliği öğrencileri tarafından Olasılık ve İstatistik dersi için hazırlanmıştır.
                Bu web sitesinde elinizdeki veri setiyle çeşitli hesaplamalar yapabilirsiniz.
                <br /><br />
                Site başlığının hemen yanında menü açma butonu yer almaktadır. Bu buton aracılığıyla yapabileceğiniz hesaplamaları listeleyen menüyü görüntüleyebilirsiniz.

                Hesaplama sayfaları 3 kategoriye ayrılmıştır;
                <br /><br />
                <ol>
                  <li>Merkezsel Eğilim Ölçüleri</li>
                  <li>Merkezsel Dağılım Ölçüleri</li>
                  <li>Diğer</li>
                </ol>

                Bu kategorilerden ilgili olana tıklayarak altında bulunan hesap araçlarını görebilirsiniz. Hesabını yapmak istediğiniz alana tıklayarak ilgili sayfaya gidebilirsiniz.
                Bu sayfadaki metin kutularına gerekli verileri giriniz. Veri setini girerken veriler arasında virgül bırakınız.
                <br /><br />
                Mesela; Aritmetik ortalama hesaplamak için verilerinizi 15,21,27,93,65 gibi bir formatta girmeniz gerekmektedir.
                <br /><br /><br />
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Yapabileceğiniz Hesaplamalar</CardHeader>
              <CardBody>
                .
              <ol>
                  <li>Aritmetik Ortalama</li>
                  <li>Geometrik Ortalama</li>
                  <li>Harmonik Ortalama</li>
                  <li>Ortanca (Medyan)</li>
                  <li>Tepe Değer (Mod)</li>
                  <li>Dağılım Grafiği</li>
                  <br /><br />
                  <li>Ortalama Mutlak Sapma</li>
                  <li>Standart Sapma</li>
                  <li>Varyans</li>
                  <li>Değişim Katsayısı</li>
                  <br /><br />
                  <li>Permütasyon</li>
                  <li>Kombinasyon</li>
                  <li>Histogram Grafiği Oluşturma</li>
                  <li>Hipotez Testi</li>
                </ol>
              </CardBody>

            </Card>
          </Col>
        </Row>

        <CardGroup style={{ marginBottom: '1rem' }}>
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={FaGithub}
            title="Github'da Görüntüle"
            subtitle={<a href="https://github.com/hakanakdogan/Istatistik-Proje" target="_blank"><Button onClick="">Github</Button></a>}
          />

        </CardGroup>

        <center><h3>İletişime Geç</h3></center>
        <CardGroup style={{ marginBottom: '1rem' }}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Erhan Baştürk</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">19360859082</CardSubtitle>
              <CardText>erhaanbasturk@gmail.com</CardText>
              <a href="https://www.linkedin.com/in/erhanbasturk/" target="_blank"><Button onClick="">LinkedIn</Button></a>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Hakan Akdoğan</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">19360859016</CardSubtitle>
              <CardText>akdoganhakann@gmail.com</CardText>
              <a href="https://www.linkedin.com/in/hakan-akdogan/" target="_blank"><Button onClick="">LinkedIn</Button></a>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Adem Pelit</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">18360859018</CardSubtitle>
              <CardText>adempelit@gmail.com</CardText>
              <a href="https://www.linkedin.com/in/adem-pelit/" target="_blank"><Button onClick="">LinkedIn</Button></a>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Mert Karavelioğlu</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">18360859012</CardSubtitle>
              <CardText>mertkave@hotmail.com</CardText>
              <a href="https://www.linkedin.com/in/mert-karavelio%C4%9Flu-169873195/" target="_blank"><Button onClick="">LinkedIn</Button></a>
            </CardBody>
          </Card>

        </CardGroup>



      </Page>
    );
  }
}
export default DashboardPage;
