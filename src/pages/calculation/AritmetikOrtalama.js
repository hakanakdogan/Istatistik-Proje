import React, { useState } from 'react'
import Page from 'components/Page';
import { Card, CardTitle, CardText } from 'reactstrap';
import { aritmetikOrtalamaHesapFunc } from './hesapFonksiyonları';

export const AritmetikOrtalama = () => {
    const [data, setData] = useState("");
    const [aritmeticMean, setAritmeticMean] = useState(0);

    const hesapla = (e) => {
        e.preventDefault();
        setAritmeticMean(aritmetikOrtalamaHesapFunc(data));
    }

    return (
        <Page title="Aritmetik Ortalama." breadcrumbs={[{ name: 'aritmetik ortalama', active: true }]}>
            <form onSubmit={hesapla} className="mt-4" >
                <textarea
                    className="form-control"
                    placeholder="Değerleri giriniz..."
                    value={data}
                    onChange={e => setData(e.target.value)} />
                <button type="submit" className="w-100 btn btn-secondary mt-2">Gönder</button>
            </form>

            {aritmeticMean !== 0 ?
                <div class="alert alert-primary" role="alert">
                    Hesaplanan Aritmetik Ortalama: {aritmeticMean}
                </div>
                : null
            }
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Aritmetik ortalama</CardTitle>
                <CardText>Aritmetik ortalama, bir sayı dizisindeki elemanların toplamının eleman sayısına bölünmesi ile elde edilir.</CardText>

            </Card>
        </Page>
    )
}