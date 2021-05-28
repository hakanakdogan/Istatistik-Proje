import React, { useState } from 'react'
import Page from 'components/Page';
import { Card, CardTitle, CardText } from 'reactstrap';


export const HarmonikOrtalama = () => {
    const [data, setData] = useState({
        elemanlar: ""
    });
    const [harmonikOrt, setHarmonikOrt] = useState(0);
    const harmonicMean = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += 1 / arr[i]
        }
        return arr.length / sum;
    }
    const onChange = (e) => {
        setData({ ...data, elemanlar: e.target.value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let array = data.elemanlar.split(",").map(Number);
        let isNan = false;
        array.forEach((el) => {
            if (isNaN(el)) {
                isNan = true;
            }
        })
        if (!isNan) {
            setHarmonikOrt(harmonicMean(array));

        }

    }
    return (
        <Page title="Harmonik Ortalama" breadcrumbs={[{ name: 'harmonik ortalama', active: true }]}>
            <form onSubmit={e => onSubmit(e)} className="mt-4" >
                <textarea
                    className="form-control"
                    placeholder="Değerleri giriniz..."
                    id="elemanlar"
                    value={data.elemanlar}
                    onChange={e => onChange(e)} />
                <button type="submit" className="w-100 btn btn-secondary mt-2">Gönder</button>
            </form>

            {harmonikOrt !== 0 ?
                <div className="alert alert-primary" role="alert">
                    Hesaplanan Harmonik Ortalama: {harmonikOrt}
                </div>
                : null
            }

            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Aritmetik ortalama</CardTitle>
                <CardText>Harmonik ortalama, gözlem sonuçlarının terslerinin aritmetik ortalamasının tersidir. Örn: n/(1/x<sub>1</sub>+ 1/x<sub>2</sub>+ ...+ 1/x<sub>n</sub>)</CardText>

            </Card>

        </Page>
    )
}
