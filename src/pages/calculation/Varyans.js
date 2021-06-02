import React, { useState } from 'react'
import Page from 'components/Page';
import { Card, CardTitle, CardText } from 'reactstrap';

export const Varyans = () => {
    const [data, setData] = useState("");
    const [varyans, setVaryans] = useState(0);
    const [firstTime, setFirstTime] = useState(true);

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
            let aritmetikOrtalama = (toplam / dizi.length);
            let farkKaresi = [];
            dizi.forEach(eleman => {
                let fark = eleman - aritmetikOrtalama;
                farkKaresi.push(fark * fark);
            });

            let farkKaresiOrtalama = 0;
            farkKaresi.forEach(eleman => {
                farkKaresiOrtalama += eleman;
            });
            setVaryans(farkKaresiOrtalama / farkKaresi.length);

        }
        setFirstTime(false);
    }

    return (
        <Page title="Varyans (Popülasyon Standart Sapması)" breadcrumbs={[{ name: 'varyans', active: true }]}>
            <form onSubmit={hesapla} className="mt-4" >
                <textarea
                    className="form-control"
                    placeholder="Değerleri giriniz..."
                    value={data}
                    onChange={e => setData(e.target.value)} />
                <button type="submit" className="w-100 btn btn-secondary mt-2">Gönder</button>
            </form>

            {varyans !== 0 && !isNaN(varyans) ?
                <div class="alert alert-primary" role="alert">
                    Hesaplanan Varyans (Popülasyonun Standart Sapması): {varyans}
                </div>
                : !firstTime ?
                    <div className="alert alert-danger" role="alert">
                        Hatalı Değer Girildi Ya Da Varyans Mevcut Değil
                </div> :
                    null
            }

            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Varyans</CardTitle>
                <CardText>
                    Olasılık kuramı ve istatistik bilim dallarında varyans bir rassal değişken, bir olasılık dağılımı veya örneklem için istatistiksel yayılımın, mümkün bütün değerlerin beklenen değer veya ortalamadan uzaklıklarının karelerinin ortalaması şeklinde bulunan bir ölçüdür. <br /> Ortalama bir dağılımın merkezsel konum noktasını bulmaya çalışırken, varyans değerlerin ne ölçekte veya ne derecede yaygın olduklarını tanımlamayı hedef alır. Varyans için ölçülme birimi orijinal değişkenin biriminin karesidir.
                </CardText>

            </Card>
        </Page>
    )
}