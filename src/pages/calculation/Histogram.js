import React, { useState } from 'react'
import Page from 'components/Page';
import { Bar } from 'react-chartjs-2';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


export const Histogram = () => {
    const [data, setData] = useState("");
    const [grupSayisi, setGrupSayisi] = useState(0);
    const [charData, setCharData] = useState(null);
    const [isCalculated, setIsCalculated] = useState(false);
    const [firstTime, setFirstTime] = useState(true);
    const [isNan, setIsNan] = useState(false)

    function aralik(dizi, min, max) {
        let adet = 0;
        dizi.forEach(eleman => {
            if (eleman >= min && eleman <= max) adet++;
        });
        return adet;
    }

    function hesapla(e) {
        e.preventDefault();
        setIsNan(true);
        let dizi = data.split(",").map(Number);
        dizi.map((el) => {
            if (isNaN(el)) {

                setIsNan(false)
            }
        })

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
        setFirstTime(false);
    }


    return (
        <Page title="Histogram" breadcrumbs={[{ name: 'histogram', active: true }]}>
            <form onSubmit={hesapla} className="mt-4" >
                <textarea
                    className="form-control"
                    placeholder="De??erleri giriniz..."
                    value={data}
                    onChange={e => setData(e.target.value)} />
                <input
                    type="number"
                    placeholder="Grup Say??s??"
                    value={grupSayisi}
                    onChange={e => setGrupSayisi(e.target.value)} />
                <button type="submit" className="w-100 btn btn-secondary mt-2">G??nder</button>
            </form>
            {console.log(isNan)}
            {isCalculated && isNan === true ?
                <Card>
                    <CardBody>
                        <Bar
                            data={charData} options={{
                                title: { display: true, text: 'Histogram Grafi??i', fontSize: 25 },
                                legend: { display: false }
                            }} />
                    </CardBody>
                </Card>
                : !firstTime ?
                    <div className="alert alert-danger" role="alert">
                        Hatal?? De??er Girildi
                    </div> :
                    null
            }
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Histogram</CardTitle>
                <CardText>
                    Histogram bir veri grubundaki de??erlerin s??n??flland??r??lmas?? ve bu yap??las??n??fland??rman??n ??zel olu??turulan s??tun grafi??i ile g??sterilmesidir.  Histogramda olu??turulan s??tun grafi??ideki s??tunlar normal s??tun grafi??indeki gibi tek bir veriyi de??il, bir veri grubunu temsil etmektedir, bu nedenle isimlendirirken aral??k ile isimlendirilmektedir.<br /><br />
                    Histogram olu??turulurken <br />
                    <ul>
                        <li>Veri grubun k??????kten b??y????e s??ralan??r.</li>
                        <li>Veri grubunun a????kl?????? bulunur.</li>
                    </ul> <br />
                    Veri A????kl??????= (En b??y??k De??er) - (En K??????k De??er) <br />
                    <ul>
                        <li>Veri a????kl?????? ve grup say??s?? kullan??larak grup geni??li??i hesaplan??r. Grup say??s?? duruma g??re soruda verilebilir ya da soruyu ????zen taraf??ndan belirlenmesi istenebilir.</li>
                    </ul> <br />
                    Grup Geni??li??i=(Veri A????kl??????)/Grup say??s?? <br /><br />
                    Bulunan say??ya en yak??n tek say?? grup geni??li??i olarak al??n??r. Tek say?? al??nmas??n??n sebebi hesaplamalarda  tam say??lar elde ederek i??lemi kolayla??t??rmakt??r. <br />
                    <ul>
                        <li>Veriler bulunan grup geni??li??inde grupland??r??p her gruba ait veri say??s?? ile birlikte bir tablo olu??turulur.</li>
                        <li>Tablodaki gruplar d????ey eksene veri say??lar?? yatay eksene yerle??tirilerek histogram grafi??i olu??turulur.</li>
                    </ul>
                </CardText>

            </Card>
        </Page>
    )
}