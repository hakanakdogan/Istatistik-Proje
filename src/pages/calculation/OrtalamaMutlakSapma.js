import React, { useState } from 'react'
import Page from 'components/Page';
import { Card, CardTitle, CardText } from 'reactstrap';

export const OrtalamaMutlakSapma = () => {
    const [data, setData] = useState("");
    const [ortalamaMSapma, setortalamaMSapma] = useState(0);

    const hesapla = (e) => {
        e.preventDefault();
        let dizi = data.trim().split(',');
        let toplam = 0;
        dizi =
            dizi.filter(key => {
                if (key) return true;
            })

        dizi.map(key => {
            toplam += Number(key);
        });

        if (dizi.length > 0) {
            // 1- Ortalama bulunur
            let aritmetikOrtalama = (toplam / dizi.length);
            // 2- Her bir veri ve ortalama arasındaki mutlak mesafeyi bul ve topla
            let mesafeToplami = 0;
            dizi.map(key => {
                mesafeToplami += Math.abs((Number(key) - aritmetikOrtalama));
            })
            // 3- Veri sayısına böl
            setortalamaMSapma(mesafeToplami / dizi.length);
        }
    }

    return (
        <Page title="Ortalama Mutlak Sapma" breadcrumbs={[{ name: 'ortalama mutlak sapma', active: true }]}>
            <form onSubmit={hesapla} className="mt-4" >
                <textarea
                    className="form-control"
                    placeholder="Değerleri giriniz..."
                    value={data}
                    onChange={e => setData(e.target.value)} />
                <button type="submit" className="w-100 btn btn-secondary mt-2">Gönder</button>
            </form>

            {ortalamaMSapma !== 0 ?
                <div class="alert alert-primary" role="alert">
                    Hesaplanan Ortalama Mutlak Sapma: {ortalamaMSapma}
                </div>
                : null
            }
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Ortalama Mutlak Sapma</CardTitle>
                <CardText>Bir veri setinin ortalama mutlak sapması, merkezi bir noktadan mutlak sapmaların ortalamasıdır. İstatistiksel dağılım veya değişkenliğin özet bir istatistiğidir.</CardText>

            </Card>
        </Page>
    )
}