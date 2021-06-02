import React, { useState } from 'react'
import Page from 'components/Page';
import { Card, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, Button } from 'reactstrap';
import tanitim1 from 'assets/tanitim/1.png';
import tanitim2 from 'assets/tanitim/2.png';
import tanitim3 from 'assets/tanitim/3.png';
import tanitim4 from 'assets/tanitim/4.png';
import tanitim5 from 'assets/tanitim/5.png';
import tanitim6 from 'assets/tanitim/6.png';

export const NasilKullanilir = () => {


    return (
        <Page title="Nasıl Kullanılır?" breadcrumbs={[{ name: 'nasıl kullanılır', active: true }]}>

            <Card body inverse style={{ color: '#000', backgroundColor: '#8981fe', borderColor: '#8981fe', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Merhaba;</CardTitle>
                <CardText>Bu sayfada projeyi nasıl kullanabileceğinize dair çeşitli bilgiler bulacaksınız. Bu rehberde cevabını bulamadığınız bir yer olduğu takdirde bizimle iletişime geçebilirsiniz.</CardText>

                <CardGroup style={{ marginBottom: '1rem', color: '#000' }}>
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

            </Card>

            <Card body inverse style={{ backgroundColor: '#8981fe', borderColor: '#8981fe', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Merkezsel Eğilim Kategorisi Altındaki Ölçümleri Hesaplamak</CardTitle>
                <CardText>
                    Bu kategori altında yer alan Aritmetik Ortalama, Geometrik Ortalama, Harmonik Ortalama, Mod ve Medyan değerlerini hesap etmek için öncelikle ilgili sayfaya giriniz. Ardından karşınıza bir metin kutusu gelecektir. Buraya, aralarında virgül olacak şekilde değerlerinizi girmeniz gerekmektedir.
                    <br /> <br />
                    Örneğin;
                    <br />
                    1,6,5,4,3,6,8,2,3
                    <br />
                    geçerli bir veri setidir. Bu verileri girdikten sonra hemen alttaki "Gönder" butonuna bastığınızda, eğer veri setiniz doğruysa ilgili hesaplamanın sonucunu veren bir kutu göreceksiniz.
                    <br /><br />
                    <center><img src={tanitim1} /></center>
                </CardText>
            </Card>

            <Card body inverse style={{ backgroundColor: '#8981fe', borderColor: '#8981fe', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Merkezsel Dağılım Kategorisi Altındaki Ölçümleri Hesaplamak</CardTitle>
                <CardText>
                    Bu kategori altında yer alan Ortalama Mutlak Sapma, Standart Sapma, Varyans, Değişim Katsayısı ve Dağılım Grafiği değerlerini hesap etmek için öncelikle ilgili sayfaya giriniz. Ardından karşınıza bir metin kutusu gelecektir. Buraya, aralarında virgül olacak şekilde değerlerinizi girmeniz gerekmektedir.
                    <br /> <br />
                    Örneğin;
                    <br />
                    1,6,5,4,3,6,8,2,3
                    <br />
                    geçerli bir veri setidir. Bu verileri girdikten sonra hemen alttaki "Gönder" butonuna bastığınızda, eğer veri setiniz doğruysa ilgili hesaplamanın sonucunu veren bir kutu göreceksiniz.
                    <br /><br />
                    <center><img src={tanitim2} /></center>
                </CardText>
            </Card>

            <Card body inverse style={{ backgroundColor: '#8981fe', borderColor: '#8981fe', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Dağılım Grafiği Çizdirmek</CardTitle>
                <CardText>
                    Merkezi Dağılım Ölçüleri kategorisi altında dağılım grafiği çizdirmek istiyorsanız, verileri yine;
                    <br />
                    1,6,5,4,3,6,8,2,3
                    <br />
                    gibi bir formatta girdikten sonra hemen alttaki "Gönder" butonuna bastığınızda veri setiniz doğruysa karşısınza bir grafik çıkacaktır.
                    <br /><br />
                    <center><img src={tanitim3} /></center>
                </CardText>
            </Card>

            <Card body inverse style={{ backgroundColor: '#8981fe', borderColor: '#8981fe', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Permütasyon ve Kombinasyon Hesaplamak</CardTitle>
                <CardText>
                    Bu hesaplamaları yapmak için öncelikle Diğer kategorisi altında ilgili sayfaya giriniz. Ardından karşınızdaki alanlara verilerinizi girip Gönder butonuna basınız.
                    <br /> <br />
                    Eğer veri setiniz doğruysa ilgili hesaplamanın sonucunu veren bir kutu göreceksiniz.
                    <br /><br />
                    <center><img src={tanitim4} /></center>
                </CardText>
            </Card>

            <Card body inverse style={{ backgroundColor: '#8981fe', borderColor: '#8981fe', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Histogram Grafiği Çizdirmek</CardTitle>
                <CardText>
                    Diğer kategorisi altında dağılım grafiği çizdirmek istiyorsanız, verileri yine;
                    <br />
                    1,6,5,4,3,6,8,2,3
                    <br />
                    gibi bir formatta girdikten sonra hemen alttaki kutuya da kaç gruba bölmek istediğinizi giriniz. Ardından "Gönder" butonuna bastığınızda veri setiniz doğruysa karşısınza bir histogram grafiği çıkacaktır.
                    <br /><br />
                    <center><img src={tanitim5} /></center>
                </CardText>
            </Card>

            <Card body inverse style={{ backgroundColor: '#8981fe', borderColor: '#8981fe', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Hipotez Testi Yapmak</CardTitle>
                <CardText>
                    Bu hesaplamaları yapmak için öncelikle Diğer kategorisi altında ilgili sayfaya giriniz.
                    <br />
                    Burada ilk olarak H değerinizi giriniz.
                    <br />
                    H değerini girdikten sonra hemen altta test edilecek hipotezin ne olduğu istenecektir. O kısımda da ilgili seçimi yapınız.
                    <br />
                    Ardından sırasıyla Veri sayısı, aritmetik ortalama ve standart sapmayı giriniz.
                    <br />
                    Son olarak da hangi anlam düzeyinde hesap yapmak istediğinizi giriniz.
                    <br />
                    Ardından TEST ET butonuna basınız. Eğer verileriniz doğruysa hipotez testinin sonucunu gösteren bir kutu açılacaktır.
                    <br /><br />
                    <center><img src={tanitim6} /></center>

                </CardText>
            </Card>

        </Page>
    )
}