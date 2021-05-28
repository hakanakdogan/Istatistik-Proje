import React, { useState } from 'react'
import Page from 'components/Page';
import { Card, CardTitle, CardText } from 'reactstrap';
import { aritmetikOrtalamaHesapFunc, standartSapmaHesaplamaFunc } from './hesapFonksiyonları';

export const DegisimKatsayisi = () => {
    const [data, setData] = useState("");
    const [degisimKatsayisi, setdegisimKatsayisi] = useState(0);

    const hesapla = (e) => {
        e.preventDefault();
        let aritmetikOrtalama = aritmetikOrtalamaHesapFunc(data);
        let standartSapma = standartSapmaHesaplamaFunc(data);
        setdegisimKatsayisi((standartSapma / aritmetikOrtalama) * 100);
    }

    return (
        <Page title="Değişim Katsayısı" breadcrumbs={[{ name: 'degisim katsayisi', active: true }]}>
            <form onSubmit={hesapla} className="mt-4" >
                <textarea
                    className="form-control"
                    placeholder="Değerleri giriniz..."
                    value={data}
                    onChange={e => setData(e.target.value)} />
                <button type="submit" className="w-100 btn btn-secondary mt-2">Gönder</button>
            </form>

            {degisimKatsayisi !== 0 ?
                <div class="alert alert-primary" role="alert">
                    Hesaplanan Değişim Katsayısı: {degisimKatsayisi}
                </div>
                : null
            }
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Değişim Katsayısı</CardTitle>
                <CardText>Olasılık kuramı ve istatistik bilim dallarında değişim katsayısı bir olasılık dağılımı için bir normalize edilmiş istatistiksel yayılma ölçüsüdür. <br /> <br />Standart sapmanın ortalamaya orantısı olarak tanımlanır. Anlamlı olması için ortalamanın sıfır olmaması gerekir. Negatif sonuçlara da uygulanması mümkün olmakla beraber genel olarak değişim katsayısı pozitif olarak kullanılır.<br /><br />

                Bu kavram genellikle 100le çarparak bir yüzdelik (yani %) olarak ifade edilir. Yüzdelik olarak ifade edilen değişim katsayısının mutlak değerine relatif standart sapma adı da verilmektedir.

değişim katsayısı, hiç itiraz kabul etmeden oransal ölçekli sayısal veriler için kullanılmakta ve hatta biraz hatalı görünse bile aralıksal ölçekli sayısal veriler için de pratikte kullanılmaktadır. Kategorik veriler için değişim katsayısı anlamsız olabilir.</CardText>

            </Card>
        </Page>
    )
}