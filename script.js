function toggleCard(card) {
    // Close other cards
    const allCards = document.querySelectorAll('.knowledge-card');
    allCards.forEach(c => {
        if (c !== card) {
            c.classList.remove('active');
        }
    });

    // Toggle current card
    card.classList.toggle('active');
}

// Product Data
const products = [
    {
        id: 1,
        name: "古伊万里 染付山水図皿",
        price: 45000,
        shortDesc: "江戸中期。繊細な筆致で描かれた山水が見事な一品。",
        description: "江戸時代中期に作られた古伊万里の皿です。呉須の藍色が美しく、余白を生かした構図が日本的な美意識を感じさせます。煮物や刺身の盛り付けに最適です。",
        size: "直径 21cm / 高さ 4cm",
        era: "江戸中期",
        image: "assets/product1.png"
    },
    {
        id: 2,
        name: "輪島塗 朱漆吸物椀",
        price: 28000,
        shortDesc: "明治期。深みのある朱色が食卓を華やかに彩ります。",
        description: "明治時代に作られた輪島塗の吸物椀です。幾重にも塗り重ねられた漆の層が、堅牢さと優美な艶を生み出しています。ハレの日の食卓にいかがでしょうか。",
        size: "直径 12cm / 高さ 9cm",
        era: "明治時代",
        image: "assets/product2.png"
    },
    {
        id: 3,
        name: "南部鉄器 鉄瓶 霰紋",
        price: 60000,
        shortDesc: "大正ロマンを感じさせる、重厚な佇まいの鉄瓶。",
        description: "大正時代に作られた南部鉄器の鉄瓶です。伝統的な霰（あられ）紋様が施されており、使い込むほどに風合いが増します。お茶の味をまろやかにする効果もあります。",
        size: "幅 18cm / 高さ 22cm",
        era: "大正時代",
        image: "assets/product3.png"
    },
    {
        id: 4,
        name: "備前焼 花入",
        price: 35000,
        shortDesc: "土の温もりを感じる、素朴で力強い備前焼。",
        description: "釉薬を使わず、土と炎の芸術とも言われる備前焼の花入です。窯変（ようへん）による独特の模様は、二つとして同じものがありません。野の花がよく似合います。",
        size: "高さ 25cm / 口径 8cm",
        era: "昭和初期",
        image: "assets/product4.png"
    },
    {
        id: 5,
        name: "山水図 掛軸",
        price: 80000,
        shortDesc: "静寂な山水を描いた、心安らぐ一幅。",
        description: "水墨画による山水図の掛軸です。余白の美と、墨の濃淡だけで表現された世界観が、床の間に静寂をもたらします。",
        size: "縦 180cm / 横 55cm",
        era: "明治後期",
        image: "assets/product5.png"
    }
];
