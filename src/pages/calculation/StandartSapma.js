import React, { useState } from 'react'
import Page from 'components/Page';
import { standartSapmaHesaplamaFunc } from './hesapFonksiyonları';
import { Card, CardTitle, CardText } from 'reactstrap';


export const StandartSapma = () => {
    const [data, setData] = useState("");
    const [standartSapma, setStandartSapma] = useState(0);

    const hesapla = (e) => {
        e.preventDefault();
        setStandartSapma(standartSapmaHesaplamaFunc(data));
    }

    return (
        <Page title="Standart Sapma" breadcrumbs={[{ name: 'standart sapma', active: true }]}>
            <form onSubmit={hesapla} className="mt-4" >
                <textarea
                    className="form-control"
                    placeholder="Değerleri giriniz..."
                    value={data}
                    onChange={e => setData(e.target.value)} />
                <button type="submit" className="w-100 btn btn-secondary mt-2">Gönder</button>
            </form>

            {standartSapma !== 0 ?
                <div className="alert alert-primary" role="alert">
                    Hesaplanan Standart Sapma: {standartSapma}
                </div>
                : null
            }

            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Standart Sapma</CardTitle>
                <CardText>
                    Standart sapma, Olasılık kuramı ve istatistik bilim dallarında, bir anakütle, bir örneklem, bir olasılık dağılımı veya bir rassal değişken, veri değerlerinin yayılımının özetlenmesi için kullanılan bir ölçüdür.<br /><br />
                    Standart sapma varyansın kareköküdür. Daha matematiksel bir ifade ile standart sapma veri değerlerinin aritmetik ortalamadan farklarının karelerinin toplamının veri sayısı -1'e bölümünün kareköküdür, yani verilerin ortalamadan sapmalarının kareler ortalamasının karekökü olarak tanımlanır.
                </CardText>

            </Card>
        </Page>
    )
}