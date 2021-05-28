import React, { useState } from 'react'
import Page from 'components/Page';
import { Bar } from 'react-chartjs-2';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


export const Histogram = () => {
    const [data, setData] = useState("");
    const [grupSayisi, setGrupSayisi] = useState(0);
    const [charData, setCharData] = useState(null);
    const [isCalculated, setIsCalculated] = useState(false);

    function aralik(dizi, min, max) {
        let adet = 0;
        dizi.forEach(eleman => {
            if (eleman >= min && eleman <= max) adet++;
        });
        return adet;
    }

    function hesapla(e) {
        e.preventDefault();
        let dizi = data.split(",").map(Number);
        dizi.sort((a, b) => (a - b));
        let aciklik = dizi[dizi.length - 1] - dizi[0];
        let grupGenisligi = Math.ceil(aciklik / grupSayisi);
        let dict = {};
        let start = dizi[0];
        for (var i = 0; i < grupSayisi; i++) {
            if (start + grupGenisligi - 1 > dizi[dizi.length - 1]) dict[start + "-" + dizi[dizi.length - 1]] = aralik(dizi, start, dizi[dizi.length - 1]);
            else dict[start + "-" + (start + grupGenisligi - 1)] = aralik(dizi, start, start + grupGenisligi - 1);
            start = start + grupGenisligi;
        }
        console.log(dict)

        var dictionaryKeys = [];
        var dictionaryValues = [];

        for (var key in dict) {
            if (dict.hasOwnProperty(key)) {
                dictionaryKeys.push([key]);
                dictionaryValues.push([dict[key]]);
            }
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        setCharData({
            labels: dictionaryKeys,
            datasets: [{
                label: 'Histogram',
                data: dictionaryValues,
                backgroundColor: dictionaryKeys.map((element, index) => getRandomColor())
            }]
        })
        setIsCalculated(true);
    }


    return (
        <Page title="Histogram" breadcrumbs={[{ name: 'histogram', active: true }]}>
            <form onSubmit={hesapla} className="mt-4" >
                <textarea
                    className="form-control"
                    placeholder="Değerleri giriniz..."
                    value={data}
                    onChange={e => setData(e.target.value)} />
                <input
                    type="number"
                    placeholder="Grup Sayısı"
                    value={grupSayisi}
                    onChange={e => setGrupSayisi(e.target.value)} />
                <button type="submit" className="w-100 btn btn-secondary mt-2">Gönder</button>
            </form>

            {isCalculated ?
                <Card>
                    <CardBody>
                        <Bar
                            data={charData} options={{
                                title: { display: true, text: 'Histogram Grafiği', fontSize: 25 },
                                legend: { display: false }
                            }} />
                    </CardBody>
                </Card>
                : null
            }
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Histogram</CardTitle>
                <CardText>
                    Histogram bir veri grubundaki değerlerin sınıfllandırılması ve bu yapılasınıflandırmanın özel oluşturulan sütun grafiği ile gösterilmesidir.  Histogramda oluşturulan sütun grafiğideki sütunlar normal sütun grafiğindeki gibi tek bir veriyi değil, bir veri grubunu temsil etmektedir, bu nedenle isimlendirirken aralık ile isimlendirilmektedir.<br /><br />
                    Histogram oluşturulurken <br />
                    <ul>
                        <li>Veri grubun küçükten büyüğe sıralanır.</li>
                        <li>Veri grubunun açıklığı bulunur.</li>
                    </ul> <br />
                    Veri Açıklığı= (En büyük Değer) - (En Küçük Değer) <br />
                    <ul>
                        <li>Veri açıklığı ve grup sayısı kullanılarak grup genişliği hesaplanır. Grup sayısı duruma göre soruda verilebilir ya da soruyu çözen tarafından belirlenmesi istenebilir.</li>
                    </ul> <br />
                    Grup Genişliği=(Veri Açıklığı)/Grup sayısı <br /><br />
                    Bulunan sayıya en yakın tek sayı grup genişliği olarak alınır. Tek sayı alınmasının sebebi hesaplamalarda  tam sayılar elde ederek işlemi kolaylaştırmaktır. <br />
                    <ul>
                        <li>Veriler bulunan grup genişliğinde gruplandırıp her gruba ait veri sayısı ile birlikte bir tablo oluşturulur.</li>
                        <li>Tablodaki gruplar düşey eksene veri sayıları yatay eksene yerleştirilerek histogram grafiği oluşturulur.</li>
                    </ul>
                </CardText>

            </Card>
        </Page>
    )
}